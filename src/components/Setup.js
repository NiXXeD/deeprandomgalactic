import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import makeStyles from '@material-ui/styles/makeStyles'
import CardContent from '@material-ui/core/CardContent'
import LabelValueDisplay from './LabelValueDisplay'

function Setup() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardHeader title='Setup'/>
            <CardContent>
                <LabelValueDisplay label='Players' value='todo'/>
                <LabelValueDisplay label='Guns' value='todo'/>
                <LabelValueDisplay label='Grenades' value='todo'/>
                <LabelValueDisplay label='Overclocks' value='todo'/>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        margin: 16
    }
})

export default Setup
