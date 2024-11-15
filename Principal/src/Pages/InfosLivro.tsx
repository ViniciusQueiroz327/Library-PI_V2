import { Footer } from "../components/Footer";
import { NewsRegistry } from "../components/NewsRegistry";
import { NavBar } from "../components/NavBar";

export function InfosLivro() {
    return (
        <>
            <NavBar/>
            <p id="relativePath_Fixed">Home {">"} Destaques da Semana {">"} Românticos {">"} É Assim Que Acaba</p>
            <section id="sectionInfosLivro">
                <section id="infosLivro">

                    <section id="imgLivro">
                        <img src="/assets/images/EAssimQueAcaba.png" alt="É Assim Que Acaba" />
                    </section>

                    <section id="infos">
                        <div id="tituloEdicao">
                            <h1>É Assim Que Acaba: 1</h1>
                            <h5>Capa comum - Edição padrão, 18 de janeiro de 2018</h5>
                            <p>Português - por <a href="#">Collen Hoover</a> {"("}Autor{")"}, <a href="#">Priscila Catão</a> {"("}Tradutor{")"}</p>
                        </div>
                        <div id="disponibilidade">
                            <h2>Disponível para doação!</h2>
                            <button>Contatar doador</button>
                        </div>
                        <div id="frete">
                            <form action="">
                                <input id="freteInput" type="text" placeholder="Informe seu CEP"/>   
                            </form>
                            <button id="calcularFrete">Calcular frete</button>
                        </div>
                        <a href="">Não sei meu CEP</a>
                    </section>
                    
                </section>
            </section>
            <section id="sinopse">
                <h1>Sinopse</h1>
                <p>Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta.</p>
                <p>Em É assim que acaba , Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.
                Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?</p>
                <p>É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos</p>
            </section>
            <NewsRegistry/>
            <Footer/>
        </>
    )
}