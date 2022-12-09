import { StoreProvider } from '../store';
import '../styles/globals.css';
// import '@fontsource/nunito-sans';
import { localeDefault } from '../global-config';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function MyApp({ stars, ...props }) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        });
    }, []);
    useEffect(() => {

        let panels = gsap.utils.toArray(".panel");
        let scrollTween;
        function scrollTo(arg) {
            console.log(window.innerHeight);
            return { y: arg * window.innerHeight, autoKill: false };
        }

        function goToSection(i) {
            scrollTween = gsap.to(window, {
                scrollTo: () => {
                    scrollTo(i);
                    console.log(i);
                },
                duration: 1,
                onComplete: () => (scrollTween = null),
                overwrite: true
            });
        }

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top bottom",

                onToggle: (self) => self.isActive && !scrollTween && goToSection(i)
            });

            ScrollTrigger.create({
                start: 0,
                end: "max",
                snap: 1 / (panels.length - 1)
            });
        });
    }, []);
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

