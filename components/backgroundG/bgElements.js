import styled from 'styled-components';

export const HeroBG = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    -webkit-backdrop-filter: blur(100px);
    filter: blur(100px);
    overflow: hidden;
    justify-content: center;

`;

// export const Img = styled.img`
//     position: absolute;
//     width: 100%;
//     height: 100%;
    
// `;

export const HeroCircle1 = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 535px;
    height: 536px;
    left: 500px;
    top: -242px;
    background: #FF9B4F;
    opacity: .8;

    @media screen and (max-width: 780px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: 100px;
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: 100px;
        opacity: 1;
    }
`;

export const HeroCircle2 = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 535px;
    height: 536px;
    left: 50px;
    top: -242px;
    background: #D12764;
    opacity: .8;

    @media screen and (max-width: 780px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: -50px;
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: -50px;
        opacity: 1;
    }
`;

export const HeroCircle3 = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 535px;
    height: 536px;
    left: 900px;
    top: -242px;
    background: #A1ECFD;
    opacity: .8;

    @media screen and (max-width: 780px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: 300px;
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: 300px;
        opacity: 1;
    }
`;

export const HeroCircle4 = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 535px;
    height: 536px;
    left: 1200px;
    top: -242px;
    background: #7B39BD;
    opacity: .8;

    @media screen and (max-width: 780px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: 400px;
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        transition: 0.8s all ease;
        width: 235px;
        height: 236px;
        top: -100px;
        left: 400px;
        opacity: 1;
    }
`;

