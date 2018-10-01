import React from 'react';
import {Glyphicon, Nav, Navbar, NavItem} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">frakegram</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="/users/sign_out">
            <Glyphicon glyph="log-out" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
