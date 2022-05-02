import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NewsComponent from './NewsComponent';
import Grid from '@material-ui/core/Grid';
import StudentTable from './StudentTable';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: 'gray',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    /*Toolbar:{backgroundColor:"gray" },*/
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();
    const news = [
        { n: 'red' },
        { n: 'rehd' },
        { n: 'redj' },
    ]

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar sx={{ backgroundColor: 'red' }}>
                    <Grid container xs={12} alignItems='flex-end'>
                        <Grid xs={10}>
                            <Typography variant="h6" noWrap>
                                Student
                            </Typography>
                        </Grid>
                        <Grid xs={2}>
                            <TextField id="standard-search" label="Search field" type="search"  />
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {['Profile', 'Notification', 'DisciplineTips', 'Chat'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{[<AccountCircleIcon/>]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['AASTU', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid xs={12} container spacing={3}>
                    {news.map((i) => {
                        return (
                            <Grid item xs={4}>
                                <NewsComponent />
                            </Grid>
                        );
                    },
                    <div className='student-table'>
                    <Grid>
                        <StudentTable />
                        </Grid> 
                     </div>
                    )}
                </Grid>
            </main>
        </div>
    );
}