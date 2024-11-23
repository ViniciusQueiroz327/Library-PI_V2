import { MasterContainer, FormContainer, LinksContainer } from "./style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"

const Login = () => {
    return (<>
        <MasterContainer>
                <FormContainer>
                    <h1>Welcome to Plenna!</h1>
                    <form action="">
                        <label htmlFor="email">E-mail</label>
                        <Input placeholder="E-mail" type="email" name="email"/>
                        <label htmlFor="password">Senha</label>
                        <Input placeholder="Senha" type="password" name="password"/>
                    </form>
                    <Button title="Login" type="submit" path="/"></Button>
                    <LinksContainer>
                        <a href="/register">Cadastre-se</a>
                        <a href="#" id="esqueceuASenha">Esqueceu a senha?</a>
                    </LinksContainer>
                </FormContainer>
        </MasterContainer>
    </>)
}

export { Login }