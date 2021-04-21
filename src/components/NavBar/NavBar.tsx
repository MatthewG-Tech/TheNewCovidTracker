import {Box, Header, Menu, Nav, ResponsiveContext} from "grommet";
import {Link} from "react-router-dom";
import React from "react";

export default function NavBar() {
    return(
        <Header background="light-2" pad="medium">
            <Box direction="row" align="center" gap="small">
                Covid Tracker 101
            </Box>
            <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === 'small' ? (
                        <Menu label="Click me" items={[ {label: 'This is', onClick: () => {}}]}/>
                    ) : (
                        <Nav direction="row" >
                            <div className="navLink" style={{color: "red"}}>
                                <Link to="/us">United States</Link>
                            </div>
                                <Link to="/About">About</Link>

                        </Nav>
                    )
                }
            </ResponsiveContext.Consumer>
        </Header>
    )
}
