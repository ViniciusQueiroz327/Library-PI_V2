import styled from 'styled-components';

export const MainNav = styled.nav `
    width: 100%;
    height: 70px;
    background-color: var(--background-gray);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;
    z-index: 2;

    #logo {
        width: 100px;
    }

    #home {
        position: absolute;
        left: 6.5%;
    }
`

export const SearchBoxWrapper = styled.div `
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    display: inline-block;
    cursor: pointer;
`

export const SearchBox = styled.input`
    width: 400px;
    height: 40px;
    background-color: white;
    border-radius: 12px;
    border-style: none;
    padding: 0 2rem;
    font-size: large;
    outline: none;
`

export const DivIcons = styled.div `
    img {
        width: 66px;
        padding: 1rem;
    }
`

export const SecondaryNav = styled.nav `
    width: 100%;
    height: 35px;
    background-color: #374151;
    position: fixed;
    top: 70px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const GenerosNav = styled.ul `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;
    width: 100vw;
    list-style: none;
    background-color: #374151;

    li > a {
        color: white;
        font-weight: 700;
        background-color: #374151;
    }
`
