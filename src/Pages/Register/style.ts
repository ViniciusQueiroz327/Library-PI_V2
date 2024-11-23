import styled from 'styled-components';

export const MasterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.5)),
                url("/assets/image.png");
    no-repeat center;
    background-size: cover;
`

export const LinksContainer = styled.div `
    a {
        margin: 10px;
    }

    a:hover {
        text-decoration: underline;
    }
`