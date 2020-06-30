import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'
import '../common.css'
class Navigation extends Component {
    state = { 
        clickedLink:"HOME"
     }
    handleClicked=(data)=>{
        this.setState({
            clickedLink:data
        })
    }
    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' bsPrefix="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto link-container">
                {this.props.navs && this.props.navs.map((ele,index)=>{
                    return <Link className={`link ${this.state.clickedLink==ele.title? "after-clicked":""}`} to={ele.to} key={index} onClick={()=>this.handleClicked(ele.title)} >{ele.title}</Link>
                })}
            </Nav>
            </Navbar.Collapse>
          </Navbar>
         );
    }
}
 
export default Navigation;