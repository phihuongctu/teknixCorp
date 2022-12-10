import { Box } from '@mui/material';
import { useEffect } from 'react';
import { color } from '../global-config';
import Frame1 from '../components/Frame1';
import Frame2 from '../components/Frame2';
import Frame3 from '../components/Frame3';
import Frame4 from '../components/Frame4';
import Frame5 from '../components/Frame5';
import Frame6 from '../components/Frame6';
import Frame7 from '../components/Frame7';
import MainLayout from '../components/layouts/main';
import RootLayout from '../components/layouts/root';
import { actions, useStore } from '../store';
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [states, dispatch] = useStore();
    const el = useRef(null);
    const child = gsap.utils.selector(el);
    useLayoutEffect(() => {
        child(".panel").forEach((panel) => {
            gsap.from(panel.querySelector("h1"), {
                scrollTrigger: {
                    trigger: panel,
                    scroller: el.current,
                    markers: false,
                    scrub: true
                }
            });
        });
    }, []);
    useEffect(() => {
        dispatch(actions.setLocales());
    }, []);

    return (

        <RootLayout>
            <MainLayout>
                <Box
                >
                    <main ref={el} className="container">
                        <Frame1 />
                        <Frame1 />
                    </main>
                </Box>
            </MainLayout>
        </RootLayout>
    );
}