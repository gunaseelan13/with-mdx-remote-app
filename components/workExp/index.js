import React from 'react'
import {FeaturedContainer, FeaturedCard, FeaturedHeader, PostTitle, WorkTitle, PostTitle2, ImageTag} from './workelements'
import Image from 'next/image'
import Link from 'next/link'


const WorkExp = () => {
    return (
        <>  
            <FeaturedHeader>
                <div>Previous Experience</div>
            </FeaturedHeader>
            <FeaturedContainer>
                <Link href="/posts/designing-for-efficiency">
                    <FeaturedCard>
                    <ImageTag>
                    <Image
                    rel="preload"
                    src="/images/zoho-logo-1.png"
                    alt="Zoho"
                    quality="100"
                    // objectFit="fill"
                    width={70}
                    height={70}
                    priority
                    />
                    </ImageTag>
                    <WorkTitle>
                    <PostTitle>Zoho</PostTitle>
                    <PostTitle2>2018 - Present</PostTitle2>
                    </WorkTitle>
                    </FeaturedCard>
                </Link>
                <Link href="https://www.happyfox.com/">
                    <FeaturedCard>
                    <ImageTag>
                    <Image
                    rel="preload"
                    src="/images/happyfox-logo.png"
                    alt="HappyFox"
                    quality="100"
                    objectFit="fill"
                    priority
                    width={70}
                    height={70}
                    />
                    </ImageTag>
                    <WorkTitle>
                    <PostTitle>HappyFox</PostTitle>
                    <PostTitle2>2017 - 2018</PostTitle2>
                    </WorkTitle>
                    </FeaturedCard>
                </Link>
                <Link href="https://full.io/">
                    <FeaturedCard>
                    <ImageTag>
                    <Image
                    rel="preload"
                    src="/images/full-logo.png"
                    alt="Full creative"
                    quality="100"
                    objectFit="fill"
                    priority
                    width={70}
                    height={70}
                    />
                    </ImageTag>
                    <WorkTitle>
                    <PostTitle>Full Creative</PostTitle>
                    <PostTitle2>2016 - 2017</PostTitle2>
                    </WorkTitle>
                    </FeaturedCard>
                </Link>
                <Link href="https://fromahome.com/">
                    <FeaturedCard>
                    <ImageTag>
                    <Image
                    rel="preload"
                    src="/images/fromahome-logo.png"
                    alt="fromahome"
                    quality="100"
                    objectFit="fill"
                    priority
                    width={70}
                    height={70}
                    />
                    </ImageTag>
                    <WorkTitle>
                    <PostTitle>Fromhome(Discontinued)</PostTitle>
                    <PostTitle2>2015 - 2016</PostTitle2>
                    </WorkTitle>
                    </FeaturedCard>
                </Link>
             </FeaturedContainer>
        </>
    )
}

export default WorkExp
