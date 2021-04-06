import React, {useCallback, useMemo} from 'react'
import SettingsContext from './SettingsContext'
import useStorageData from './useStorageData'

function SettingsProvider({children}) {
    const onDataValidate = useCallback(data => {
        if (data) {
            return Object.keys(defaultValues)
                .reduce((acc, key) => {
                    if (data.hasOwnProperty(key)) acc[key] = data[key]
                    else acc[key] = defaultValues[key]
                    return acc
                }, {})
        }
    }, [])

    const {data: settings, onDataUpdate} = useStorageData({localStorageKey, onDataValidate})

    const contextValue = useMemo(() => ({
        settings,
        onDataUpdate
    }), [onDataUpdate, settings])

    return (
        <SettingsContext.Provider value={contextValue}>
            {children}
        </SettingsContext.Provider>
    )
}

const defaultValues = {
    player1: 'One',
    player2: 'Two',
    player3: 'Three',
    player4: 'Four',
    balancedTeam: true,
    randomGuns: true,
    randomGrenades: true,
    randomOverclocks: false
}
const localStorageKey = 'DRnGSettings'

export default SettingsProvider
