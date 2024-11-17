import styled from 'styled-components';

export const BannerContainer = styled.div `
    width: 100%;
    position: relative;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url("./assets/image.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 600px;

    h1 {
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        background-color: transparent;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -35%);
        background-color: transparent;
        width: 350px
    }
`


// export const BannerContainer = ( a: number ) => {
//     return `
//     border-radius: ${a};
//     width: 100%;
//     position: relative;
//     background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url("./assets/image.png");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     height: 600px;
    
//     h1 {
//         position: absolute;
//         top: 50%;
//         left: 40%;
//         transform: translate(-50%, -50%);
//         background-color: transparent;
//         }
        
//     img {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -35%);
//         background-color: transparent;
//         width: 350px
//     }
// `}
            
            