import { useEffect, useState } from 'react';
import { contentMultipleLangs, img } from '../global-config';
import { useStore } from '../store';
const bigPlantSrcs = ['bigPlantDefault.png', 'bigPlantLight.png'];
const smallPlantSrcs = ['plantDefault.png', 'plantLight.png'];
const Frame2 = () => {
    const [states, dispatch] = useStore();
    const [imgIndex, setImgIndex] = useState(0);
    useEffect(() => {
        const intervalBlink = setInterval(() => {
            setImgIndex((prev) => {
                if (++prev >= bigPlantSrcs.length) return 0;
                else return prev;
            });
        }, 600);
        return () => {
            clearInterval(intervalBlink);
        };
    }, []);
    return (
        <div className="f2-container">
            <div className="f2-column-1">
                <div className="content-container">
                    <h2 className="f2-zomland-story text-gradient text-title">
                        {contentMultipleLangs[states.locale].ZOMLAND_STORY}
                    </h2>
                    <p className="f2-zomland-story-des">
                        {contentMultipleLangs[states.locale].ZOMLAND_STORY_DESCRIPTION}
                    </p>
                    <div className="f2-read-more">{contentMultipleLangs[states.locale].READ_MORE}</div>
                </div>
                <div className="small-plant-img-container">
                    <img src={img(smallPlantSrcs[imgIndex])} alt="" className="small-plant-img-1" />
                </div>
            </div>
            <div className="f2-column-2">
                <div className="zom-story-img-container">
                    <img src={`${img('zomStory.png')}`} alt="" className="zom-story-img" />
                </div>
                <div className="big-plant-img-container">
                    <img src={img(bigPlantSrcs[imgIndex])} alt="" className="big-plant-img" />
                </div>
            </div>
        </div>
    );
};

export default Frame2;
