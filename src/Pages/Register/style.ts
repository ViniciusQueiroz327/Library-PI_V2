import styled from 'styled-components';

export const MasterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(248.08deg, #FFFFFF 0.33%, #0F172A 99.67%);

    #logo{
        position: absolute;
        right: 1%;
        top: 14.6%;
        width: 830px;
        z-index: 2;
    }
`

export const LoginContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
        color: black;
    }
`

export const FormLoginContainer = styled.div `
    background: #D9D9D999;
    box-shadow: -32.67px 32.67px 32.67px 0px #FFFFFF1A inset,
                32.67px -32.67px 32.67px 0px #A5A5A51A inset;
    width: 50vw;
    height: 400px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    justify-content: space-evenly;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    a {
        font-size: small;
        text-decoration: none;
        color: black;
        font-weight: 700;
        margin: 10px;
    }

    Input {
        width: 350px;
    }

    a:hover {
        text-decoration: underline;
    }
`