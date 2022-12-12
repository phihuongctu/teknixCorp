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
            gsap.from(panel.querySelector("h3"), {
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

        var bee = document.getElementById("bee");
        document.addEventListener("mousemove", getMouse);

        bee.style.position = "absolute"; //css
        var beepos = { x: 0, y: 0 };

        setInterval(followMouse, 50);

        var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

        var dir = "right";
        function getMouse(e) {
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            //Checking directional change
            if (mouse.x > beepos.x) {
                dir = "right";
            } else {
                dir = "left";
            }
        }

        function followMouse() {
            //1. find distance X , distance Y
            var distX = mouse.x - beepos.x;
            var distY = mouse.y - beepos.y;
            //Easing motion
            //Progressive reduction of distance
            beepos.x += distX / 5;
            beepos.y += distY / 2;

            bee.style.left = beepos.x + "px";
            bee.style.top = beepos.y + "px";


            //Apply css class
            if (dir == "right") {
                bee.setAttribute("class", "right");
            } else {
                bee.setAttribute("class", "left");
            }

        }
    }, []);

    return (

        <RootLayout>
            <MainLayout>
                <Box
                >
                    <main ref={el} className="container">
                        <Frame1 />
                        <Frame2 />
                    </main>
                </Box>
            </MainLayout>
        </RootLayout>
    );
}