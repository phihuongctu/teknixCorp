import { useEffect } from 'react';
import { img } from '../global-config';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../components/layouts/main';
import RootLayout from '../components/layouts/root';
import { actions, useStore } from '../store';
import BoxText from '../components/layouts/components/boxText';
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import { contentMultipleLangs } from '../global-config';
import { Draggable } from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MapPin from '/public/images/png-images/MapPin.png';
import EnvelopeSimple from '/public/images/png-images/EnvelopeSimple.png';
import Phone from '/public/images/png-images/Phone.png';
import logoAppota from '/public/images/png-images/logo-appota.png';
import logoGenexwifi from '/public/images/png-images/logo-genexwifi-1.png';
import logoBcons from '/public/images/png-images/logo-bcons.png';
import logoHitech from '/public/images/png-images/logo-hiitech-main.png';
import logoHoangLong from '/public/images/png-images/logo-hoang-long-hotel.png';
import logoHqg from '/public/images/png-images/logo-hqg.png';
import logoMBbank from '/public/images/png-images/logo-mb-bank.png';
import logoNVu from '/public/images/png-images/logo-nguyen-vu-store.png';
import logoShinhan from '/public/images/png-images/logo-shinhan-bank.png';
import logoSpt from '/public/images/png-images/logo-spt.png';
import logoTPCom from '/public/images/png-images/logo-tpcom.png';
import logoViettel from '/public/images/png-images/logo-viettel.png';
import logoVNNic from '/public/images/png-images/logo-vnnic.png';
import logoVnpt from '/public/images/png-images/logo-vnpt.png';
import logoVnso from '/public/images/png-images/logo-vnso.png';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';


