import styled from 'styled-components';

export const BookCardContainer = styled.div `
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 0;
    padding: 20px;
    /* width: 215px; */
    height: 310px;
    margin-right: 20px;
    background-color: white;
    border-radius: var(--border-radius1);
 
    h4 {
        text-align: center;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
        margin: 0 auto;
        line-height: 1.4;
        padding: .2rem 0;
        color: black;
    }

    img {
        height: 200px;
        width: 100%;
    }
`