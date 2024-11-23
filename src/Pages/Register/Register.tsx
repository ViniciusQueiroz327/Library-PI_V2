import { MasterContainer, LoginContainer, FormRegisterContainer } from "./style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"

const Register = () => {
    return (<>
        <MasterContainer>
            <img src="/assets/logo.png" alt="Starlight" id="logo" draggable="false"/>
            <LoginContainer>
                <FormRegisterContainer>
                    <h1>Cadastro</h1>
                    <form action="">
                        <label htmlFor="nome de usuário">Nome de Usuário</label>
                        <Input placeholder="Nome de usuário" type="text" name="nome de usuário"/>
                        <label htmlFor="email">E-mail</label>
                        <Input placeholder="E-mail" type="email" name="email"/>
                        <label htmlFor="password">Senha</label>
                        <Input placeholder="Senha" type="password" name="password"/>
                    </form>
                    <Button title="Finalizar" type="button" path="/login" onClick={() => alert("CADASTRADO!")}></Button>
                        <a href="/login">Já possui uma conta?</a>
                </FormRegisterContainer>
            </LoginContainer>
        </MasterContainer>
    </>)
}

export { Register }