import React from 'react'
import { AppBar } from './navbar'

export const Layout = (props) => {
    return (
        <div>
            <AppBar/>
            {props.children}
        </div>
    )
}