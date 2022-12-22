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

