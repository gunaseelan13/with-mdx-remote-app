import styled from 'styled-components';
import Link from 'next/link'


export const FeaturedContainer = styled.div`
    display: grid;
    // padding: 20px 10px;
    margin: 0px 20px 60px 20px;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 20px 30px;
    
    // @media screen and (max-width: 768px) {
        
    // }
    // @media screen and ( max-width: 375px ){
    //     transition: 0.8s all ease;
    //     margin: 0px 20px 0px 20px;
        
    // }
    // @media screen and ( max-width: 414px ){
    //     transition: 0.8s all ease;
    //     margin: 0px 20px 0px 20px;
    // }
`;

export const FeaturedCard = styled.div`
    color: inherit;
    
    margin-top: 20px;
    // padding: 0px 40px;
    text-decoration: none;
    box-sizing: border-box;
    transition: color 0.15s ease, border-color 0.15s ease;
    image {
        width: 460px;
        height: 220px;
    }
    // @media screen and (max-width: 768px) {
    //     width: 300px;
    // }
    // @media screen and (max-width: 900px) {
    //     width: 400px;
    // }
    // @media screen and (max-width: 375px) {
    //     width: 330px;
    // }
    // @media screen and ( max-width: 414px ){
    //     width: 380px;
    // }
    
    
    &:hover {
        cursor: pointer;
    }
`;

export const FeaturedHeader = styled.div`
    color: #F4F4F4;
    font-size: 22px;
    opacity: 1;
    text-align: left;
    font-weight: 600;
    // padding: 0px 44px;
    letter-spacing: 0.01em;
    margin: 0px 20px 0px 20px;
    background: transparent;
    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin: 0px 20px 0px 20px;
    }
    @media screen and (max-width: 375px) {
        transition: 0.8s all ease;
        margin: 0px 20px 0px 20px;
        font-size: 20px;
    }
    @media screen and ( max-width: 414px ){
        transition: 0.8s all ease;
        margin: 0px 20px 0px 20px;
    }
    
`;

export const PostTitle = styled.div`
    color: #F4F4F4;
    font-size: 20px;
    text-align: left;
    font-weight: 400;
    padding: 2px 0px;
    
    background: transparent;
    
    &:hover {
        text-decoration: underline; 
        transition: 0.8s all ease;
        cursor: pointer;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
       
    }
    @media screen and (max-width: 375px) {
        font-size: 16px;
        transition: 0.8s all ease;
    
    }
`;