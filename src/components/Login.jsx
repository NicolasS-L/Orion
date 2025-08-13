import '../css/login.css'

function Login() {




  return ( 
    <div className='container cardForm'>
      <form className='form'>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Digite seu e-mail'/>

        <label htmlFor="password">Senha</label>
        <input type="password" placeholder='Digite sua senha' />

        <button className='btn'>Entrar</button>

        <p className='lostPass'>Esqueceu a senha?</p>
      </form>
    </div>
  );
}

export default Login;