export default function Home() {

    const [states, dispatch] = useStore();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [isActive, setIsActive] = useState(true);
    const useMousePosition = () => {
        const [
            mousePosition,
            setMousePosition
        ] = useState({ x: '25%', y: '50%' });

        useEffect(() => {
            const updateMousePosition = ev => {
                setMousePosition({ x: ev.clientX + 'px', y: ev.clientY + 'px' });
            };

            window.addEventListener('mousemove', updateMousePosition);

            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return mousePosition;
    };
    const mousePosition = useMousePosition();



    if (!isMobile) {
        useEffect(() => {
            dispatch(actions.setLocales());




            // scroll vertical gsap
            const colorArray = ["#426F42", "#262626", "#36648B", "#683A5E", "#683A5E", "#36648B"];
            const slides = document.querySelectorAll("section");
            const container = document.querySelector("#panelWrap");
            let dots = document.querySelector(".dots");
            let toolTips = document.querySelectorAll(".toolTip");
            let oldSlide = 0;
            let activeSlide = 0;
            let navDots = [];
            let dur = 0.6;
            let offsets = [];
            let toolTipAnims = [];
            let ih = window.innerHeight;
            const mouseAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            const handAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            const cursorAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            const arrowAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // document.querySelector("#upArrow").addEventListener("click", slideAnim);
            // document.querySelector("#downArrow").addEventListener("click", slideAnim);
            // gsap.set('h3,p', {
            //     opacity: 0
            // })
            // const tl = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "h3,p",
            //         start: "+=133 80%",
            //         end: "+=200 40%",
            //         scrub: true,
            //         markers: true,
            //         toggleActions: "play reverse play reverse",
            //     }
            // });
            // tl
            //     .to('h3,p', { opacity: 1, duration: 0.5 })
            //     .to('h3,p', { opacity: 0, duration: 0.5 }, 0.5)
            //     ;



            // create nev dots and add tooltip listeners
            for (let i = 0; i < slides.length; i++) {
                let tl = gsap.timeline({
                    paused: true, reversed: true,
                });

                gsap.set(slides[i], { backgroundColor: colorArray[i] });
                let newDot = document.createElement("div");
                newDot.classNameName = "dot";
                newDot.index = i;
                navDots.push(newDot);
                newDot.addEventListener("click", slideAnim);
                newDot.addEventListener("mouseenter", dotHover);
                newDot.addEventListener("mouseleave", dotHover);
                dots.appendChild(newDot);
                offsets.push(-slides[i].offsetTop);
                tl.to(toolTips[i], 0.25, { opacity: 1, ease: Linear.easeNone });
                toolTipAnims.push(tl);
            }

            // icon animations for slide 1
            mouseAnim.fromTo("#mouseRings circle", { attr: { r: 12 } }, { duration: 0.8, stagger: 0.25, attr: { r: 40 } });
            mouseAnim.fromTo("#mouseRings circle", { opacity: 0 }, { duration: 0.4, stagger: 0.25, opacity: 1 }, 0);
            mouseAnim.fromTo("#mouseRings circle", { opacity: 1 }, { duration: 0.4, stagger: 0.25, opacity: 0 }, 0.4);

            handAnim.to("#hand", { duration: 0.75, y: -16, rotation: 5, transformOrigin: "right bottom" });
            handAnim.to("#hand", { duration: 0.5, y: 15, ease: "power3.inOut" });
            handAnim.to("#hand", { duration: 1, y: 0, rotation: 0 });

            gsap.set("#cursor", { rotation: 240, transformOrigin: "center center", x: -25 });
            cursorAnim.to("#cursor", 0.25, { duration: 0.25, y: -24 });
            cursorAnim.to("#iconCircles circle", { duration: 0.5, stagger: 0.15, attr: { r: 6 } }, "expand");
            cursorAnim.to("#cursor", { duration: 1.1, y: 50 }, "expand");
            cursorAnim.to("#cursor", { duration: 0.75, y: 0 }, "contract");
            cursorAnim.to("#iconCircles circle", { duration: 0.5, attr: { r: 4 } }, "contract");

            arrowAnim.to("#caret", { duration: 0.5, attr: { points: "30 40, 50 65, 70 40" }, repeat: 3, yoyo: true, ease: "power2.inOut", repeatDelay: 0.25 });

            // get elements positioned
            gsap.set(".dots", { yPercent: -50 });
            gsap.set(".toolTips", { yPercent: -50 });

            // side screen animation with nav dots
            const dotAnim = gsap.timeline({ paused: true });
            dotAnim.to(
                ".dot",
                {
                    stagger: { each: 1, yoyo: true, repeat: 1 },
                    scale: 2.1,
                    rotation: 0.1,
                    ease: "none"
                },
                0.5
            );
            dotAnim.time(1);

            // tooltips hovers
            function dotHover() {
                toolTipAnims[this.index].reversed() ? toolTipAnims[this.index].play() : toolTipAnims[this.index].reverse();
            }

            // figure out which of the 4 nav controls called the function
            function slideAnim(e) {

                oldSlide = activeSlide;
                // dragging the panels
                if (this.id === "dragger") {
                    activeSlide = offsets.indexOf(this.endY);
                } else {
                    if (gsap.isTweening(container)) {
                        return;
                    }
                    // up/down arrow clicks
                    if (this.id === "downArrow" || this.id === "upArrow") {
                        activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
                        // click on a dot
                    } else if (this.classNameName === "dot") {
                        activeSlide = this.index;
                        // scrollwheel
                    } else {
                        activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
                    }
                }
                // make sure we're not past the end or beginning slide
                activeSlide = activeSlide < 0 ? 0 : activeSlide;
                activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
                if (oldSlide === activeSlide) {
                    return;
                }
                // if we're dragging we don't animate the container
                if (this.id != "dragger") {
                    gsap.to(container, dur, { y: offsets[activeSlide], ease: "power2.inOut", onUpdate: tweenDot });
                }
            }

            gsap.set(".hideMe", { opacity: 1 });
            window.addEventListener("wheel", slideAnim);
            window.addEventListener("resize", newSize);

            // make the container a draggable element

            // let dragMe = Draggable.create(container, {
            //     type: "y",
            //     edgeResistance: 1,
            //     onDragEnd: slideAnim,
            //     onDrag: tweenDot,
            //     onThrowUpdate: tweenDot,
            //     snap: 0.5,
            //     inertia: false,
            //     zIndexBoost: false,
            //     allowNativeTouchScrolling: false,
            //     bounds: "#masterWrap"
            // });

            // dragMe[0].id = "dragger";
            // newSize();

            // resize all panels and refigure draggable snap array
            function newSize() {
                offsets = [];
                ih = window.innerHeight;
                gsap.set("#panelWrap", { height: slides.length * ih });
                gsap.set(slides, { height: ih });
                for (let i = 0; i < slides.length; i++) {
                    offsets.push(-slides[i].offsetTop);
                }
                gsap.set(container, { y: offsets[activeSlide] });
                // dragMe[0].vars.snap = offsets;
            }

            // tween the dot animation as the draggable moves
            function tweenDot() {
                gsap.set(dotAnim, {
                    time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
                });
            }

            // animation scale
            const handleClick = event => {
                // 👇️ toggle isActive state on click
                setIsActive(current => !current);
            };
            const myInterval = setInterval(() => {
                handleClick();
            }, 4000);
            return () => clearInterval(myInterval);

        }, []);
    } else {
        useEffect(() => {
            dispatch(actions.setLocales());

            // animation scale
            const handleClick = event => {
                setIsActive(current => !current);
            };
            const myInterval = setInterval(() => {
                handleClick();
            }, 4000);
            return () => clearInterval(myInterval);
        }, []);
    }
    // check mobile


    return (
        <RootLayout>
            <MainLayout>
                <Box sx={{
                    height: '100%'
                }}
                >
                    <Link href="https://www.facebook.com/teknixcorp" target="_blank" style={{
                        display: matches ? 'block' : 'none',
                        position: 'absolute',
                        left: 0,
                        zIndex: 1,
                        top: '50%',
                        transform: ' rotate(-90deg)',
                        padding: '0 3rem',
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#b1b5c3'
                    }}>FACEBOOK</Link>

                    <div className="hideMe">
                        {/* <svg id="downArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <g stroke-linejoin="round" stroke-linecap="round" >
                                <circle r="46" cx="50" cy="50" />
                                <polyline points="25 40, 50 70, 75 40" ></polyline>
                            </g>
                        </svg>
                        <svg id="upArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <g stroke-linejoin="round" stroke-linecap="round" >
                                <circle r="46" cx="50" cy="50" />
                                <polyline points="25 60, 50 30, 75 60" ></polyline>
                            </g>
                        </svg> */}

                        <div id="masterWrap">
                            <div id="panelWrap"
                                style={{
                                    overflowY: matches ? 'unset' : 'auto',
                                    overflowX: matches ? 'unset' : 'hidden',
                                    scrollSnapType: matches ? 'unset' : 'y mandatory',
                                }}
                            >
                                <section className='section-1'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #592988, #220e4a)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative',

                                    }}>

                                        <BoxText TITLE_1={contentMultipleLangs[states.locale].Section_1.TITLE_1} TITLE_2={contentMultipleLangs[states.locale].Section_1.TITLE_2} TITLE_3={contentMultipleLangs[states.locale].Section_1.TITLE_3} DES={contentMultipleLangs[states.locale].Section_1.DES} />
                                        <p>
                                            Your cursor position:{mousePosition.x}
                                            <br />
                                            Your cursor position:{mousePosition.y}
                                            <br />
                                        </p>
                                        <Box className={isActive ? 'animation-scale' : ''} style={{
                                            position: 'absolute',
                                            // top: '30%',
                                            // left: '30%',
                                            width: '35%',
                                            minWidth: '220px',
                                            display: 'block',
                                            top:  mousePosition.y,
                                            left:  mousePosition.x ,
                                            transition: 'all 2.5s ease-in-out',
                                            // transitionProperty: 'top, left'
                                        }}>
                                            <img className='bubble' id='bee'
                                                src={`${img('Bubble-Network.png')}`}
                                                style={{
                                                    width: '35%',
                                                    minWidth: '220px',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                // top: matches ? '42%' : '51%',
                                                // left: matches ? '58%' : '50%'
                                                bottom: mousePosition.y ,
                                                right: mousePosition.x ,
                                                transition: 'all 2.5s ease-in-out',
                                                // transitionProperty:'right, bottom'
                                            }}
                                        />
                                    </Box>
                                </section>
                                <section className='section-2'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #1f3f8c, #0b2857)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <BoxText TITLE_1={contentMultipleLangs[states.locale].Section_2.TITLE_1} TITLE_2={contentMultipleLangs[states.locale].Section_2.TITLE_2} TITLE_3={contentMultipleLangs[states.locale].Section_2.TITLE_3} DES={contentMultipleLangs[states.locale].Section_2.DES} />
                                        <Box className={isActive ? 'animation-scale' : ''} style={{
                                            position: 'absolute',
                                            // top: '30%',
                                            // left: '30%',
                                            width: '35%',
                                            minWidth: '220px',
                                            display: 'block',
                                            top: mousePosition.y,
                                            left: mousePosition.x,
                                            transition: 'all 2.5s ease-in-out',
                                            // transitionProperty: 'top, left'
                                        }}>
                                            <img className='bubble' id='bee'
                                                src={`${img('Bubble-Network.png')}`}
                                                style={{
                                                    width: '35%',
                                                    minWidth: '220px',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                // top: matches ? '42%' : '51%',
                                                // left: matches ? '58%' : '50%'
                                                bottom: mousePosition.y,
                                                right: mousePosition.x,
                                                transition: 'all 2.5s ease-in-out',
                                                // transitionProperty:'right, bottom'
                                            }}
                                        />
                                    </Box>
                                </section>
                                <section className='section-3'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #086422, #020804)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <BoxText TITLE_1={contentMultipleLangs[states.locale].Section_3.TITLE_1} TITLE_2={contentMultipleLangs[states.locale].Section_3.TITLE_2} TITLE_3={contentMultipleLangs[states.locale].Section_3.TITLE_3} DES={contentMultipleLangs[states.locale].Section_3.DES} />
                                        <Box className={isActive ? 'animation-scale' : ''} style={{
                                            position: 'absolute',
                                            // top: '30%',
                                            // left: '30%',
                                            width: '35%',
                                            minWidth: '220px',
                                            display: 'block',
                                            top: mousePosition.y,
                                            left: mousePosition.x,
                                            transition: 'all 2.5s ease-in-out',
                                            // transitionProperty: 'top, left'
                                        }}>
                                            <img className='bubble' id='bee'
                                                src={`${img('Bubble-Network.png')}`}
                                                style={{
                                                    width: '35%',
                                                    minWidth: '220px',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                // top: matches ? '42%' : '51%',
                                                // left: matches ? '58%' : '50%'
                                                bottom: mousePosition.y,
                                                right: mousePosition.x,
                                                transition: 'all 2.5s ease-in-out',
                                                // transitionProperty:'right, bottom'
                                            }}
                                        />
                                    </Box>
                                </section>
                                <section className='section-4'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #092534, #77772a)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <BoxText TITLE_1={contentMultipleLangs[states.locale].Section_4.TITLE_1} TITLE_2={contentMultipleLangs[states.locale].Section_4.TITLE_2} TITLE_3={contentMultipleLangs[states.locale].Section_4.TITLE_3} DES={contentMultipleLangs[states.locale].Section_4.DES} />
                                        <Box className={isActive ? 'animation-scale' : ''} style={{
                                            position: 'absolute',
                                            // top: '30%',
                                            // left: '30%',
                                            width: '35%',
                                            minWidth: '220px',
                                            display: 'block',
                                            top: mousePosition.y,
                                            left: mousePosition.x,
                                            transition: 'all 2.5s ease-in-out',
                                            // transitionProperty: 'top, left'
                                        }}>
                                            <img className='bubble' id='bee'
                                                src={`${img('Bubble-Network.png')}`}
                                                style={{
                                                    width: '35%',
                                                    minWidth: '220px',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                // top: matches ? '42%' : '51%',
                                                // left: matches ? '58%' : '50%'
                                                bottom: mousePosition.y,
                                                right: mousePosition.x,
                                                transition: 'all 2.5s ease-in-out',
                                                // transitionProperty:'right, bottom'
                                            }}
                                        />
                                    </Box>
                                </section>
                                <section className='section-5'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #886d2b, #250f44)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <BoxText TITLE_1={contentMultipleLangs[states.locale].Section_5.TITLE_1} TITLE_2={contentMultipleLangs[states.locale].Section_5.TITLE_2} TITLE_3={contentMultipleLangs[states.locale].Section_5.TITLE_3} DES={contentMultipleLangs[states.locale].Section_5.DES} />
                                        <ul>
                                            <li> {contentMultipleLangs[states.locale].Section_5.ITEM_1} </li>
                                            <li> {contentMultipleLangs[states.locale].Section_5.ITEM_2}</li>
                                            <li> {contentMultipleLangs[states.locale].Section_5.ITEM_3}</li>
                                            <li> {contentMultipleLangs[states.locale].Section_5.ITEM_4}</li>
                                            <li> {contentMultipleLangs[states.locale].Section_5.ITEM_5}</li>
                                        </ul>
                                        <Box className={isActive ? 'animation-scale' : ''} style={{
                                            position: 'absolute',
                                            // top: '30%',
                                            // left: '30%',
                                            width: '35%',
                                            minWidth: '220px',
                                            display: 'block',
                                            top: mousePosition.y,
                                            left: mousePosition.x,
                                            transition: 'all 2.5s ease-in-out',
                                            // transitionProperty: 'top, left'
                                        }}>
                                            <img className='bubble' id='bee'
                                                src={`${img('Bubble-Network.png')}`}
                                                style={{
                                                    width: '35%',
                                                    minWidth: '220px',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                // top: matches ? '42%' : '51%',
                                                // left: matches ? '58%' : '50%'
                                                bottom: mousePosition.y,
                                                right: mousePosition.x,
                                                transition: 'all 2.5s ease-in-out',
                                                // transitionProperty:'right, bottom'
                                            }}
                                        />
                                    </Box>
                                </section>
                                <section className='section-6'>
                                    <Box sx={{
                                        background: 'linear-gradient(to right bottom, #d0ffee, #fff)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <h3 className='color-primary'>{contentMultipleLangs[states.locale].Section_6.TITLE_5} </h3>
                                        <Box sx={{
                                            display: 'grid',
                                            justifyItems: 'center',
                                            alignItems: 'start',
                                            gridTemplateColumns: 'repeat(2, minmax(auto, 1fr))',
                                            marginTop: '3rem',
                                            rowGap: '3rem',
                                            columnGap: '2rem',
                                            width: '100%'
                                        }}>
                                            <Stack alignItems='center'>
                                                <h4>{contentMultipleLangs[states.locale].Section_6.TITLE_1} </h4>
                                                <Stack direction='row' sx={{
                                                    flexWrap: 'wrap',
                                                    marginTop: '1rem',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Image
                                                        width="0"
                                                        height="0"
                                                        src={logoVNNic} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoVnpt} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoTPCom} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoSpt} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoViettel} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                </Stack>
                                            </Stack>
                                            <Stack alignItems='center'>
                                                <h4 >{contentMultipleLangs[states.locale].Section_6.TITLE_2} </h4>
                                                <Stack direction='row' sx={{
                                                    flexWrap: 'wrap',
                                                    marginTop: '1rem',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoHqg} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoGenexwifi} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoVnso} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoHitech} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                </Stack>
                                            </Stack >
                                            <Stack alignItems='center'>
                                                <h4 >{contentMultipleLangs[states.locale].Section_6.TITLE_3} </h4>
                                                <Stack direction='row' sx={{
                                                    flexWrap: 'wrap',
                                                    marginTop: '1rem',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoMBbank} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoShinhan} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoAppota} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                </Stack>
                                            </Stack>
                                            <Stack alignItems='center'>
                                                <h4 >{contentMultipleLangs[states.locale].Section_6.TITLE_4} </h4>
                                                <Stack direction='row' sx={{
                                                    flexWrap: 'wrap',
                                                    marginTop: '1rem',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoNVu} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoHoangLong} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                    <Image
                                                        width="200"
                                                        height="100"
                                                        src={logoBcons} alt="" style={{
                                                            width: '50%',
                                                            height: '100%',
                                                            maxWidth: '200px'
                                                        }} />
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </section>
                                <section className='section-7'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #00826b, #0b0908)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <BoxText TITLE_1={contentMultipleLangs[states.locale].Section_7.TITLE_1} TITLE_2={contentMultipleLangs[states.locale].Section_7.TITLE_2} TITLE_3={contentMultipleLangs[states.locale].Section_7.TITLE_3} />

                                        <ul className='list-address'>
                                            <li style={{
                                                alignItems: 'flex-start'
                                            }}>
                                                <Image
                                                    width="32"
                                                    height="32"
                                                    src={MapPin} alt="" />
                                                <Stack spacing={2}>
                                                    <div className="">
                                                        {contentMultipleLangs[states.locale].Section_7.ADDRESS_1}
                                                    </div>
                                                    <div className="">
                                                        {contentMultipleLangs[states.locale].Section_7.ADDRESS_2}
                                                    </div>
                                                </Stack>
                                            </li>
                                            <li>
                                                <Link href='mailto:info@teknixcorp.com'>
                                                    <Image
                                                        width="32"
                                                        height="32"
                                                        src={EnvelopeSimple} alt="" />
                                                    info@teknixcorp.com
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='phoneto:0901001079'>
                                                    <Image
                                                        width="32"
                                                        height="32"
                                                        src={Phone} alt="" />
                                                    (+84) 901 001 079
                                                </Link>
                                            </li>
                                        </ul>
                                        <Box className={isActive ? 'animation-scale' : ''} style={{
                                            position: 'absolute',
                                            // top: '30%',
                                            // left: '30%',
                                            width: '35%',
                                            minWidth: '220px',
                                            display: 'block',
                                            top: mousePosition.y,
                                            left: mousePosition.x,
                                            transition: 'all 2.5s ease-in-out',
                                            // transitionProperty: 'top, left'
                                        }}>
                                            <img className='bubble' id='bee'
                                                src={`${img('Bubble-Network.png')}`}
                                                style={{
                                                    width: '35%',
                                                    minWidth: '220px',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                // top: matches ? '42%' : '51%',
                                                // left: matches ? '58%' : '50%'
                                                bottom: mousePosition.y,
                                                right: mousePosition.x,
                                                transition: 'all 2.5s ease-in-out',
                                                // transitionProperty:'right, bottom'
                                            }}
                                        />
                                    </Box>
                                </section>
                            </div>
                        </div>

                        <div class="dots">
                        </div>
                        {/* <div className="toolTips">
                            <div className="toolTip">
                                Slider Control
                            </div>
                            <div className="toolTip">
                                Powered by GSAP
                            </div>
                            <div className="toolTip">
                                Side animation
                            </div>
                            <div className="toolTip">
                                Random dog
                            </div>
                            <div className="toolTip">
                                Sliders are useful
                            </div>
                            <div className="toolTip">
                                Follow on Twitter
                            </div>
                        </div> */}
                    </div>
                </Box>
            </MainLayout>
        </RootLayout>
    )
}
