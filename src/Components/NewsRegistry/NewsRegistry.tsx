import { NewsRegistryContainer } from "./style"
import { Input } from '../../Components/Input/Input'
import { Button } from "../Button/Button"

const NewsRegistry = () => {
    return (
        <NewsRegistryContainer>
            <h1>Receba Novidades</h1>
            <label htmlFor="nome">Nome</label>
            <Input placeholder="Nome" type="text" name="nome"></Input>
            <label htmlFor="email">E-mail</label>
            <Input placeholder="E-mail" type="email" name="email"></Input>
            <Button type="submit" title="Enviar" onClick={() => alert("REGISTRADO!")}></Button>
        </NewsRegistryContainer>
    )
}

export { NewsRegistry }