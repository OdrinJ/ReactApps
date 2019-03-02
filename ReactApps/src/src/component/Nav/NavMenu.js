import React , {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'
import './NavMenu.css'

const navScreens = [
    {
        id: 1,
        name: "Debiteringsgrad",
        description: "85%",
        info: "mars 2019"
    },
    {
        id: 2,
        name: "Sjuk Dagar",
        description: "15%",
        info: "mars 2019"
    },
    {
        id: 3,
        name: "Topprojekt",
        description: "1# Malmö Teater",
        info: "mars 2019"
    },
    {
        id: 4,
        name: "Aktuell",
        description: "01 mars",
        info: "Speed dating"
    },
    {
        id: 5,
        name: "Topp Blogg",
        description: "Oh Dashboard",
        info: "Apr 2019"
    },
    {
        id: 6,
        name: "Händelse",
        description: "01 mars",
        info: "Utvecklingsdag"
    }
    ];

 class NavMenu extends Component {
    constructor(){
        super();
        this.state = {
            activeKey: '#/nav3'
        }
    }
    componentWillMount(){
        this.props.history.replace(this.state.activeKey.split('#')[1]);
    }
    onClick = (index) => {
        console.log('hi', index)
    }
    render (){
        return (
            <Navbar expand="sm" fixed="bottom" className="justify-content-between">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey={this.state.activeKey} onSelect={k => this.onClick(k)}>
                        {navScreens.map(data => (
                            <Nav.Link href={"#/nav" + data.id} key={data.id}>
                                <div className="nav-detail">
                                    <span style={{margin: 0+'px'}}>{data.name}</span>
                                    <p style={{margin: 0+'px', wordBreak: 'break-word', whiteSpace: 'nowrap'}}>{data.info}</p>
                                    <span>{data.description}</span>
                                </div>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavMenu)