import styled from "styled-components";



export const BookInfoContainer = styled.div `
    margin: 50px;
    padding: 10px;
    margin-top: 150px;
    background: #747474;
    height: 450px;
    width: calc(100% - 100px);
    border-radius: 24px;

    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-rows: 1fr 3fr 1fr;
    justify-items: center;
    align-items: center;
    overflow: hidden;

    #img {
        grid-column: 1;
        grid-row: 1 / 4;
        justify-self: end;
        margin: 20px;
        height: calc(100% - 40px);
        width: 240px;
        background: #AAA;
    }

    #header {
        grid-column: 2 / 4;
        padding: 30px;
        justify-self: start;
        width: 100%;

        p {
            white-space: nowrap;
        }

        #about {
            position: relative;
            overflow: hidden;
        }

        #about::after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            display: block;
            width: 150px;
            height: 18px;
            background: linear-gradient(90deg, #00000000, #747474);
        }
    }
        
    #synopsis {
        align-self: start;
        padding: 0 30px;
        grid-column: 2 / 4;
    }

    #btns {
        grid-column: 2 / 4;
        grid-row: 3;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;
    }

    Button {
        width: 100%;
    }
`


export const SynopsisContainer = styled.section`
  width: 100%;
  height: 400px;
  margin: 70px 0;
  padding: 50px;
  background: white;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  position: relative;

  p {
    color: black;
  }

  &::before {
    content: "Sinópse";
    background: #333;
    padding: 10px 80px;
    font-weight: 500;
    font-size: 22px;
    border-radius: 12px;
    position: absolute;
    top: 0;
    transform: translateY(-35%);
  }

  
`;