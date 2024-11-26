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
    background: #ffffff94;
    width: 50vw;
    min-width: 500px;
    min-height: 420px;
    max-height: 420px;
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
        color: #0d2b3d;
        margin-top: 20px;
    }

    Input {
        width: 350px;
        color: black;
        font-weight: 400;

        &::placeholder {
            color: #0d2b3d;
            font-weight: 700;
        }
    }
`