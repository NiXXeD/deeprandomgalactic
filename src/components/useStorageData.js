import {useCallback, useState} from 'react'

function useStorageData({localStorageKey, onDataValidate, defaultValue = {}}) {
    const [data = defaultValue, setData] = useState(() => {
        try {
            const dataString = localStorage.getItem(localStorageKey) || JSON.stringify(defaultValue)
            const parsedData = JSON.parse(dataString) || defaultValue
            let validatedData
            if (onDataValidate) {
                validatedData = onDataValidate(parsedData)
                if (!validatedData) {
                    console.warn('Invalid local storage data', validatedData)
                    localStorage.removeItem(localStorageKey)
                    return defaultValue
                }
            } else {
                validatedData = parsedData
            }
            return validatedData
        } catch (ex) {
            console.warn('Error loading local storage data', ex)
            localStorage.removeItem(localStorageKey)
        }
        return defaultValue
    })

    const onDataUpdate = useCallback(newData => {
        const validatedData = onDataValidate(newData)
        if (validatedData) {
            setData(validatedData)
            const newValue = JSON.stringify(newData)
            localStorage.setItem(localStorageKey, newValue)
        } else {
            console.error('Attempt to set invalid local storage value', newData)
        }
    }, [localStorageKey, onDataValidate])

    return {data, onDataUpdate}
}

export default useStorageData
