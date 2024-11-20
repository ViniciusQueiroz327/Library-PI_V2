import { MasterContainer, LoginContainer, FormLoginContainer, LinksContainer } from "./style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"

const Login = () => {
    return (<>
        <MasterContainer>
            <img src="/assets/logo.png" alt="Starlight" id="logo" draggable="false"/>
            <LoginContainer>
                <FormLoginContainer>
                    <h1>Login</h1>
                    <form action="">
                        <Input placeholder="E-mail" type="email"/>
                        <Input placeholder="Senha" type="password"/>
                    </form>
                    <Button title="Login" type="button"></Button>
                    <LinksContainer>
                        <a href="/register">Cadastre-se</a>
                        <a href="#">Esqueceu a senha?</a>
                    </LinksContainer>
                </FormLoginContainer>
            </LoginContainer>
        </MasterContainer>
    </>)
}

export { Login }