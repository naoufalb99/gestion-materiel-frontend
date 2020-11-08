import React from 'react'
import { Route } from 'react-router-dom'

const Routes = ({ routes = {} }) => {
    return (
        <>
            {
                Object.entries(routes).map(([routeName, props]) => {
                    return <Route key={routeName} {...props} />
                })
            }
        </>
    )
}

export default Routes
