import { MasterContainer } from "./style"
import { FormContainer } from "../Login/style"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"
import { Header } from "../../Components/Header/Header"

const BookRegister = () => {
    return (<>
        <Header />
        <MasterContainer>
            <FormContainer>
                <h1>Cadastro de Livro</h1>
                <form action="">
                    <label htmlFor="nome do livro">Nome do livro</label>
                    <Input placeholder="Nome do livro" type="text" name="nome do livro"/>
                    <label htmlFor="autor">Autor</label>
                    <Input placeholder="Autor" type="text" name="autor"/>
                    <label htmlFor="editora">Editora</label>
                    <Input placeholder="Editora" type="text" name="editora"/>
                </form>
                <Button title="DOAR" type="submit" path="/" onClick={() => alert("LIVRO CADASTRADO!")}></Button>
            </FormContainer>
        </MasterContainer>
    </>)
}

export { BookRegister }