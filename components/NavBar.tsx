import React, {useContext} from 'react'
import Link from 'next/link'
import {AppBar, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerContext } from "./Layout"

type Props = {
    title:string
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

const NavBar = (props:Props) => {
    const classes = useStyles();
    const drawerContext = useContext(DrawerContext)

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <h2>
                        <Link href="/">{props.title}</Link>
                    </h2>
                    <div style={{ flexGrow: 1 }}>
                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={() => {
                            drawerContext.setDrawer(true)
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar