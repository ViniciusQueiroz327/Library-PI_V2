import styled from 'styled-components';

export const MainNav = styled.nav `
    width: 100%;
    height: 70px;
    background-color: var(--background-gray);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;
    z-index: 5;


`

export const HomeWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

    #logo {
        margin-top: 10px;
        width: 100px;
    }

`

export const SearchBoxWrapper = styled.div `
    display: inline-block;
    cursor: pointer;
`

export const SearchBox = styled.input`
    width: 400px;
    height: 40px;
    background-color: white;
    border-radius: var(--border-radius2);
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
    z-index: 4;
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
    height: 100%;

    li, a {
        height: 100%;
    }
    
    li > a {
        display: grid;
        place-items: center;
        padding: 0 10px;
        color: white;
        font-weight: 600;
        background-color: #374151;
        transition: .25s;
    }

    li:hover > a {
        // opacity: .8;
        color: #AAA;
    }
`
