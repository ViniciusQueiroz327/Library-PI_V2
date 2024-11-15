export function Register() {
    return (
        <>
            <img src="/assets/images/logo.png" alt="Starlight" id="logo" />
            <div id="loginContainer">
                <div id="formLoginContainer">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder="Nome de usuário"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                    </form>
                    <button><a href="/login">Finalizar</a></button>
                    <a href="/login">Já possui uma conta?</a>
                </div>
            </div>
        </>
    )
}