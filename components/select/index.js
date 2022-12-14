import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { contentMultipleLangs } from '../../global-config';
import { Box } from '@mui/material';
import { actions, useStore } from '../../store';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image'
import { img } from '../../global-config';


const StyledMenu = styled((props) => (

    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        width: 'fit-content',
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));
const setACookie = (cName, cValue, exDays, path = '/') => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = d.toUTCString();
    document.cookie = `${cName}=${cValue};expires=${expires};path=${path}`;
};

export default function DropdownMenu() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [states, dispatch] = useStore();
    const locales = Object.keys(contentMultipleLangs);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickMenuItem = (locale) => {
        dispatch(actions.setLocales(locale));
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box style={{ color: '#fff' }} className="item-header">
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                color="inherit"
                sx={{
                    color: '#b1b5c3',
                    fontFamily: 'Space Grotesk, Inter',
                    fontStyle: 'Regular',
                    fontSize: matches ? '20px' : '16px',
                    lineHeight: '125%',
                    minWidth: 'auto'
                }}
                disableElevation
                onClick={handleClick}
            // endIcon={<KeyboardArrowDownIcon />}
            >
                {contentMultipleLangs[states.locale].LANGUAGE == 'VI' ?
                    <img

                        src={`${img('flag-vietnam.jpg')}`} alt="" style={{
                            borderRadius: '50%',
                            width: matches ? "32px" : '24px',
                            height: matches ? "32px" : '24px',
                            objectFit: 'cover'
                        }} /> :
                    <img

                        src={`${img('flag-usa.jpg')}`} alt="" style={{
                            borderRadius: '50%',
                            width: matches ? "32" : '24px',
                            height: matches ? "32" : '24px',
                            objectFit: 'cover'
                        }} />
                }

            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {locales.map((locale, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleClickMenuItem(locale)}
                        disableRipple
                        sx={{
                            fontFamily: 'Space Grotesk, Inter',
                            fontStyle: 'Regular',
                            fontSize: '18px',
                            lineHeight: '125%',
                            padding: '1rem 2.5rem'
                        }}
                    >
                        <Box>{contentMultipleLangs[locale].LANGUAGE}</Box>
                    </MenuItem>
                ))}
            </StyledMenu>
        </Box>
    );
}
