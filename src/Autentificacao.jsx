import React, { useState } from 'react';
import './FormLoginCad.scss'

const LoginForm = ({ onSwitchToSignup }) => {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário de login
  };

  return (
    <div className="user_forms-login">
      <h2 className="forms_title">Login</h2>
      <p>Seja bem-vindo(a) de volta!</p>
      <form className="forms_form" onSubmit={handleLoginSubmit}>
        <div className="forms_field">
          <input type="email" placeholder="Digite seu email" className="forms_field-input" required autoFocus />
        </div>
        <div className="forms_field">
          <input type="password" placeholder="Digite sua senha" className="forms_field-input" required />
        </div>
        <div className="forms_buttons">
          <input type="submit" value="Login" className="forms_buttons-action" />
        </div>
        <p>
        Não tem cadastro? Cadastre-se!{' '} <br/>
        <button type="button" className='botaoTroca' onClick={onSwitchToSignup}>
            Cadastro
        </button>
        </p>
      </form>
    </div>
  );
};

const SignupForm = ({ onSwitchToLogin }) => {
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário de inscrição
  };

  return (
    <div className="user_forms-signup">
      <h2 className="forms_title">Cadastrar</h2>
      <p>Será um prazer cuidar de você!</p>
      <form className="forms_form" onSubmit={handleSignupSubmit}>
        <div className="forms_field">
          <input type="text" placeholder="Digite seu nome completo" className="forms_field-input" required />
        </div>
        <div className="forms_field">
          <input type="email" placeholder="Digite seu email" className="forms_field-input" required />
        </div>
        <div className="forms_field">
          <input type="password" placeholder="Digite sua senha" className="forms_field-input" required />
        </div>
        <div className="forms_buttons">
          <input type="submit" value="Cadastrar" className="forms_buttons-action" />
        </div>
        <p>
          Já possui cadastro?{' '}<br/>
          <button type="button" className='botaoTroca' onClick={onSwitchToLogin}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

const AuthSection = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const switchToSignup = () => {
    setLoginFormVisible(false);
  };

  const switchToLogin = () => {
    setLoginFormVisible(true);
  };

  return (
    <section className="user">
      <div className="user_options-forms" id="user_options-forms">
        {isLoginFormVisible ? (
          <LoginForm onSwitchToSignup={switchToSignup} />
        ) : (
          <SignupForm onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </section>
  );
};

export default AuthSection;
