import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './App.scss';

function Nav() {
  const [userLogado, setUserLogado] = useState(null);

  useEffect(() => {
    // Atualizar o estado do usuário logado ao montar o componente
    setUserLogado(JSON.parse(sessionStorage.getItem("usuarioLogado")));
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('usuarioLogado');
    // Atualizar o estado do usuário logado ao fazer logout
    setUserLogado(null);
  };

  const handleLogin = (user) => {
    // Atualizar o estado do usuário logado ao fazer login
    setUserLogado(user);
  };

  return (
    <>
      <header className='header'>
        <div className='container-nav'>
          <img className='img-fluid' id='logo' src='./src/assets/logoMyHealth.png' alt="Logo do projeto MyHealth" />
          <nav className='nav-items'>
            <NavLink to='Home' id='item-nav' className='item-nav'>Home</NavLink>
            <NavLink to='Projeto' id='item-nav' className='item-nav'>Projeto</NavLink>
            <NavLink to='Duvidas' id='item-nav' className='item-nav'>Dúvidas frequentes</NavLink>
            <NavLink to='Contato' id='item-nav' className='item-nav'>Contato</NavLink>
            <div id='cadastroLogin'>
              <img className='img-fluid' src='./src/assets/entrar-avatar.png' alt="Usuário entrar" />
              {userLogado ? (
                <>
                  <NavLink to='#' id='item-nav' className='item-nav'>{`${userLogado.nome}`}</NavLink>
                  <button onClick={handleLogout} className='botaoNav'>| Logout</button>
                </>
              ) : (
                <NavLink to='CadastroLogin' id='item-nav' className='item-nav'>Cadastro/Login</NavLink>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;