import { useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { actions, useStore } from '../../../../store';
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import { contentMultipleLangs } from '../../../../global-config';
import { Draggable } from "gsap/dist/Draggable";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function BoxText({TITLE_1,TITLE_2,TITLE_3,DES}) {
    const [states, dispatch] = useStore();
    return (
        <>
            <p>{TITLE_1}</p>
            <h3 className='color-primary'>{TITLE_2}</h3>
            <h3>{TITLE_3}</h3>
            <p className='description' >{DES}
            </p>
        </>
    )

}
export default BoxText;


