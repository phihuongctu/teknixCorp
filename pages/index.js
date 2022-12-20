
import { useEffect } from 'react';
import { img } from '../global-config';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { color } from '../global-config';
import MainLayout from '../components/layouts/main';
import RootLayout from '../components/layouts/root';
import MapPin from '/public/images/png-images/MapPin.png';
import Phone from '/public/images/png-images/Phone.png';
import EnvelopeSimple from '/public/images/png-images/EnvelopeSimple.png';
import { actions, useStore } from '../store';
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import { Draggable } from "gsap/dist/Draggable";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function Home() {
    const [states, dispatch] = useStore();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    // console.clear()
    // const el = useRef(null);
    // const child = gsap.utils.selector(el);
    useEffect(() => {
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

        // create nev dots and add tooltip listeners
        for (let i = 0; i < slides.length; i++) {
            let tl = gsap.timeline({ paused: true, reversed: true });
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
        let dragMe = Draggable.create(container, {
            type: "y",
            edgeResistance: 1,
            onDragEnd: slideAnim,
            onDrag: tweenDot,
            onThrowUpdate: tweenDot,
            snap: offsets,
            inertia: true,
            zIndexBoost: false,
            allowNativeTouchScrolling: false,
            bounds: "#masterWrap"
        });

        dragMe[0].id = "dragger";
        newSize();

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
            dragMe[0].vars.snap = offsets;
        }

        // tween the dot animation as the draggable moves
        function tweenDot() {
            gsap.set(dotAnim, {
                time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
            });
        }





    }, []);
    useEffect(() => {
        dispatch(actions.setLocales());
    }, []);

    return (
        <RootLayout>
            <MainLayout>
                <Box sx={{
                    height: '100%'
                }}
                >
                    <Link href="" style={{
                        display: matches ? 'block' : 'none',
                        position: 'absolute',
                        left: 0,
                        zIndex: 1,
                        top: '50%',
                        transform: ' rotate(-90deg)',
                        padding: '0 3rem',
                        fontSize: '20px',
                        fontWeight: 500,
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
                            <div id="panelWrap">
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
                                        position: 'relative'
                                    }}>
                                        <p>Kiến Tạo Tương Lai</p>
                                        <h3 className='color-primary'>TEKNIX</h3>
                                        <h3>CORPORATION</h3>
                                        <p className='description' ><b>TekNix Corporation</b> là công ty công nghệ chuyên cung cấp các phần mềm, ứng dụng, giải pháp công nghệ thông tin cho doanh nghiệp và người dùng.
                                        </p>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '30%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '20%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
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
                                        <p>Sứ Mệnh</p>
                                        <h3 className='color-primary'>NỀN TẢNG</h3>
                                        <h3>TOÀN DIỆN</h3>
                                        <p className='description'>Tại<b>TekNix</b>  chúng tôi kiến tạo những nền tảng công nghệ tối ưu, toàn diện, mang tính chất đột phá và ứng dụng cao.
                                        </p>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '30%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '20%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
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
                                        <p>Tầm Nhìn</p>
                                        <h3 className='color-primary'>CÔNG NGHỆ</h3>
                                        <h3>HÀNG ĐẦU</h3>
                                        <p className='description'>Với ứng dụng công nghệ vượt trội <b>TekNix</b>  khát khao vươn mình  trở thành công ty giải pháp công nghệ hàng đầu mang tới những sản phẩm khác biệt đóng góp cho cộng đồng.
                                        </p>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '35%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
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
                                        <p>Giá Trị Cốt Lõi</p>
                                        <h3 className='color-primary'>TIÊN PHONG</h3>
                                        <h3>ĐỔI MỚI</h3>
                                        <p className='description'>Với đam mê sáng tạo và tinh thần kiến tạo, <b>TekNix </b>  luôn không ngừng nghiên cứu, đổi mới và phát triển những sản phẩm số có giá trị thiết thực và bền vững.
                                        </p>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '35%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
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
                                        <p>Sản Phẩm Và Dịch Vụ</p>
                                        <h3 className='color-primary'>GIẢI PHÁP</h3>
                                        <h3>TỐI ƯU</h3>
                                        <p className='description'><b>TekNix</b>  tự tin là đơn vị cung cấp các giải pháp công nghệ thông minh và đột phá với hệ giải pháp tổng thể và đa chuỗi, bao gồm:
                                        </p>
                                        <br></br>
                                        <ul>
                                            <li> Giải pháp hạ tâng</li>
                                            <li> Giải pháp thương mại điện tử</li>
                                            <li> Giải pháp Fintech</li>
                                            <li> Ứng dụng Blockchain</li>
                                            <li> Tư vấn cung cấp nhân sự và vận hành</li>
                                        </ul>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '35%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
                                            }}
                                        />
                                    </Box>
                                </section>
                                <section className='section-6'>
                                    <Box sx={{
                                        // backgroundColor: `${color.section1}`,
                                        background: 'linear-gradient(to right bottom, #d0ffee, #fff)',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        padding: matches ? '96px 15vw' : '24px',
                                        minHeight: '100vh',
                                        width: '100vw',
                                        position: 'relative'
                                    }}>
                                        <p>Kiến Tạo Tương Lai</p>
                                        <h3 className='color-primary'>TEKNIX</h3>
                                        <h3>CORPORATION</h3>
                                        <p className='description'><b>TekNix Corporation</b> là công ty công nghệ chuyên cung cấp các phần mềm, ứng dụng, giải pháp công nghệ thông tin cho doanh nghiệp và người dùng.
                                        </p>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '35%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
                                            }}
                                        />
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
                                        <p>Liên hệ Với Chúng Tôi</p>
                                        <h3 className='color-primary'>TEKNIX</h3>
                                        <h3>CORPORATION</h3>
                                        <br></br>
                                        <ul className='list-address'>
                                            <li style={{
                                                alignItems : 'flex-start'
                                            }}>
                                                <Image
                                                    width="32"
                                                    height="32"
                                                    src={MapPin} alt="" />
                                                <Stack spacing={2}>
                                                    <div className="">
                                                        Trụ sở: Số 194C Pasteur, Phường Võ Thị Sáu, Quận 3, TP Hồ Chí Minh
                                                    </div>
                                                    <div className="">
                                                        Chi nhánh Cần Thơ: STS Tower, 11B Đại lộ Hòa Bình, Q. Ninh Kiều. TP. Cần Thơ
                                                    </div>

                                                </Stack>
                                            </li>
                                            <li>
                                                <Image
                                                    width="32"
                                                    height="32"
                                                    src={EnvelopeSimple} alt="" />
                                                info@teknixcorp.com</li>
                                            <li>
                                                <Image
                                                    width="32"
                                                    height="32"
                                                    src={Phone} alt="" />
                                                (+84) 901 001 079</li>
                                        </ul>
                                        <img className='bubble' id='bee'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '35%',
                                                minWidth: '180px',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '36%',
                                                left: '30%'
                                            }}
                                        />
                                        <img className='bubble'
                                            src={`${img('Bubble-Network.png')}`}
                                            style={{
                                                width: '25%',
                                                minWidth: '180',
                                                display: 'block',
                                                position: 'absolute',
                                                top: '42%',
                                                left: '58%'
                                            }}
                                        />
                                    </Box>
                                </section>
                            </div>
                        </div>
                        <div class="dots">
                        </div>
                        <div className="toolTips">
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
                        </div>
                    </div>
                </Box>
            </MainLayout>
        </RootLayout>
    );
}