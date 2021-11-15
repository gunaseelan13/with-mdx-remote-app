import React from 'react'
import { HeroContainer, HeroH1, HeroContent, HeroP1, HeroBtnWrapper, Button, } from './heroelement'


const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>Hey, I'm Guna Seelan</HeroH1>
                <HeroP1>I’m a Product designer living in Chennai, India. Currently working on 
                <a 
                target="_blank"
                rel="noopener noreferrer"
                href={"https://zoho.com"}
                >Zoho.</a></HeroP1>
                <HeroBtnWrapper>
                <Button >
                    <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"mailto:hellogunaseelan@gmail.com"}
                    >Get in touch</a>
                </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
