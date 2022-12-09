import { Box } from '@mui/material';
import { size } from '../../global-config';

function RootLayout({ children }) {
    return (
        <Box
            sx={{
                // border: 'red solid 4px',
                borderTop: 'none',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    // marginTop: `${size.headerHeight}`,
                    // border: 'blue solid 4px',
                    width: '100%',
                    [`@media(min-width: ${size.siteMaxWidth})`]: {
                        width: `${size.siteMaxWidth}`,
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default RootLayout;
