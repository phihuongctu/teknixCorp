import { Box } from '@mui/material';
import Image from 'next/image';

function HeaderOnlyLogo({ logoSrc }) {
    return (
        <Box>
            <Image src={logoSrc} alt="imax" width={149} height={64} />
        </Box>
    );
}

export default HeaderOnlyLogo;
