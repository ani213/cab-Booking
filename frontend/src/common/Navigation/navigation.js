import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'
class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' bsPrefix="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {this.props.navs && this.props.navs.map((ele,index)=>{
                    return <Link  to={ele.to}>{ele.title}</Link>
                })}
            </Nav>
            </Navbar.Collapse>
          </Navbar>
         );
    }
}
 
export default Navigation;