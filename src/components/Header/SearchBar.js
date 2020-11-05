import React from 'react'
import { createUseStyles } from 'react-jss'

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
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <input type='text' placeholder='Search...' className={classes.input} />
        </div>
    )
}

export default SearchBar
