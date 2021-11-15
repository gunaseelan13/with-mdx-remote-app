import React from 'react'
import {FeaturedContainer, FeaturedCard, FeaturedHeader, PostTitle} from './featuredblogelement'
import Image from 'next/image'
import Link from 'next/link'


const FeaturedBlog = () => {
    return (
        <>  
            <FeaturedHeader>
                <div>Recent Blogs</div>
            </FeaturedHeader>
            <FeaturedContainer>
                <Link href="/posts/designing-for-efficiency">
                    <FeaturedCard>
                    <Image
                    //rel="preload"
                    src="/images/image1.png"
                    alt="Designing for Efficiency"
                    objectFit="cover"
                    quality="100"
                    width={495}
                    height={220}
                    
                    priority
                    />
                    <PostTitle>Designing for Efficiency</PostTitle>
                    </FeaturedCard>
                </Link>
                <Link href="/posts/designing-for-values">
                    <FeaturedCard>
                    <Image
                    //rel="preload"
                    src="/images/image2.png"
                    alt="Finding Core Values"
                    objectFit="cover"
                    quality="100"
                    
                    priority
                    width={495}
                    height={220}
                    />
                    <PostTitle>Finding Core Values</PostTitle>
                    </FeaturedCard>
                </Link>
             </FeaturedContainer>
        </>
    )
}

export default FeaturedBlog
