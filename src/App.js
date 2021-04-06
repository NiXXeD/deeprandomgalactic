import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import SettingsProvider from './components/SettingsProvider'
import AppTabs from './nav/AppTabs'
import Nav from './nav/Nav'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SettingsProvider>
                <div>
                    <Nav/>

                    <AppTabs/>
                </div>
            </SettingsProvider>
        </ThemeProvider>
    )
}

export default App
