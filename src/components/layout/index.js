import React from 'react'
import { createUseStyles } from 'react-jss'
import Header from '../header';

const useStyles = createUseStyles({

})

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}


export default Layout
