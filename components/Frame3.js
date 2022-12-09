import { contentMultipleLangs, img } from '../global-config';
import { useStore } from '../store';

const Frame3 = () => {
    const [states, dispatch] = useStore();
    return (
        <div className="f3-container">
            <h2 className="f3-title-1">{contentMultipleLangs[states.locale].IS_ABOUT_THE_WORLD}</h2>
            <div class="f3-background">
                <div className="f3-cloud1-img-container">
                    <img src={`${img('cloud-purple-1.png')}`} alt="" className="f3-cloud-1-img" />
                </div>
                <div className="f3-zombie-bg-img-container">
                    <img src={`${img('zombie-bg.png')}`} alt="" className="f3-zombie-bg-img" />
                </div>
                <div className="f3-zombie-bg-img-container-opacity-0">
                    <img src={`${img('zombie-bg.png')}`} alt="" className="f3-zombie-bg-img" />
                </div>
                <div className="f3-cloud2-img-container">
                    <img src={`${img('cloud-purple-2.png')}`} alt="" className="f3-cloud-2-img" />
                </div>
            </div>
            <div className="f3-zombie-img-container">
                <img src={`${img('Zombie.png')}`} alt="" className="f3-zombie-img" />
            </div>
            <h2 className="f3-title-2"> {contentMultipleLangs[states.locale].WITH_MANY_DIFFERENT}</h2>
        </div>
    );
};

export default Frame3;
