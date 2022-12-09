import { contentMultipleLangs, img, svg } from '../global-config';
import { useStore } from '../store';

const Frame7 = () => {
    const [states, dispatch] = useStore();
    return (
        <div className="f7-container">
            <h2 className="f7-title-optimized">{contentMultipleLangs[states.locale].OPTIMIZED_FINANCIAL_SYSTEM}</h2>
            <div className="f7-optimized-des">
                {contentMultipleLangs[states.locale].OPTIMIZED_FINANCIAL_SYSTEM_DES_1}
                <a href="#">{contentMultipleLangs[states.locale].OPTIMIZED_FINANCIAL_SYSTEM_DES_IN_A_TAG}</a>{' '}
                {contentMultipleLangs[states.locale].OPTIMIZED_FINANCIAL_SYSTEM_DES_2}
            </div>
            <img src={img(`footer.png`)} alt="" className="f7-footer-img" />
            <h2 className="f7-title-contact">{contentMultipleLangs[states.locale].CONTACT_US}</h2>
            <p className="f7-contact-des">{contentMultipleLangs[states.locale].CONTACT_US_DESCRIPTION}</p>
            <div className="f7-email">hello@zomland.com</div>
            <div className="f7-socials">
                <a href="https://discord.gg/gR2sPFnJEc" target={'_blank'}>
                    <img className="f7-icon-social" src={svg(`DiscordLogo.svg`)} alt="" />
                </a>
                <a href="https://www.facebook.com/zomland.official/" target={'_blank'}>
                    <img className="f7-icon-social" src={svg(`TikTokLogo.svg`)} alt="" />
                </a>
                <a href="https://t.me/zomlandofficial" target={'_blank'}>
                    <img className="f7-icon-social" src={svg(`TelegramLogo.svg`)} alt="" />
                </a>
                <a href="https://twitter.com/zomland_global" target={'_blank'}>
                    <img className="f7-icon-social" src={svg(`TwitterLogo.svg`)} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Frame7;
