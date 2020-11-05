import React from 'react'
import { createUseStyles } from 'react-jss'
import Avatar from './Avatar'
import SearchBar from './SearchBar'

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: {
            left: 32,
            right: 32
        },
        marginTop: 40
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notifications: {
        position: 'relative',
        marginRight: 32,
        width: 30,
        height: 30,
        '& svg': {
            stroke: '#333'
        },
        '&.active:after': {
                content: '""',
                position: 'absolute',
                right: 4,
                top: 1,
                width: 9,
                height: 9,
                backgroundColor: 'red',
                borderRadius: '100%',
                boxShadow: '0 0 0 2px #FFF'
        }
    },
    profile: {
        '& > *': {
            verticalAlign: 'middle'
        }
    },
    profileName: {
        color: '#3E3E3E',
        fontSize: 14,
        fontWeight: 500,
        marginLeft: 8
    }
})

const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <SearchBar />
            <div className={classes.actions}>
                <div className={[classes.notifications, 'active'].join(' ')}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                </div>
                <div className={classes.profile}>
                    <Avatar size={48} /> <span className={classes.profileName}>Naoufal B.</span>
                </div>
            </div>
        </header>
    )
}

export default Header
