import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import TranslateIcon from '@material-ui/icons/Translate';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Language = ({ setDirection, direction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLang, setCurrentLang] = useState('en');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const chooseLang = (e) => {
    setCurrentLang(e.target.innerText.slice(0, 2));
    if (e.target.innerText === 'Arabic') {
      setDirection('rtl');
      localStorage.setItem('dirLang', 'rtl');
    } else {
      setDirection('ltr');
      localStorage.setItem('dirLang', 'ltr');
    }
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        <TranslateIcon fontSize='small' />{' '}
        {localStorage.getItem('dirLang') === 'ltr' ? 'en' : 'ar'}
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <StyledMenuItem>
          <ListItemText onClick={chooseLang} primary='English' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText onClick={chooseLang} primary='Arabic' />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default Language;
