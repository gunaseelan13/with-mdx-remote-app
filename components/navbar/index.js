import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import useTransaltion from 'next-translate/useTranslation'
import { Nav,NavbarContainer,NavLogo, NavMenu,NavItems,NavLinks } from "./navElements";
  
const Navbar = () => {
  const router = useRouter();
  let {t} = useTransaltion()
//   const [scrollNav, setScrollNav] = useState(false)

//   const changeNav = () => {
//     if(window.scrollY >= 1000) {
//       setScrollNav(false)
//     } else {
//       setScrollNav(true)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', changeNav);
//   },[] );
//   scrollNav={scrollNav}

    return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo>
              <Link href={"/"}>
                <a>{t('home:location')}</a>
              </Link>
            </NavLogo>
            <NavMenu>
                  <ul>
                    {router.locales.map((locale) => (
                      <li key={locale}>
                        <Link href={router.asPath} locale={locale}>
                          <a>{locale}</a>
                        </Link>
                      </li>
                    ))}
                  </ul> 
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    );
  };
  
  export default Navbar;