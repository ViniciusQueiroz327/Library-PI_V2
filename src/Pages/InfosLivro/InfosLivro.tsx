import { Button } from "../../Components/Button/Button";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BookInfoContainer, 
         SynopsisContainer,
         ImageContainer,
         HeaderContainer,
         AboutContainer,
         SummarizedSynopsisContainer,
         ButtonsContainer } from "./style";

const InfosLivro = ( ) => {
    return (<>
    <Header />
    {/* <p>Livros {">"} Destaques da semana {">"} Românticos {">"} É Assim que Acaba</p> */}
    <BookInfoContainer>
        <ImageContainer>
            <img src="./assets/EAssimQueAcaba.png" alt="Capa do Livro" />
        </ImageContainer>
        <HeaderContainer>
            <h1 id="title">É Assim Que Acaba</h1>
            <AboutContainer>
                <p>Capa comum - Edição padrão, 18 janeiro 2018 - Edição Português por <a href="https://www.colleenhoover.com" target="_blank">Colleen Hoover (Autor)</a>, <a href="https://www.instagram.com/priscila.catao/" target="_blank">Priscila Catão (Tradutor)</a></p>
            </AboutContainer>
        </HeaderContainer>
        <SummarizedSynopsisContainer>
            <p>
                Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta.
                Em É assim que acaba, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.
                Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?
                É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos.
            </p>
        </SummarizedSynopsisContainer>
        <ButtonsContainer>
            <Button title="LER SINOPSE COMPLETA" type="button"/>
            <Button title="EU QUERO!" type="button"/>
        </ButtonsContainer>
    </BookInfoContainer>
    <SynopsisContainer>
        <p>
            Lily Bloom, uma jovem determinada e resiliente, cresceu em uma casa marcada pela violência doméstica, onde presenciava sua mãe sofrer abusos nas mãos de seu pai. Apesar disso, ela nunca deixou que o passado definisse sua vida. Após se formar na faculdade, Lily se muda para Boston com o objetivo de começar uma nova vida e realizar o sonho de abrir sua própria floricultura.
            É em Boston que Lily conhece Ryle Kincaid, um neurocirurgião atraente, ambicioso e aparentemente perfeito, com quem ela desenvolve uma conexão instantânea. Apesar do charme e do carisma de Ryle, ele tem uma aversão declarada a relacionamentos sérios, mas Lily consegue romper suas barreiras, e os dois começam um romance intenso e apaixonado.
            No entanto, o relacionamento com Ryle começa a revelar lados obscuros. Lily se vê confrontada com comportamentos de Ryle que lembram os traumas que ela viveu na infância. Paralelamente, o reencontro inesperado com Atlas Corrigan, seu primeiro amor e um símbolo de segurança em sua adolescência, traz à tona memórias e sentimentos que ela pensava ter deixado para trás.
            Enquanto tenta lidar com a complexidade dos seus sentimentos por Ryle e Atlas, Lily se vê em um ciclo de conflitos internos e externos. Ela começa a questionar o que realmente significa amar e ser amada, enquanto enfrenta decisões difíceis sobre até onde o amor pode justificar o perdão ou se é hora de romper com padrões que ela jurou nunca repetir.
            Com uma narrativa intensa, emotiva e profundamente real, É Assim Que Acaba explora o impacto das escolhas, a força necessária para quebrar ciclos de abuso e a resiliência de uma mulher decidida a traçar um novo caminho. O livro não apenas conta uma história de amor, mas também aborda temas sensíveis como violência doméstica, empatia e superação.  
        </p>
    </SynopsisContainer>
    <Footer/>
    </>)
}

export { InfosLivro }