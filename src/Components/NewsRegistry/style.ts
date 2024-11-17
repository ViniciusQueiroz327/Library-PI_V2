import styled from 'styled-components';

export const NewsRegistryContainer = styled.section `
    width: 100%;
    height: 440px;
    margin: 35px 0;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    background-color: #e2e1d9;
    background-image: 
    url("/assets/fundoNewsRegistry_Invertido.png"),
    url("/assets/fundoNewsRegistry.png");
    background-repeat: repeat-y;
    background-position: left center, right center;
    background-size: auto;

    h1 {
        background-color: transparent;
        color: black;
    }
`
