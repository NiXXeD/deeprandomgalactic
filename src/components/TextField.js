import React, {useCallback, useContext} from 'react'
import MuiTextField from '@material-ui/core/TextField'
import makeStyles from '@material-ui/styles/makeStyles'
import SettingsContext from './SettingsContext'

function TextField({label, name}) {
    const classes = useStyles()
    const {settings, onDataUpdate} = useContext(SettingsContext)

    const handleChange = useCallback(({target}) => {
        const {name, value} = target
        const newSettings = {...settings, [name]: value}
        onDataUpdate(newSettings)
    }, [onDataUpdate, settings])

    return (
        <MuiTextField
            name={name}
            label={label}
            value={settings[name]}
            fullWidth
            className={classes.textField}
            onChange={handleChange}
        />
    )
}

const useStyles = makeStyles({
    textField: {
        marginBottom: 16
    }
})

export default TextField
