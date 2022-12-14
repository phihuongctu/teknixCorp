
import Link from 'next/link';
import { Box } from '@mui/material';
import { useStore } from '../../../../store';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { contentMultipleLangs } from '../../../../global-config';
import { useRouter } from 'next/router';

function Menu() {
    const { asPath } = useRouter()
    const [states, dispatch] = useStore();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box className='menu'
            sx={{
                display: 'flex',
                width: 'fit-content',
                alignItems: 'center',
                '& .item-header': {
                    marginLeft: '2rem',
                },
                display: matches ? 'flex' : 'none'
            }}
        >
            <Box
                className="item-header"
                sx={{
                    color: '#fff',
                    fontFamily: 'Space Grotesk,Inter',
                    fontStyle: 'Regular',
                    fontSize: '16px',
                    lineHeight: '125%',
                }}
            >
                <Link href="/" className = {asPath == '/' ? 'color-primary' : null}>{contentMultipleLangs[states.locale].Home}</Link>
            </Box>
            <Box
                className="item-header"
                sx={{
                    color: '#fff',
                    fontFamily: 'Space Grotesk, Inter',
                    fontStyle: 'Regular',
                    fontSize: '16px',
                    lineHeight: '125%',
                }}
            >
                <Link href="/" >{contentMultipleLangs[states.locale].About}</Link>
            </Box>
            <Box
                className="item-header"
                sx={{
                    color: '#fff',
                    fontFamily: 'Space Grotesk, Inter',
                    fontStyle: 'Regular',
                    fontSize: '16px',
                    lineHeight: '125%',
                }}
            >
                <Link href="/">{contentMultipleLangs[states.locale].Careers}</Link>
            </Box>
        </Box>
    )

}
export default Menu;

