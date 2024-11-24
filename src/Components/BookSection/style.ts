import styled from 'styled-components';

export const BookSectionContainer = styled.div `
    // position: relative;
    // width: 100%;
    // background: red;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    height: 420px;
    padding: 0 100px;
    box-shadow: var(--shadow-1);
`

export const CaroselContainer = styled.div `
    position: relative;
    width: 100%;

    .left-btn {
        left: -100px;
        border-radius: 0 var(--border-radius1) var(--border-radius1) 0;
        }
        
    .right-btn {
        right: -100px;
            border-radius: var(--border-radius1) 0 0 var(--border-radius1);
    }

    .animating-left {
        animation: animating-left 1.2s ease;
    }
    .animating-right {
        animation: animating-right 1.2s ease;
    }

    // .bookCarosel:not(:last-child) {
    //     margin: 0 var(--margin);
    // }
`
    
export const BookCarosel = styled.div `
    display: flex;
    transform: translateX(calc((-100% - 30px) - (100% - 15px * var(--qtd) + 15px) / var(--qtd)));
`

export const NavigationButtons = styled.span `
    position: absolute;
    height: 100%;
    width: 85px;
    background: #000000AA;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: opacity .3s;
    z-index: 2;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`