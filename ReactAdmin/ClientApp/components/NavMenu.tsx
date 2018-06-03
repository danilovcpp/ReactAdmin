import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <style type="text/css">{`
                body {
                    background-color: #f3e9e0;
                }
                .navbar {
                    background-color: #623b2a;
                    color: #c39367 !important;
                }
                .navbar-brand {
                    color: #c39367 !important;
                }
            `}</style>
            <Navbar staticTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Реакт приложение</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Запись</NavItem>
                        <NavDropdown eventKey={3} title="Дополнительно" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Николаев Николай</NavItem>
                        <NavItem eventKey={2} href="#">Выйти</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>;
    }
}
