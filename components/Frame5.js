import { Box } from '@mui/material';
import { img } from '../global-config';
import { keyframes } from '@mui/system';

const spin = keyframes`
  0% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform:  scale(0.75);
  }
`;

const Frame5 = () => {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <img style={{ width: '100%', height: 'auto' }} src={img(`map/platform.png`)} alt="" />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '55%',
                        width: '30%',
                        left: '42%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/trading.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '37%',
                        width: '30%',
                        left: '7%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/banl.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '8%',
                        width: '30%',
                        left: '35%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/battle.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '42%',
                        width: '26%',
                        left: '30%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/camp.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        width: '22%',
                        left: '65%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/cemetery.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '45%',
                        width: '20%',
                        left: '58%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/lab.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '55%',
                        width: '30%',
                        left: '12%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/portal.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        width: '30%',
                        left: '69%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/unknown.png`)} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '55%',
                        width: '15%',
                        left: '9%',
                        '&:hover': {
                            cursor: 'pointer',
                            animation: `${spin} 3s infinite ease`,
                        },
                    }}
                >
                    <img style={{ width: '100%', height: 'auto' }} src={img(`map/blacksmith.png`)} alt="" />
                </Box>
            </Box>
        </Box>
    );
};

export default Frame5;
