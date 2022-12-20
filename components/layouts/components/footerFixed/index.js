import { Box } from '@mui/material';
import Link from 'next/link';
import { size } from '../../../../global-config';
import { color } from '../../../../global-config';
import {img } from '../../../../global-config';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box className="footer"
            sx={{
                backgroundColor: `transparent`,
                height: `${size.headerHeight}`,
                width: '100vw',
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                bottom: 0,
                left: 0,
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
                    <img
                        src={`${img('Logo-TekNix-2.png')}`}
                        style={{
                            width: '60px',
                            display: 'block',
                        }}
                    />
                </Box>
                <Box>
                    <Link href="mailto:example@gmail.com" >
                        <Button variant="contained" sx={{ padding:0,borderRadius: 99, minWidth: 56, height: 56,backgroundColor:color.primary }}>
                            <MailOutlineIcon sx={{ width: 24, height: 24, color:'#000' }} ></MailOutlineIcon>
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
