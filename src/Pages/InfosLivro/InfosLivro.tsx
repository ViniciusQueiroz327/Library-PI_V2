import { Button } from "../../Components/Button/Button";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BookInfoContainer, SynopsisContainer } from "./style";

const InfoLivros = ( ) => {
    return (<>
    <Header />
    <BookInfoContainer>
        <div id="img">
            <img src="livro.png" alt="Capa do Livro" />
        </div>

        <div id="header">
            <h1 id="title">É Assim Que Acaba</h1>
            <div id="about">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iste omnis aliquam voluptatibus non perferendis architecto eaque laboriosam sed animi, incidunt reprehenderit eos suscipit fugit accusantium neque alias ad praesentium.</p>
            </div>
        </div>

        <div id="synopsis">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio esse, dignissimos eos exercitationem sed dolore ab, delectus, nesciunt consequatur natus totam voluptate quas quis sequi aliquam commodi non nostrum.
            Veniam eius doloremque suscipit reiciendis iusto voluptate possimus esse perspiciatis culpa incidunt aperiam vero tenetur placeat dicta necessitatibus illo, error debitis aspernatur repudiandae quod temporibus neque! Ullam nemo esse vero.
            Qui officiis, ratione distinctio reprehenderit laboriosam quam, placeat at natus dolore sed obcaecati provident aspernatur repellat? Laborum, nesciunt est ullam animi quisquam quasi sed deleniti minus fugit suscipit architecto ut.
            </p>
        </div>

        <div id="btns">
            <Button title="LER SINÓPSE COMPLETA" />
            <Button title="EU QUERO!"/>
        </div>
    </BookInfoContainer>
    <SynopsisContainer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita nesciunt commodi eveniet dicta quisquam enim culpa in sed? Recusandae modi fuga libero. Ipsum, dolorum fugiat asperiores expedita eos ea?
          Voluptatum velit aperiam tempore temporibus ullam illo qui esse doloremque aut aspernatur assumenda quis obcaecati distinctio fuga dolore nesciunt soluta consequuntur, alias eos iure, harum quod ab nostrum. Quo, exercitationem.
          Odio, praesentium sit. Labore voluptatem itaque, consequuntur ullam necessitatibus ab eius maxime fugiat consectetur saepe obcaecati minima ut excepturi doloremque corrupti? Voluptatem labore enim cum rem veniam voluptatibus cupiditate facere?
          Cum porro molestias ipsam inventore? Eos magni, aliquam nulla cupiditate sed est in dicta repellendus hic fugit exercitationem aliquid modi nesciunt sint? Iure, voluptatibus repellat voluptatem modi eligendi ad deserunt?
          Voluptatem ut ipsam corrupti vitae officiis laboriosam laborum, reprehenderit fugiat id voluptas quisquam est esse tempore sapiente laudantium tenetur. Enim, consectetur dolor aliquam quidem excepturi sunt magnam tempora nulla rem.
          Excepturi, laborum iure qui expedita voluptatibus optio, rem est corporis ut quis maxime, blanditiis ipsa ducimus! Corrupti aut exercitationem eveniet doloribus beatae, tempora illo magni itaque architecto temporibus possimus totam!
          Aliquam neque quaerat explicabo aut distinctio nihil provident, iusto vel. Impedit atque, commodi ab, vitae ex sit facere similique distinctio quidem amet praesentium nulla id porro, repudiandae enim voluptatum delectus!
          Aliquam esse qui delectus? Incidunt quaerat necessitatibus, corporis in minima eaque sed quod ipsum quia? Quae veniam repudiandae magnam blanditiis enim libero, facilis perferendis quas, at nihil, corporis porro ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse quas quo nam consequatur aspernatur veniam quae velit molestias vero nihil voluptatibus obcaecati natus laborum ex illo, nemo unde. Exercitationem?
          Omnis, pariatur tenetur numquam consequuntur, laboriosam exercitationem nihil voluptatibus esse et eveniet sed, nobis quo quasi harum officia nulla aperiam excepturi nisi debitis ipsam nostrum facilis fugit doloremque. Illo, dolores!
          A nesciunt placeat dolores laboriosam. Fugit atque alias dolorem! Aspernatur, deserunt quis expedita labore quo cupiditate alias provident adipisci magnam officiis unde inventore voluptatum veniam tempore exercitationem porro quisquam ratione?
          Nostrum facilis libero sit minus numquam dolore vitae unde beatae, earum, hic dolores nesciunt? Pariatur cum ex beatae, blanditiis cupiditate possimus vel ea corporis porro officiis dolorem dolor doloribus dicta.
          Doloremque, laboriosam quam quisquam doloribus architecto quia asperiores repudiandae deserunt, incidunt odit blanditiis unde aspernatur modi natus sapiente illum cupiditate praesentium impedit distinctio accusantium ut quibusdam deleniti eum. Recusandae, voluptas.  
        </p>
    </SynopsisContainer>
    <Footer/>
    </>)
}

export { InfoLivros }