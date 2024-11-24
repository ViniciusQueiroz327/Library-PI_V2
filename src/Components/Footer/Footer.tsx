import { Link } from "react-router-dom"
import { BlockquoteContainer } from "../../Pages/Home/style"
import { ListContainer, ContainerMaster, ContactsContainer, AuxiliarContainer} from "./style"

const Footer = () => {
return (<>
    <ContainerMaster>
        <AuxiliarContainer>
            <h2>PLENNA</h2>
            <ListContainer>
                <ul>
                    <li className="title">Mapa do Site</li>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/register"><li>Cadastro</li></Link>
                    <Link to="/bookRegister"><li>Cadastro de Livros</li></Link>
                    <Link to="/about"><li>Sobre nós</li></Link>
                </ul>
                <ul>
                    <li className="title">Sobre Nós</li>
                    <Link to="https://maps.app.goo.gl/Hp7grBic12S2weZDA" target="_blank"><li>Localização</li></Link>
                    <li className="empty">----------------</li>
                    <li className="empty">----------------</li>
                    <li className="empty">----------------</li>
                    <li className="empty">----------------</li>
                </ul>
                <ul>
                    <li className="title">Dúvidas</li>
                    <Link to="https://wa.me/+5511972117799?text=Olá, tenho uma dúvida sobre a Plenna!" target="_blank"><li>WhatsApp</li></Link>
                    <li className="empty">----------------</li>
                    <li className="empty">----------------</li>
                    <li className="empty">----------------</li>
                    <li className="empty">----------------</li>
                </ul>
            </ListContainer>
        </AuxiliarContainer>
        <ContactsContainer>
            <h1>Contato</h1>
            <h3>plenna@books.com</h3>
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
            <blockquote>All Rights Reserved <span>@Plenna</span></blockquote>
        </BlockquoteContainer>
</>)
}

export { Footer }