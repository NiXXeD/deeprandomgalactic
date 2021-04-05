import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tooltip from '@material-ui/core/Tooltip'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import githubSvg from './github.svg'
import makeStyles from '@material-ui/styles/makeStyles'

function Nav() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar position='static' elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {/* Title bar */}
                    <Typography variant='h6' className={classes.title}>
                        Deep Random Galactic
                    </Typography>

                    {/* Top right icons */}
                    <Tooltip title='Contribute on GitHub!'>
                        <IconButton target='_blank' href='https://github.com/NiXXeD/deeprandomgalactic'>
                            <img alt='github link' width='24' height='24' src={githubSvg}/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.background.paper
    },
    drawerPaper: {
        width: 225
    },
    toolbar: {
        paddingLeft: 8,
        paddingRight: 8
    },
    title: {
        paddingLeft: 12,
        flex: 1
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export default Nav
