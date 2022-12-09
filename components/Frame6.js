import { useState } from 'react';
import { contentMultipleLangs, img, svg } from '../global-config';
import { useStore } from '../store';
const coinImageSrcs = ['z.png', 'dzb.png'];

const Frame6 = () => {
    const [states, dispatch] = useStore();
    const coinContent = contentMultipleLangs[states.locale].COIN_CONTENT;
    const [coinIndex, setCoinIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="f6-container">
            <div className="f6-spider-silk-img-container">
                <img src={img('Spider-silk.png')} alt="" className="f6-spider-silk-img" />
                <div className="f6-title">{contentMultipleLangs[states.locale].TOKEN_UNITY}</div>
                <div className="f6-coin-swiper-container">
                    <div className="f6-swiper-coin">
                        <img
                            onClick={() =>
                                setCoinIndex((prev) => {
                                    if (--prev < 0) return coinImageSrcs.length - 1;
                                    else return prev;
                                })
                            }
                            src={svg('previous.svg')}
                            alt=""
                            className="f6-swiper-control-buttons"
                        />
                        <div
                            className="f6-coin-img-container"
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <img src={img(`${coinImageSrcs[coinIndex]}`)} alt="" className="f6-coin-img" />
                            <img
                                style={{ display: isHover ? 'block' : 'none' }}
                                src={img(`Coin-hover-bg.png`)}
                                alt=""
                                className="f6-coin-hover-img"
                            />
                            <div style={{ display: isHover ? 'block' : 'none' }} className="f6-inner-coin-text">
                                <div className="f6-inner-coin-text-rows">{`${coinContent[coinIndex].COIN_TITLE_1}`}</div>
                                <div className="f6-inner-coin-text-rows">{`${coinContent[coinIndex].COIN_TITLE_2}`}</div>
                            </div>
                        </div>
                        <img
                            src={svg('next.svg')}
                            alt=""
                            className="f6-swiper-control-buttons"
                            onClick={() =>
                                setCoinIndex((prev) => {
                                    if (++prev >= coinImageSrcs.length) return 0;
                                    else return prev;
                                })
                            }
                        />
                    </div>
                    <div className="f6-swiper-coin-footer">
                        <div className="f6-footer-text-title">{`${coinContent[coinIndex].COIN_NAME}`}</div>
                        <div className="f6-footer-text-des">{`${coinContent[coinIndex].COIN_DES}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frame6;
