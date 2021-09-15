import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeLight, changeDark, changeToEnglish, changeToSpanish, setSpeech} from '../state'
import {Container, Nav, Navbar} from "react-bootstrap";
import {RootState} from '../customTypes/reduxTypes'

import 'bootstrap/dist/css/bootstrap.min.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

function Header() {

    const dispatch = useDispatch();
    const theme = useSelector((state:RootState) => {
        return state.theme.theme;
    })




    return (

        <Navbar bg={theme} variant={'dark'}>

            <Navbar bg={theme} expand="lg">
                <Container>
                    <Navbar.Brand>POKEDEX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                                <button onClick={() => {
                                    dispatch(changeLight());
                                    dispatch(setSpeech('light'));
                                }}><FontAwesomeIcon icon={faSun}/></button>
                                <button onClick={() => dispatch(changeDark())}><FontAwesomeIcon icon={faMoon}/></button>


                                <button onClick={() => dispatch(changeToEnglish())}>English</button>
                                <button onClick={() => dispatch(changeToSpanish())}>Spanish</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Navbar>
    );
}

export default Header;