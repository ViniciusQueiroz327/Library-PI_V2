import { MasterContainer, LoginContainer, FormLoginContainer } from "./style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"

const Register = () => {
    return (<>
        <MasterContainer>
            <img src="/assets/logo.png" alt="Starlight" id="logo" draggable="false"/>
            <LoginContainer>
                <FormLoginContainer>
                    <h1>Cadastro</h1>
                    <form action="">
                    <Input placeholder="Nome de usuário" type="text"/>
                        <Input placeholder="E-mail" type="email"/>
                        <Input placeholder="Senha" type="password"/>
                    </form>
                    <Button title="Finalizar" type="button"></Button>
                        <a href="/login">Já possui uma conta?</a>
                </FormLoginContainer>
            </LoginContainer>
        </MasterContainer>
    </>)
}

export { Register }