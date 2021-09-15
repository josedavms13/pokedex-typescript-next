import React, {useEffect, useState} from 'react';
import {RootState} from "../../customTypes/reduxTypes";
import 'bootstrap/dist/css/bootstrap.min.css';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressCard ,faThList, faTh} from '@fortawesome/free-solid-svg-icons'

import {Nav, Form} from "react-bootstrap";
import { useSelector} from "react-redux";



// @ts-ignore
function HeaderBar({filterChange, displayModeChange}) {

    //region Language management
    const language = useSelector((state: RootState) => state.language)


    interface languageObject {
        displayButtons: {
            details: string,
            list: string,
            grid: string
        },
        searchSection: {
            label: string
        }
    }

    const [labelsTxt, setLabelsTxt] = useState<languageObject>({
            displayButtons: {
                details: 'Details',
                list: 'List',
                grid: 'Grid'
            },
        searchSection: {
                label: 'Filter'
        }
        });

    useEffect(() => {
        switch (language){
            case 'spanish':
                setLabelsTxt({
                    displayButtons: {
                        details: 'Detalles',
                        list: 'Lista',
                        grid: 'Rejilla'
                    },
                    searchSection: {
                        label: 'Filtro'
                    }
                })
                break

            case 'english':
                setLabelsTxt({
                    displayButtons: {
                        details: 'Details',
                        list: 'List',
                        grid: 'Grid'
                    },
                    searchSection: {
                        label: 'Filter'
                    }
                })
        }
    }, [language]);
    //endregion  Language management


    return (
        <Nav className={'customNav'}>
            <Nav.Item className={'navItem'}>
                <button onClick={()=>displayModeChange('details')}>{labelsTxt.displayButtons.details} <FontAwesomeIcon icon={faAddressCard}/></button>
                <button onClick={()=>displayModeChange('list')}>{labelsTxt.displayButtons.list} <FontAwesomeIcon icon={faThList}/></button>
                <button onClick={()=>displayModeChange('grid')}>{labelsTxt.displayButtons.grid} <FontAwesomeIcon icon={faTh}/></button>
            </Nav.Item>
            <Nav.Item>

                <Form.Group className={'navItem'} >
                    <h6>{labelsTxt.searchSection.label}</h6>
                    <Form.Control onChange={(event)=>filterChange(event.target.value)} type={'text'} placeholder={labelsTxt.searchSection.label}/>

                </Form.Group>

            </Nav.Item>

        </Nav>
    );
}

export default HeaderBar;