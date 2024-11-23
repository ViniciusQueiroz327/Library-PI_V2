import { Header } from "../../Components/Header/Header";
import { Banner } from "../../Components/Banner/Banner";
import { AboutUsContainer } from './style'
import { Footer } from "../../Components/Footer/Footer";

const About = () => {
    return (<>
    <Header />
    <Banner logo="./assets/logo.png" />
    <AboutUsContainer>
        <h1>Sobre Nós</h1>
        <blockquote>
            <p>A Starlight Library é uma iniciativa 
            dedicada a transformar o modo de como doamos 
            e acessamos</p> 
            <p>livros. Nossa missão é criar 
            uma plataforma fácil e eficiente, conectando 
            doadores e leitores de</p> 
            <p>várias partes do Brasil.</p>
            <p>Acreditamos que o acesso à leitura deve ser fácil, 
            barato e tecnológico, e por isso simplificamos o</p> 
            <p>processo de doação, garantindo de forma segura que os livros 
            cheguem em quem tem interesse.</p>
            <p>Junte-se a nós nessa jornada para promover a leitura 
            e a educação, e nos ajude a contruir com um mundo</p>
            <p>onde o conhecimento é compartilhado e não tem preço. Na Starlight 
            Library, cada doação faz</p> 
            <p>diferença e cada livro encontra seu lar.</p>
        </blockquote>
    </AboutUsContainer>
    <Footer />
    </>)
}

export { About }