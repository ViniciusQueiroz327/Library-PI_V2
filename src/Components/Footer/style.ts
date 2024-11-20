import styled from 'styled-components';

export const ListContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-decoration: none;
`

export const AuxiliarContainer = styled.div `
    margin: 20px;
`

export const ContactsContainer = styled.div`
    border-left: 1px solid #00000088;
    padding: 20px 0 20px 170px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.3rem;

    .icons {
        margin: 10px;
    }

    img {
        width: 30px;
    }
`

export const ContainerMaster = styled.div `
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #e2e1d9;
    gap: 150px;
    margin-bottom: 30px;

    label {
        font-weight: 700;
    }

    h2 {
        margin-bottom: 30px;
        font-size: 2.5rem;
    }

    h1, h2, h3, h4, label, ul > li{
        color: black;   
        }
        
    li {
        list-style: none;
    }

    ul {
        width: 150px;
    }

    .title {
        padding-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 700;
    }
`