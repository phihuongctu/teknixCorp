import { Box, Dialog } from '@mui/material';
import { size,svg,img } from '../../../../global-config';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DropdownSelect from '../../../select';
import Menu from '../menu';
import Image from 'next/image'


function Header() {
    const [css, setCss] = useState('none');

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    //responsive
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box className='header'
            sx={{
                backgroundColor: `transparent`,
                height: matches ? `${size.headerHeight}` : '70px',
                width: '100vw',
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                top: 0,
                left: 0,
                zIndex: 1
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: matches ? '0 72px' : ' 0 24px',
                    [`@media(min-width: ${size.siteMaxWidth})`]: {
                        width: `${size.siteMaxWidth}`,
                    },
                }}
            >
                <Box>
                    <Image
                        width="160"
                        height="32"
                        className={`logo-zomland ${css}`}
                        src={`${svg('Logo-TekNixCorp.svg')}`} alt="" style={{
                            width: matches ? '160px' : ' 86px',
                            height: '100%'
                        }} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'

                }}>
                    <Menu />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginLeft: '2rem'
                    }}>
                        <DropdownSelect />
                        <Box className='toggle' onClick={handleClickOpen} sx={{
                            display: matches ? 'none' : 'flex',
                            marginLeft: '24px'
                        }}>
                            <Image
                                width="32"
                                height="32"
                                src={`${svg('hamburger.svg')}`} alt='' priority />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Dialog className='popup-menu' fullScreen
                open={open}
                onClose={handleClose}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
            >

                <Box sx={{
                    alignSelf: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <Image
                        width="160"
                        height="32"
                        className={`logo-zomland ${css}`}
                        src={`${svg('Logo-TekNixCorp.svg')}`} alt="" style={{
                            width: matches ? '160px' : ' 86px',
                            height: '100%'
                        }} />
                    <Box onClick={handleClose} variant="outlined"
                        color="primary" sx={{
                            borderRadius: '50%', minWidth: '2rem', width: '2rem', minHeight: '2rem', display: 'grid',
                            placeItems: 'center',
                            alignSelf: 'end',
                            fontSize: '1rem',
                            background:'#fff'
                        }}
                    >
                        X
                    </Box>
                </Box>
                <Menu />
            </Dialog>
        </Box >
    );
}

export default Header;
