import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import makeStyles from '@material-ui/styles/makeStyles'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from './Checkbox'
import TextField from './TextField'

function Setup() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardHeader title='Setup'/>
            <form noValidate autoComplete='off'>
                <CardContent className={classes.content}>
                    <TextField name='player1' label='Player 1 Name'/>
                    <TextField name='player2' label='Player 2 Name'/>
                    <TextField name='player3' label='Player 3 Name'/>
                    <TextField name='player4' label='Player 4 Name'/>

                    <Checkbox name='balancedTeam' label='Balanced Team'/>
                    <Checkbox name='randomGuns' label='Random Guns'/>
                    <Checkbox name='randomGrenades' label='Random Grenades'/>
                    <Checkbox name='randomOverclocks' label='Random Overclocks'/>
                </CardContent>
            </form>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 450
    },
    content: {
        marginTop: -16,
        marginBottom: -16,
        display: 'flex',
        flexDirection: 'column'
    }
})

export default Setup
