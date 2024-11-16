import { Link } from "react-router-dom"

export function BookCard() {
    return (
        <>
        <div className="bookCard">
            <img src="/assets/images/livro.png" alt="Book"/>
                <h4>As Coisas Que Você Só Vê Quando Desacelera</h4>
                <button type="button"><Link to='/infosLivro'>Quero esse!</Link></button>
        </div>
        </>
    )
}