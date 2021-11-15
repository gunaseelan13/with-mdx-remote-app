import styled from 'styled-components';

export const ArticleContainer = styled.div`
    max-width: 1040px;
    height: auto;
    margin: 0px auto 0px;
    color: #d1d5db;
    z-index: 2;
`;

export const ContentSection = styled.div`
    margin: 180px 20px 20px ;
    line-height: 1.6;

    @media screen and (max-width: 375px) {
        margin: 160px 20px 20px ;
    }
`;

export const ContentBack = styled.div`
    max-width: 784px;
    margin: 0px auto 0px;

    a{
        margin: 0px auto 0px;
        padding: 8px; 
        border-radius: 10px
        
        &:hover {
            transition: 0.8s all ease;
            background: #3C3B41; 
        }
    }
    
`;

export const ContentTitle = styled.div`
    color: #0000;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    max-width: 600px;
    margin: 0 auto;
    // background: transparent;
    

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 375px) {
        transition: 0.8s all ease;
        font-size: 24px;
        line-height: 32px;
        text-align: left;
        margin: 0px 20px 0px 0px; 
        
    }
`;

export const ContentArticle = styled.div`
    color: #d1d5db;
    font-size: 22px;
    margin: 40px 0px;
    max-width: 784px;
    line-height: 30px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;


    ul{
        display: block;
        padding-left: 40px;
    }
    
    

    p{
        margin: 40px 0px;
        
    }

    img{
        box-shadow: 0 0 50px 8px rgb(0 0 0 / 3%)

    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 375px) {
        transition: 0.8s all ease;
        margin: 20px 0px;
        font-size: 20px;
        line-height: 30px;
    }
`;