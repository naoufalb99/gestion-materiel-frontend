import React from 'react'
import { createUseStyles } from 'react-jss'
import defaultAvatar from '../../assets/images/avatar.png'

const useStyles = createUseStyles({
    image: {
        borderRadius: '100%',
        width: ({ size }) => size, 
        height: ({ size }) => size, 
    }
})

const defaultProps = {
    src: defaultAvatar,
    size: 50 // px
}

const Avatar = ({ src, size }) => {

    const classes = useStyles({ size })

    return <img className={classes.image} {...{src}} />
}

Avatar.defaultProps = defaultProps

export default Avatar