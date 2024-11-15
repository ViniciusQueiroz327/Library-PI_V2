export function Login() {
    return (
        <>
            <img src="/assets/images/logo.png" alt="Starlight" id="logo" />
            <div id="loginContainer">
                <div id="formLoginContainer">
                    <h1>Login</h1>
                    <form action="">
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                    </form>
                    <button><a href="/">Login</a></button>
                    <a href="/register">Cadastre-se</a>
                    <a href="#">Esqueceu a senha?</a>
                </div>
            </div>
        </>
    )
}