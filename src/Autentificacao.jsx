import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormLoginCad.scss';

const LoginForm = ({ onSwitchToSignup }) => {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário de login
  };

  const [email1, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          email: email1,
          senha: senha,
        },
      });

      const user = response.data.find((user) => user.email === email1 && user.senha === senha);

      if (user) {
        // Limpar os campos do formulário
        setEmail('');
        setSenha('');
        toast.success('Login bem-sucedido!');
        console.log('Login bem-sucedido!', user);
        // Redirecionar o usuário ou executar lógica desejada
      } else {
        toast.error('Credenciais inválidas. Verifique seu email e senha.');
        console.log('Credenciais inválidas!');
      }
    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="user_forms-login">
      <h2 className="forms_title">Login</h2>
      <p>Seja bem-vindo(a) de volta!</p>
      <form className="forms_form" onSubmit={handleSubmit}>
        <div className="forms_field">
          <input type="email" placeholder="Digite seu email" value={email1} onChange={handleEmailChange} className="forms_field-input" required autoFocus />
        </div>
        <div className="forms_field">
          <input type="password" placeholder="Digite sua senha" value={senha} onChange={handleSenhaChange} className="forms_field-input" required />
        </div>
        <div className="forms_buttons">
          <input type="submit" value="Login" className="forms_buttons-action" />
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
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
  const [email2, setEmail] = useState('');
  const [nome2, setNome] = useState('');
  const [senha2, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', {
        email: email2,
        nome: nome2,
        senha: senha2,
      });

      // Exibir notificação de sucesso
      toast.success('Cadastro realizado com sucesso!');
      console.log('Cadastro realizado com sucesso!', response.data);

      // Limpar os campos do formulário
      setEmail('');
      setNome('');
      setSenha('');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Exibir notificação de erro
      toast.error('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <div className="user_forms-signup">
      <h2 className="forms_title">Cadastrar</h2>
      <p>Será um prazer cuidar de você!</p>
      <form className="forms_form" onSubmit={handleSubmit}>
        <div className="forms_field">
          <input
            type="text"
            placeholder="Digite seu nome completo"
            value={nome2}
            onChange={handleNomeChange}
            className="forms_field-input"
            required
          />
        </div>
        <div className="forms_field">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email2}
            onChange={handleEmailChange}
            className="forms_field-input"
            required
          />
        </div>
        <div className="forms_field">
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha2}
            onChange={handleSenhaChange}
            className="forms_field-input"
            required
          />
        </div>
        <div className="forms_buttons">
          <input type="submit" value="Cadastrar" className="forms_buttons-action" />
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
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