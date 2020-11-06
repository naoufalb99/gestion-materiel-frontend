import React from 'react'
import { createUseStyles } from 'react-jss'
import { IconSearch } from 'tabler-icons'

const useStyles = createUseStyles({
    wrapper: {
        position: 'relative',
        height: 40,
        '& .icon': {
            position: 'absolute',
            width: 24,
            height: 24,
            stroke: '#333',
            top: '50%',
            left: 16,
            marginTop: '-12px',
        }
    },
    input: {
        border: 'none',
        backgroundColor: '#F8F6F7',
        outline: 'none',
        borderRadius: 40,
        height: 40,
        padding: '0 16px 0 56px',
        minWidth: 280,
        color: '#3F3F3F'
    }
})

const SearchBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <IconSearch size={24} stroke={1.5} />
            <input type='text' placeholder='Search...' className={classes.input} />
        </div>
    )
}

export default SearchBar
