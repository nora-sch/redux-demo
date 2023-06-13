import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/login/loginSlice";

function NavigationBar(args) {
  const user = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand={"xl"}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/counter">
                Counter
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {user ? (
            <FaUserCircle style={{ marginRight: "10px", color: "green" }} />
          ) : (
            <FaUserCircle style={{ marginRight: "10px" }} />
          )}
          {user ? (
            <div>
            {user}
            <button onClick={() => dispatch(logout())} style={{marginLeft:'10px'}}>Log Out</button>
            </div>
          ) : (
            <NavLink tag={RRNavLink} to="/login">
              Login
            </NavLink>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
