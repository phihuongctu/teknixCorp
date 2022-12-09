import { Box } from '@mui/material';
import HeaderOnlyLogo from './components/headerOnlyLogo';

function AuthenLayout({ logoSrc, children }) {
    return (
        <Box>
            <HeaderOnlyLogo logoSrc={logoSrc} />
            {children}
        </Box>
    );
}

export default AuthenLayout;
