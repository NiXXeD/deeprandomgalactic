import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
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
            <div>
                <Nav/>

                <AppTabs/>
            </div>
        </ThemeProvider>
    )
}

export default App
