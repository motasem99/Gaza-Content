import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from '@material-ui/core/styles';

// Language
import DashboardLangObject from '../../Languages/Dashboard.js';
// Components
import DashboardNav from '../../components/DashboardNav/DashboardNav';

// style
import useStyles from './DashboardStyle.js';

const Dashboard = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const inbox = DashboardLangObject.inbox[Language];
  const starred = DashboardLangObject.starred[Language];
  const sendEmail = DashboardLangObject.sendEmail[Language];
  const drafts = DashboardLangObject.drafts[Language];
  const allMail = DashboardLangObject.allMail[Language];
  const trash = DashboardLangObject.trash[Language];
  const spam = DashboardLangObject.spam[Language];

  const drawer = (
    <div>
      <h1>Logo</h1>
      <div className={classes.toolbarColor} />
      <Divider />
      <List>
        {[inbox, starred, sendEmail, drafts].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.svgColor}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[allMail, trash, spam].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.svgColor}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={ThemeDirection}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <DashboardNav className={classes.displayNav} />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label='mailbox folders'>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation='css'>
            <Drawer
              container={container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className />
        </main>
      </div>
    </ThemeProvider>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
