import makeStyles from '@material-ui/styles/makeStyles'
import React, {useCallback, useContext} from 'react'
import {FormControlLabel} from '@material-ui/core'
import MuiCheckbox from '@material-ui/core/Checkbox'
import SettingsContext from './SettingsContext'

function Checkbox({label, name}) {
    const classes = useStyles()
    const {settings, onDataUpdate} = useContext(SettingsContext)

    const handleChange = useCallback(({target}) => {
        const {name, checked} = target
        const newSettings = {...settings, [name]: checked}
        onDataUpdate(newSettings)
    }, [onDataUpdate, settings])

    return (
        <FormControlLabel
            control={
                <MuiCheckbox
                    name={name}
                    checked={settings[name]}
                    onChange={handleChange}
                />
            }
            label={label}
            className={classes.checkbox}
        />
    )
}

const useStyles = makeStyles({
    checkbox: {
        marginBottom: -8
    }
})

export default Checkbox
