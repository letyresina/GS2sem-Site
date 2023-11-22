import {} from 'react'
import { NavLink } from 'react-router-dom';
import './App.scss'

function Nav(){
    return(
        <>
            <footer className='footer'>
                <div className='container-footer'>
                    <nav className='nav-items'>
                        <NavLink to='Home' id='item-nav' className='item-nav'>Home</NavLink>
                        <NavLink to='Projeto' id='item-nav' className='item-nav'>Projeto</NavLink>
                        <NavLink to='Duvidas' id='item-nav' className='item-nav'>Dúvidas frequentes</NavLink>
                        <NavLink to='Contato' id='item-nav' className='item-nav'>Contato</NavLink>
                    </nav>
                    <div className='areaUsuarios'>
                        <h4>Área dos usuários</h4>
                        <nav className='nav-items'>
                            <div className='cadastroLogin'>
                                <img className='img-fluid' src='./src/assets/entrar-avatar.png' alt="Usuário entrar" />
                                <NavLink to='CadastroLogin' id='item-nav' className='item-nav'>Cadastro/Login</NavLink>
                            </div>
                        </nav>
                    </div>
                    <hr/>
                    <p>Copyright © 2023 - Todos os direitos reservados</p>
                    <img className='img-fluid' id='logoPulsetech' src='./src/assets/logoPulsetech.png' alt='Logo PulseTech'/>
                </div>
            </footer>
        </>
    )
}

export default Nav