import styled from 'styled-components';

export const BookSectionContainer = styled.div `
    background-color: var(--dark-gray);
    color: var(--background);
    width: 100%;
    height: 440px;
    margin-bottom: 60px;
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
`
    
export const BookCarosel = styled.div `
    width: 100%;
    
    // .slick-prev, .slick-next {
    //     position: none;
    // }


    // .slick-prev:before, .slick-next:before {
    //     color: white;
    //     z-index: 2;
    //     opacity: 1;
    //     display: visible;
    // }
`