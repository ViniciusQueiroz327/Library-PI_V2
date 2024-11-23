import { MasterContainer, LoginContainer, FormLoginContainer, LinksContainer } from "./style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"

const Login = () => {
    return (<>
        <MasterContainer>
            <img src="/assets/logo.png" alt="Logo da Starlight" id="logo" draggable="false"/>
            <LoginContainer>
                <FormLoginContainer>
                    <h1>Login</h1>
                    <form action="">
                        <label htmlFor="email">E-mail</label>
                        <Input placeholder="E-mail" type="email" name="email"/>
                        <label htmlFor="password">Senha</label>
                        <Input placeholder="Senha" type="password" name="password"/>
                    </form>
                    <Button title="Login" type="submit" path="/"></Button>
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