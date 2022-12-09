import { Box } from '@mui/material';
import { useEffect } from 'react';
import { color } from '../global-config';
import Frame1 from '../components/Frame1';
import Frame2 from '../components/Frame2';
import Frame3 from '../components/Frame3';
import Frame4 from '../components/Frame4';
import Frame5 from '../components/Frame5';
import Frame6 from '../components/Frame6';
import Frame7 from '../components/Frame7';
import MainLayout from '../components/layouts/main';
import RootLayout from '../components/layouts/root';
import { actions, useStore } from '../store';


export default function Home() {
    const [states, dispatch] = useStore();

    useEffect(() => {
        dispatch(actions.setLocales());
    }, []);

    return (
        <RootLayout>
            <MainLayout>
                <Box className='container'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Frame1 />
                    <Frame1 />
                    {/* <Frame2 />
                    <Frame3 />
                    <Frame4 />
                    <Frame5 />
                    <Frame6 />
                    <Frame7 /> */}
                </Box>
            </MainLayout>

        </RootLayout>
    );
}