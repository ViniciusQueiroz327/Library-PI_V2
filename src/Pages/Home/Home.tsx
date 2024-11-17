import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { Banner } from "../../Components/Banner/Banner";
import { BookSection } from "../../Components/BookSection/BookSection";
import { NewsRegistry } from '../../Components/NewsRegistry/NewsRegistry'
import { BlockquoteContainer } from "./style";

const Home = () => {
    return (<>
    <Header />
    <Banner text="Encontre aqui os livros 
    que você procura sendo doados por pessoas 
    que não irão mais ler!!"/>
    <BookSection sectionTitle="Section 1"></BookSection>
    <BookSection sectionTitle="Section 2"></BookSection>
    <BookSection sectionTitle="Section 3"></BookSection>
    <NewsRegistry />
    <BlockquoteContainer>
        <blockquote>"Não há amigo tão leal quanto um livro" - <span>O Sol Também se Levanta</span></blockquote>
    </BlockquoteContainer>
    <Footer />
    </>)
}

export { Home }