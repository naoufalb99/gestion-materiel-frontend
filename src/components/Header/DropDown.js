import React, { useEffect, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles({
    wrapper: {
        position: 'absolute',
        right: 0,
        top: 'calc(100% + 8px)',
        width: 240,
        backgroundColor: '#FFF',
        borderRadius: 8,
        boxShadow: '0px 10px 50px rgba(0,0,0,0.1)',
        padding: '24px 0',
        display: ({ isOpen }) => isOpen ? 'block' : 'none'
    },
    link: {
        fontSize: 14,
        color: '#5F5F5F',
        padding: '8px 24px',
        display: 'block',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#FBFBFB',
            color: '#333'
        }
    }
})

const DropDown = ({ isOpen, onClose }) => {

    const classes = useStyles({ isOpen })
    const dropDownElement = useRef(null)

    useEffect(() => {
        function handleDocumentClick(e) {
            if(dropDownElement.current.contains(e.target)) return;
            if(!isOpen) return;
            onClose()
        }
        document.addEventListener('click', handleDocumentClick, false);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [isOpen, onClose])

    return (
        <nav className={classes.wrapper} ref={dropDownElement} onClick={(e) => e.stopPropagation() }>
            <Link to='/' className={classes.link}>Account Settings</Link>
            <Link to='/' className={classes.link}>Sign Out</Link>
        </nav>
    )
}

DropDown.defaultProps = {
    isOpen: false,
    onClose: () => {}
}

export default DropDown
