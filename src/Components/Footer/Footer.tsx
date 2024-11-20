import { BlockquoteContainer } from "../../Pages/Home/style"
import { ListContainer, ContainerMaster, ContactsContainer, AuxiliarContainer} from "./style"

const Footer = () => {
return (<>
    <ContainerMaster>
        <AuxiliarContainer>
            <h2>STARLIGHT LIBRARY</h2>
            <ListContainer>
                <ul>
                    <li className="title">Mapa do Site</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                </ul>
                <ul>
                    <li className="title">Sobre Nós</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                </ul>
                <ul>
                    <li className="title">Dúvidas</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaaa</li>
                </ul>
            </ListContainer>
        </AuxiliarContainer>
        <ContactsContainer>
            <h1>Contato</h1>
            <h3>starlight@books.com</h3>
            <h4>(11) 0800 123 4567</h4>
            <div>
                <a href="#"><img className="icons" src="/assets/icons/instagram.svg" alt="" draggable="false"/></a>
                <a href="#"><img className="icons" src="/assets/icons/facebook.svg" alt="" draggable="false"/></a>
            </div>
            <h4>UNASP</h4>
            <h4>São Paulo, SP</h4>
        </ContactsContainer>
    </ContainerMaster>
        <BlockquoteContainer>
            <blockquote>All Rights Reserved <span>@StarLight</span></blockquote>
        </BlockquoteContainer>
</>)
}

export { Footer }