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
            A Starlight Library é uma iniciativa 
            dedicada a transformar o modo de como doamos 
            e acessamos o livros.  Nossa missão é criar 
            uma plataforma fácil e eficiente, conectando 
            doadores e leitores de várias partes do brasil.
            Acreditamos que o acesso à leitura deve ser fácil, 
            barato e tecnológico, por isso simplificamos o processo 
            de doação garantindo de forma segura que os livros 
            cheguem em quem tem interesse.
            Junte-se a nós nessa jornada para promover a leitura 
            e educação, e nos ajude a contruir um mundo onde o 
            conhecimento é compartilhado e não tem preço. Na Starlight 
            Library, cada doação faz diferença e cada livro encontra seu lar.
        </blockquote>
    </AboutUsContainer>
    <Footer />
    </>)
}

export { About }