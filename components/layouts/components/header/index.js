import { Box } from '@mui/material';
import Link from 'next/link';
import { size } from '../../../../global-config';
import DropdownSelect from '../../../select';
import { contentMultipleLangs } from '../../../../global-config';
import { useStore } from '../../../../store';
import { svg } from '../../../../global-config';
import { useEffect, useState } from 'react';

function Header() {
    const [states, dispatch] = useStore();
    // const [css, setCss] = useState('block');

    // useEffect(() => {
    //     console.dir(document.querySelector('.test-scroll'));
    //     const behavor = (e) => {
    //         let y = document.querySelector('.test-scroll').scrollTop;
    //         if (y > 0) {
    //             setCss('block');
    //         } else if (y == 0) {
    //             setCss('none');
    //         }
    //     };
    //     document.querySelector('.test-scroll').addEventListener('scroll', behavor);
    //     return () => window.removeEventListener('scroll', behavor);
    // }, []);

    return (
        <Box className="header"
            sx={{
                backgroundColor: `transparent`,
                height: `${size.headerHeight}`,
                width: '100vw',
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                top: 0,
                left: 0,
                zIndex:1,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 72px',
                    [`@media(min-width: ${size.siteMaxWidth})`]: {
                        width: `${size.siteMaxWidth}`,
                    },
                }}
            >
                <Box>
                    <img
                        src={`${svg('Logo-TekNixCorp.svg')}`}
                        style={{
                            width: '180px',
                            display: 'block',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: 'fit-content',
                        alignItems: 'center',
                        '& .item-header': {
                            marginLeft: '48px',
                        },
                    }}
                >
                    <Box
                        className="item-header"
                        sx={{
                            color: '#fff',
                            fontFamily: 'Space Grotesk, cursive',
                            fontStyle: 'Regular',
                            fontSize: '20px',
                            lineHeight: '125%',
                        }}
                    >
                        <Link href="#">{contentMultipleLangs[states.locale].MARKETPLACE}</Link>
                    </Box>
                    <Box
                        className="item-header"
                        sx={{
                            color: '#fff',
                            fontFamily: 'Space Grotesk, cursive',
                            fontStyle: 'Regular',
                            fontSize: '20px',
                            lineHeight: '125%',
                        }}
                    >
                        <Link href="#">{contentMultipleLangs[states.locale].LOGIN}</Link>
                    </Box>
                    <Box
                        className="item-header"
                        sx={{
                            color: '#fff',
                            fontFamily: 'Space Grotesk, cursive',
                            fontStyle: 'Regular',
                            fontSize: '20px',
                            lineHeight: '125%',
                        }}
                    >
                        <Link href="#" >{contentMultipleLangs[states.locale].WHITEPAPER}</Link>
                    </Box>
                    <DropdownSelect sx={{
                        color: '#fff',
                        fontFamily: 'Space Grotesk, cursive',
                        fontStyle: 'Regular',
                        fontSize: '20px',
                        lineHeight: '125%',
                    }}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
