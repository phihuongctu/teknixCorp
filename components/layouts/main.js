import { Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footerFixed';

function MainLayout({ children }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                // border: '4px green solid',
                display: 'flex',
            }}
        >
            <Header />
            <Box
                className="body"
                sx={{
                    // border: 'solid 2px blue',
                    overflowX: 'hidden',
                    height: '100%',
                    flex: 1,
                    overflowY: 'scroll',
                    display:'flex',
                    alignItems:'center',
                }}
            >
                {children}
            </Box>
            <Footer/>
        </Box>
    );
}

export default MainLayout;
