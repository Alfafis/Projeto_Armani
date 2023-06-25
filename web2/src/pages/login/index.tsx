import bg_login from '../../assets/images/bg_login.png';
import './style.css';

function Login() {
  return (
    <div className="login">
      <div className="login-frame">
        <img src={bg_login} alt="Login" className="bg_login" />
        <form className="login-form">
          <label htmlFor="email" className="login-label">
            Usuário:
          </label>
          <input type="email" id="email" className="login-input" />
          <label htmlFor="password" className="login-label">
            Senha:
          </label>
          <input type="password" id="password" className="login-input" />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
