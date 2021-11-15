import styled from 'styled-components';



export const FeaturedContainer = styled.div`
    display: grid;
    // padding: 20px 10px;
    
    margin: 0px 20px 0px 20px;
   grid-template-columns: repeat(auto-fit,minmax(300px,480px));
    grid-gap: 0px 30px;
    
   
    // @media screen and ( max-width: 375px ){
    //     transition: 0.8s all ease;
    //     margin: 0px 20px 0px 20px;
        
    // }
    // @media screen and ( max-width: 414px ){
    //     transition: 0.8s all ease;
    //     margin: 0px 20px 0px 20px;
    // }
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

export const FeaturedCard = styled.div`
    color: inherit;
    
    margin: 20px 0px 20px 0px;
    padding: 20px 20px 20px 20px;
    background: #191E25;
    border-radius: 20px;
    // background: transparent;
    text-decoration: none;
    box-sizing: border-box;
    

    display: flex;
    flex-direction: row;
    
    // ImageTag {
    //     width: 70px;
    //     height: 70px;
    //     border-radius: 50%;
    //     background: transparent;
        
    //  }
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


export const PostTitle = styled.div`
    color: #F4F4F4;
    font-size: 20px;
    text-align: left;
    font-weight: 600;
    // padding: 2px 0px;
    
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
export const PostTitle2 = styled.div`
    color: #F4F4F4;
    font-size: 18px;
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

export const WorkTitle = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    margin: 0px 16px;
    background: transparent;
    
`;

export const ImageTag = styled.div`
    background: #191E25;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    border-radius: 70px;
    width: 70px;
    height: 70px;
    
    
`;
