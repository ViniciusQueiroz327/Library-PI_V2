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

export const FormContainer = styled.div `
    background: #FFFFFF55;
    width: 50vw;
    min-width: 500px;
    height: 480px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    justify-content: space-evenly;
    position: relative;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    a {
        font-size: 1rem;
        text-decoration: none;
        color: #183444;
        font-weight: 700;
    }

    #esqueceuASenha {
        color: #333;
    }

    h1 {
        color: #183444;
    }

    Input {
        width: 350px;
        color: black;
        font-weight: 400;

        &::placeholder {
            color: #183444;
            font-weight: 700;
        }
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: -170px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 300px;
        background: url("/assets/logo.png") no-repeat center;
        background-size: contain;
    }
`

export const LinksContainer = styled.div `
    a {
        margin: 10px;
    }

    a:hover {
        text-decoration: underline;
    }
`