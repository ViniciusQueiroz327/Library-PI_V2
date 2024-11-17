import { BookCard } from "../BookCard/BookCard";
import { BookSectionContainer, BookCarosel } from './style'
import { UIBookSection } from './types'

const BookSection: React.FC<UIBookSection> = ({ sectionTitle }) =>  {
    return (
        <BookSectionContainer>
            <h1>{sectionTitle}</h1>
            <BookCarosel className="bookCarosel">
                <BookCard bookTitle="Refém de um Criminoso" bookImage="https://m.media-amazon.com/images/I/71GwA-j8BOL._AC_UL320_.jpg"/>
                <BookCard bookTitle="Refém de um Criminoso" bookImage="https://m.media-amazon.com/images/I/71GwA-j8BOL._AC_UL320_.jpg"/>
                <BookCard bookTitle="Refém de um Criminoso" bookImage="https://m.media-amazon.com/images/I/71GwA-j8BOL._AC_UL320_.jpg"/>
                <BookCard bookTitle="Refém de um Criminoso" bookImage="https://m.media-amazon.com/images/I/71GwA-j8BOL._AC_UL320_.jpg"/>
                <BookCard bookTitle="Refém de um Criminoso" bookImage="https://m.media-amazon.com/images/I/71GwA-j8BOL._AC_UL320_.jpg"/>
                <BookCard bookTitle="Refém de um Criminoso" bookImage="https://m.media-amazon.com/images/I/71GwA-j8BOL._AC_UL320_.jpg"/>
                <BookCard bookTitle="O Livro de Eli" bookImage="https://m.media-amazon.com/images/I/81nqPm12ALL._AC_UL320_.jpg"/>
                <BookCard bookTitle="O Livro de Eli" bookImage="https://m.media-amazon.com/images/I/81nqPm12ALL._AC_UL320_.jpg"/>
                <BookCard bookTitle="O Livro de Eli" bookImage="https://m.media-amazon.com/images/I/81nqPm12ALL._AC_UL320_.jpg"/>
                <BookCard bookTitle="O Livro de Eli" bookImage="https://m.media-amazon.com/images/I/81nqPm12ALL._AC_UL320_.jpg"/>
                <BookCard bookTitle="O Livro de Eli" bookImage="https://m.media-amazon.com/images/I/81nqPm12ALL._AC_UL320_.jpg"/>
                <BookCard bookTitle="O Livro de Eli" bookImage="https://m.media-amazon.com/images/I/81nqPm12ALL._AC_UL320_.jpg"/>
            </BookCarosel>
        </BookSectionContainer>
    )
}

export { BookSection }