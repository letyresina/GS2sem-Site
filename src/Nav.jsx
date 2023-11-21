import {} from 'react'
import { NavLink } from 'react-router-dom';
import './App.scss'

function Nav(){
    return(
        <>
            <header className='header'>
                <div className='container-nav'>
                    <img className='logo' src='./src/assets/logoMyHealth.png' alt="Logo do projeto MyHealth" />
                    <nav className='nav-items'>
                        <NavLink to='Home' id='item-nav' className='item-nav'>Home</NavLink>
                        <NavLink to='Projeto' id='item-nav' className='item-nav'>Projeto</NavLink>
                        <NavLink to='Duvidas' id='item-nav' className='item-nav'>Dúvidas frequentes</NavLink>
                        <NavLink to='Contato' id='item-nav' className='item-nav'>Contato</NavLink>
                        <div id='cadastroLogin'>
                            <img src='./src/assets/entrar-avatar.png' alt="Usuário entrar" />
                            <NavLink to='CadastroLogin' id='item-nav' className='item-nav'>Cadastro/Login</NavLink>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav