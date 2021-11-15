import styled from 'styled-components';

export const Nav = styled.nav`
     // margin-top: -80px;
    max-width: auto;
//     width: 1040px;
     // height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
   position: sticky;
    top: 0;
    margin: 0px 20px 0px 20px;
    
    z-index: 4;

    @media screen and ( max-width: 960px ){
        transition: 0.8s all ease;
     //    position: static;
     }
     @media screen and ( max-width: 768px ){
          transition: 0.8s all ease;
          margin: 0px 20px 0px 20px;
          width: auto;
     }

     @media screen and ( max-width: 375px ){
          transition: 0.8s all ease;
          margin: 0px 20px 0px 20px;
     }
     @media screen and ( max-width: 414px ){
          transition: 0.8s all ease;
          margin: 0px 20px 0px 20px;
     }
    

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1040px;
//     padding: 0 24px;
    
    background: transparent;

    @media screen and ( max-width: 768px ){
     transition: 0.8s all ease;

     width: 768px;
  }

  }
     @media screen and ( max-width: 320px ){
     transition: 0.8s all ease;
     width: 320px;
  }
  @media screen and ( max-width: 414px ){
     transition: 0.8s all ease;
     width: 414px;
     }
  

`;

export const NavLogo = styled.div`
     color: #00000;
     justify-self: flex-start;
     cursor: pointer;
     font-size: 24px;
     display: flex;
     align-items: center;
     // margin-left: 24px;
     font-weight: bold;
     text-decoration: none;
     background: transparent;

     a{
          color: #00000;
          text-decoration: none;
         

     }

`;


export const NavMenu = styled.ul`
     display: flex;
     align-items: right:
     flex-direction: row;
     text-align: center;
     font-size: 16px;
     background: transparent;

     ul{
          display: flex;
          gap: 8px;
          flex-direction: row;
          flex-wrap: wrap;
          color: #00000;
          // margin: 20px;
          text-decoration: none;

     }

     


     @media screen and ( max-width: 768px ){
          transition: 0.8s all ease;
          width: auto;
     }
     @media screen and ( max-width: 320px ){
          transition: 0.8s all ease;
          width: auto;
     }
`;

export const NavItems = styled.div`
     height: 80px;
     align-items: center;
     background: transparent;
`;

export const NavLinks = styled.p`
     color: #00000;
     
     align-items: center;
     text-align: right;
     text-decoration: none;
     height: 100%;
     cursor: pointer;
     background: transparent;

     ul{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          color: #00000;
          // margin: 20px;
          text-decoration: none;

     }


`;