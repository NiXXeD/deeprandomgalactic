import React, {useCallback, useContext, useState} from 'react'
import {Divider} from '@material-ui/core'
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
import {activePerks, passivePerks} from '../data/perks'
import LabelValueDisplay from './LabelValueDisplay'
import SettingsContext from './SettingsContext'

function Randomizer() {
    const classes = useStyles()
    const [data, setData] = useState(null)
    const {settings} = useContext(SettingsContext)
    const {
        player1, player2, player3, player4, balancedTeam, randomGuns, randomGrenades, randomOverclocks, randomPerks
    } = settings
    const players = [player1, player2, player3, player4].filter(p => p)

    const handleClear = useCallback(() => {
        setData(null)
    }, [])

    const handleRandomize = useCallback(() => {
        const dwarfClone = [...dwarves]
        const randomized = players.map(player => {
            const dwarf = pickOne(dwarfClone, balancedTeam)
            const primary = pickOne(dwarf.primaries)
            const secondary = pickOne(dwarf.secondaries)
            return {
                name: player,
                color: dwarf.color,
                dwarf: dwarf.name,
                primary: primary.name,
                primaryOverclock: pickOne(primary.overclocks),
                secondary: secondary.name,
                secondaryOverclock: pickOne(secondary.overclocks),
                grenade: pickOne(dwarf.grenades),
                passivePerks: pickMultiple(passivePerks, 3),
                activePerks: pickMultiple(activePerks, 2)
            }
        })
        setData(randomized)
    }, [balancedTeam, players])

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
                                <LabelValueDisplay
                                    label='Dwarf'
                                    value={player.dwarf}
                                    valueStyle={{color: player.color}}
                                />
                            </div>
                            {
                                randomGuns &&
                                <div className={classes.row}>
                                    <LabelValueDisplay label='Primary'>
                                        {player.primary}
                                        {
                                            randomOverclocks &&
                                            <React.Fragment>
                                                <br/>
                                                {player.primaryOverclock}
                                            </React.Fragment>
                                        }
                                    </LabelValueDisplay>
                                    <LabelValueDisplay label='Secondary'>
                                        {player.secondary}
                                        {
                                            randomOverclocks &&
                                            <React.Fragment>
                                                <br/>
                                                {player.secondaryOverclock}
                                            </React.Fragment>
                                        }
                                    </LabelValueDisplay>
                                </div>
                            }
                            {
                                randomGrenades &&
                                <LabelValueDisplay label='Grenade' value={player.grenade}/>
                            }
                            {
                                randomPerks &&
                                <div className={classes.row}>
                                    <LabelValueDisplay
                                        label='Passive Perks'
                                        value={player.passivePerks.map(perk =>
                                            <React.Fragment>{perk}<br/></React.Fragment>
                                        )}
                                    />
                                    <LabelValueDisplay
                                        label='Active Perks'
                                        value={player.activePerks.map(perk =>
                                            <React.Fragment>{perk}<br/></React.Fragment>
                                        )}
                                    />
                                </div>
                            }
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

const pickOne = (arr, pluck) => {
    const max = arr.length
    const index = Math.floor((Math.random() * max) % max)
    const item = arr[index]
    if (pluck) arr.splice(index, 1)
    return item
}
const pickMultiple = (arr, count) => {
    return [...Array(count)].map(() => pickOne(arr, true))
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 450
    },
    content: {
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 304px)'
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
