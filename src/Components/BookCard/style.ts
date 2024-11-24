import styled from 'styled-components';

export const BookCardContainer = styled.div `
    flex: 0 0 auto;
    width: calc((100% - 15px * var(--qtd) + 15px) / var(--qtd));
    height: 320px;
    border-radius: var(--border-radius1);
    background: white;
    color: black;
    
    &:not(:last-child) {
        margin-right: 15px;
        }
        
    img {
        height: 70%;
        // width: 100%;
        border-radius: var(--border-radius1);
    }

    h4 {
        height: 100%;
        color: black;
        padding: 10px;
    }
            
    a {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    }
`