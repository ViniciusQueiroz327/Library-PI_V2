import { MasterContainer, LoginContainer, FormLoginContainer } from "./style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"
import { Header } from "../../Components/Header/Header"

const BookRegister = () => {
    return (<>
        <Header />
        <MasterContainer>
            <img src="/assets/logo.png" alt="Starlight" id="logo" draggable="false"/>
            <LoginContainer>
                <FormLoginContainer>
                    <h1>Cadastro de Livros</h1>
                    <form action="">
                    <Input placeholder="Nome do livro" type="text"/>
                        <Input placeholder="Autor" type="text"/>
                        <Input placeholder="Editora" type="text"/>
                    </form>
                    <Button title="DOAR" type="button"></Button>
                </FormLoginContainer>
            </LoginContainer>
        </MasterContainer>
    </>)
}

export { BookRegister }