import { Box, Button } from '@mui/material';
import { color, svg } from '../../../../global-config';
import { useStore } from '../../../../store';

const Support = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '234px',
                height: '155px',
                display: 'flex',
                padding: '0 1.4rem',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: `${color.primary}`,
                borderRadius: '15px',
            }}
        >
            <Box
                sx={{
                    // border: '3px red solid',
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    top: '-100px',
                }}
            >
                <img src={svg('sidebar/cham-hoi.svg')} alt="" />
            </Box>
            <Box>Yeu cau ho tro</Box>
            <Box>Dang ki dich vu ho tro su kien</Box>
            <Button
                sx={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    // borderRadius: '10px',
                }}
            >
                Gui yeu cau
                <Box sx={{ position: 'relative', top: '3px' }}>
                    <img src={svg('sidebar/arrow.svg')} alt="" />
                </Box>
            </Button>
        </Box>
    );
};

function Sidebar({ sx = {} }) {
    const [states, dispatch] = useStore();
    const Category = ({ linkSVG, category }) => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    cursor: 'pointer',
                }}
            >
                <Box>
                    <img src={svg(linkSVG)} alt="" />
                </Box>
                <Box>{category}</Box>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                // border: 'solid 4px green',
                width: '30.2rem',
                ...sx,
            }}
        >
            <h2>Bảng điều khiển</h2>
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Category linkSVG={'sidebar/kinh-doanh.svg'} category="Kinh doanh" />
            <Support />
        </Box>
    );
}

export default Sidebar;
