import { useState } from 'react';
import { useEffect } from 'react';
import { contentMultipleLangs, img } from '../global-config';
import { useStore } from '../store';
const Frame4 = () => {
    const [states, dispatch] = useStore();
    const [zombieImgSrc, setZombieImgSrc] = useState('zombie1.png');
    const chapterTitle = [
        contentMultipleLangs[states.locale].CHAPTER_1,
        contentMultipleLangs[states.locale].CHAPTER_2,
        contentMultipleLangs[states.locale].CHAPTER_3,
        contentMultipleLangs[states.locale].CHAPTER_4,
    ];
    const [chapter, setChapter] = useState(1);
    useEffect(() => {
        const IntervalChangeZombie = setInterval(
            () => setZombieImgSrc((prev) => (prev === 'zombie1.png' ? 'zombie2.png' : 'zombie1.png')),
            350,
        );
        const IntervalChangeChapter = setInterval(
            () =>
                setChapter((prev) => {
                    if (++prev > chapterTitle.length) return 1;
                    else return prev;
                }),
            4000,
        );
        return () => {
            clearInterval(IntervalChangeZombie);
            clearInterval(IntervalChangeChapter);
        };
    }, []);
    return (
        <div
            className="f4-container"
            sx={{
                width: '100%',
                height: '680px',
                // border: '4px solid blue',
            }}
        >
            <div className="f4-row-1">{chapterTitle[chapter - 1]}</div>
            <div className="f4-row-2">
                <div
                    className="f4-chapter-img-container"
                    style={{ backgroundImage: `url(${img(`chapter${chapter}.png`)})` }}
                >
                    <img src={img(`chapter1.png`)} alt="" className="f4-chapter-img" />
                </div>
                <p className="f4-text">{contentMultipleLangs[states.locale].CHAPTER_DES}</p>
                <div className="f4-zombie-img-container">
                    <img src={`${img(zombieImgSrc)}`} alt="" className="f4-zombie-img" />
                </div>
            </div>
        </div>
    );
};

export default Frame4;
