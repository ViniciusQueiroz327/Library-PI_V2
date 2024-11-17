//import { Link } from "react-router-dom"
import { UIBookCard } from './types'
import {
    BookCardContainer
} from './style'

const BookCard: React.FC<UIBookCard> = ({ bookTitle, bookImage }) =>  {
    return (
        <BookCardContainer>
            <img src={bookImage} alt="Book"/>
            {bookTitle && <h4>{bookTitle}</h4>}
        </BookCardContainer>
    )
}

export { BookCard }