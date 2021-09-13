import React, {useEffect, useState} from 'react';
import Pagination from 'react-responsive-pagination'
import {useSelector} from "react-redux";
import {RootState} from '../customTypes/reduxTypes'


// @ts-ignore
function Footer({currentPage, totalPages, onPageChange, changeToCurrentPage}) {

    const language = useSelector((state: RootState)=> state.language)


    const [labelTxt, setLabelTxt] = useState({
        manualPageSelection: 'Type the page you want to visit',
        button: 'go',
        buttonPlaceholder: 'Page number...'
    });
    useEffect(() => {

        switch (language) {

            case 'english':
                setLabelTxt({
                    ...labelTxt,
                    manualPageSelection:'Type the page you want to visit',
                    button: 'Go',
                    buttonPlaceholder: 'Page number...'
                })

                break

            case 'spanish':
                setLabelTxt({
                    ...labelTxt,
                    manualPageSelection:'Ingresa el numero de la pagina que quieres visitar',
                    button: 'Ir',
                    buttonPlaceholder: 'Numero de página...'
                })

                break


        }

    }, [language]);


    const [userInputPageNumber, setUserInputPageNumber] = useState<string>('');
    const [disabledContinueButton, setDisabledContinueButton] = useState<boolean>(true);
    useEffect(() => {
        userInputPageNumber.length > 0? setDisabledContinueButton(false):setDisabledContinueButton(true)
    }, [userInputPageNumber]);

    return (
        <div>
            <div className="voice-controls">
                controls
            </div>
            <div className="pagination">
                <Pagination current={currentPage} total={totalPages} maxWidth={60} onPageChange={(e)=>onPageChange(e)}/>
                <label>{labelTxt.manualPageSelection}</label>
                <input  min={0} max={totalPages} value={userInputPageNumber} onChange={(e)=>setUserInputPageNumber(e.target.value)} placeholder={labelTxt.buttonPlaceholder} type="number"/>
                <button onClick={()=>{
                    changeToCurrentPage(Number(userInputPageNumber))
                    setUserInputPageNumber('');

                }} disabled={disabledContinueButton}>{labelTxt.button}</button>
            </div>
        </div>
    );
}

export default Footer;