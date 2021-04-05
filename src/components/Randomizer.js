import {Divider} from '@material-ui/core'
import React, {useCallback, useState} from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import makeStyles from '@material-ui/styles/makeStyles'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import ShuffleIcon from '@material-ui/icons/ShuffleOutlined'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import dwarves from '../data/dwarves'
import LabelValueDisplay from './LabelValueDisplay'

function Randomizer() {
    const classes = useStyles()
    const [data, setData] = useState(null)

    const handleClear = useCallback(() => {
        setData(null)
    }, [])

    const handleRandomize = useCallback(() => {
        const randomized = players.map(player => {
            const dwarf = pickOne(dwarves)
            return {
                name: player,
                dwarf: dwarf.name,
                primary: pickOne(dwarf.primaries),
                secondary: pickOne(dwarf.secondaries),
                grenade: pickOne(dwarf.grenades)
            }
        })
        setData(randomized)
    }, [])

    return (
        <Card className={classes.card}>
            <CardHeader title='Randomizer'/>
            <CardContent className={classes.content}>
                {!data && <Typography>Click Randomize to begin.</Typography>}
                {
                    data &&
                    data.map((player, index) =>
                        <React.Fragment key={index}>
                            <div className={classes.row}>
                                <LabelValueDisplay label='Player' value={player.name}/>
                                <LabelValueDisplay label='Dwarf' value={player.dwarf}/>
                            </div>
                            <div className={classes.row}>
                                <LabelValueDisplay label='Primary' value={player.primary}/>
                                <LabelValueDisplay label='Secondary' value={player.secondary}/>
                            </div>
                            <div className={classes.row}>
                                <LabelValueDisplay label='Grenade' value={player.grenade}/>
                            </div>
                            {index < players.length - 1 && <Divider className={classes.divider}/>}
                        </React.Fragment>
                    )
                }
            </CardContent>
            <CardActions>
                <IconButton color='secondary' onClick={handleClear}>
                    <ClearAllIcon/>
                </IconButton>
                <IconButton color='secondary' onClick={handleRandomize}>
                    <ShuffleIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

const players = ['One', 'Two', 'Three', 'Four']
const pickOne = arr => {
    const index = Math.floor((Math.random() * 100) % arr.length)
    return arr[index]
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 400
    },
    content: {
        marginTop: -16,
        marginBottom: -16
    },
    divider: {
        margin: '16px -16px 8px -16px'
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export default Randomizer
