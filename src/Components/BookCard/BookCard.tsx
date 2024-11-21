import { Link } from "react-router-dom"
import { UIBookCard } from './types'
import {
    BookCardContainer
} from './style'

const BookCard: React.FC<UIBookCard> = ({ bookTitle, bookImage }) =>  {
    return (
        <Link to="/infoslivro">
        <BookCardContainer>
            <img src={bookImage} alt="Book" draggable="false"/>
            {bookTitle && <h4>{bookTitle}</h4>}
        </BookCardContainer>
        </Link>
    )
}

export { BookCard }