import React, {useState} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Randomizer from '../components/Randomizer'
import Setup from '../components/Setup'
import makeStyles from '@material-ui/styles/makeStyles'

function AppTabs() {
    const classes = useStyles()
    const [tab, setTab] = useState(0)
    const handleTabChange = (_, newValue) => setTab(newValue)

    return (
        <React.Fragment>
            <AppBar position='static' elevation={0} className={classes.appBar}>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                >
                    <Tab label='Randomizer' className={classes.tab}/>
                    <Tab label='Setup' className={classes.tab}/>
                </Tabs>
            </AppBar>
            <div className={tab !== 0 ? classes.invisible : ''}>
                <Randomizer/>
            </div>
            <div className={tab !== 1 ? classes.invisible : ''}>
                <Setup/>
            </div>
        </React.Fragment>
    )
}

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.background.paper
    },
    tab: {
        backgroundColor: theme.palette.background.paper,
        minWidth: 125
    },
    invisible: {
        display: 'none'
    }
}))

export default AppTabs
