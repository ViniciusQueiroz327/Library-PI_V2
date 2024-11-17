import { NewsRegistryContainer } from "./style"
import { Input } from '../../Components/Input/Input'
import { Button } from "../Button/Button"

const NewsRegistry = () => {
    return (
        <NewsRegistryContainer>
            <h1>Receba Novidades</h1>
            <Input placeholder="Nome" type="text"></Input>
            <Input placeholder="E-mail" type="email"></Input>
            <Button type="submit" title="Enviar"></Button>
        </NewsRegistryContainer>
    )
}

export { NewsRegistry }