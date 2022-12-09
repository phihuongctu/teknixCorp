import { contentMultipleLangs, img } from '../global-config';
import { useStore } from '../store';
import { Box } from '@mui/material';
import { color } from '../global-config';

const Frame1 = () => {
    const [states, dispatch] = useStore();
    return (
        <div className="f1-container panel">
            <Box sx={{
                // backgroundColor: `${color.section1}`,
                background: 'linear-gradient(to right bottom, #592988, #220e4a)',
                display: 'flex',
                alignItems: 'left',
                justifyContent:'center',
                flexDirection:'column',
                padding: '96px 15vw',
                minHeight:'100vh',
                width:'100vw'
            }}>
                <p>Kiến Tạo Tương Lai</p>
                <h3 className='color-primary'>TEKNIX</h3>
                <h3>CORPORATION</h3>
                <p className='description'><b>TekNix Corporation</b> là công ty công nghệ chuyên cung cấp các phần mềm, ứng dụng, giải pháp công nghệ thông tin cho doanh nghiệp và người dùng.
</p>
            </Box>
        </div>
    );
};

export default Frame1;
