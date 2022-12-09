import { Box } from '@mui/material';

function EmptyLayout({ children }) {
    return (
        <Box
            sx={{
                // border: 'yellow solid 4px',
                minHeight: '100%',
                maxWidth: '1440px',
                flex: 1,
            }}
        >
            {children}
        </Box>
    );
}

export default EmptyLayout;
