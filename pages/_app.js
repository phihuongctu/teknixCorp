import { StoreProvider } from '../store';
import '../styles/globals.css';
import { localeDefault } from '../global-config';
import Head from 'next/head';
import { useEffect } from 'react';
import Document, { Html, Main, NextScript } from "next/document";





function MyApp({ stars, ...props }) {

    return (
        <StoreProvider initstates={stars.initStates}>
            <Head>
                <title>TekNix Corp | Home</title>
                <link rel="icon" type="image/x-icon" href="images/ztoken.svg"></link>
                <meta name="title" content="Zomland | Home" />
                <meta
                    name="description"
                    content='Zomland is the first 3D GameFi Blockchain project to provide a "Zomie" universe where players are free to create, collect and bid unique NFT creatures and assets.
'
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zomland-landing.vercel.app/" />
                <meta property="og:title" content="Zomland | Home" />
                <meta
                    property="og:description"
                    content='Zomland is the first 3D GameFi Blockchain project to provide a "Zomie" universe where players are free to create, collect and bid unique NFT creatures and assets.
'
                />
                <meta
                    property="og:image"
                    content="https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317898954_114387594836820_6884542898105072127_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=OCXodtrfCoQAX_5Xs81&_nc_ht=scontent.fvca1-2.fna&oh=00_AfCIcdDzcBKDRE4ER8fwSi5kM5baztgWsXSnWkLHjT2jSw&oe=6392C76C"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Zomland | Home" />
                <meta
                    property="twitter:description"
                    content='Zomland is the first 3D GameFi Blockchain project to provide a "Zomie" universe where players are free to create, collect and bid unique NFT creatures and assets.
'
                />
                <meta
                    property="twitter:image"
                    content="https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317898954_114387594836820_6884542898105072127_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=OCXodtrfCoQAX_5Xs81&_nc_ht=scontent.fvca1-2.fna&oh=00_AfCIcdDzcBKDRE4ER8fwSi5kM5baztgWsXSnWkLHjT2jSw&oe=6392C76C"
                />
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js" />
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/Draggable3.min.js?" />
                {/* <script src="https://assets.codepen.io/16327/InertiaPlugin.min.js" /> */}
            </Head>
            <props.Component {...props.pageProps} />

        </StoreProvider>
    );
}

//may be call api
MyApp.getInitialProps = async () => {
    const initStates = {
        locale: localeDefault,
    };

    return {
        stars: {
            initStates,
        },
    };
};

export default MyApp;

