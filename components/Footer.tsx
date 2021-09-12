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
    });
    useEffect(() => {

        switch (language) {

            case 'english':
                setLabelTxt({
                    ...labelTxt,
                    manualPageSelection:'Type the page you want to visit',
                    button: 'Go'
                })

                break

            case 'spanish':
                setLabelTxt({
                    ...labelTxt,
                    manualPageSelection:'Ingresa el numero de la pagina que quieres visitar',
                    button: 'Ir'
                })

                break


        }

    }, [language]);


    const [userInputPageNumber, setUserInputPageNumber] = useState<number>(0);
    const [disabledContinueButton, setDisabledContinueButton] = useState<boolean>(true);
    useEffect(() => {
        userInputPageNumber > 0? setDisabledContinueButton(false):setDisabledContinueButton(true)
    }, [userInputPageNumber]);

    return (
        <div>
            <div className="voice-controls">
                controls
            </div>
            <div className="pagination">
                <Pagination current={currentPage} total={totalPages} maxWidth={60} onPageChange={(e)=>onPageChange(e)}/>
                <label>{labelTxt.manualPageSelection}</label>
                <input  min={0} max={totalPages} value={userInputPageNumber} onChange={(e)=>setUserInputPageNumber(Number(e.target.value))} placeholder={'type the page you want to visit'} type="number"/>
                <button onClick={()=>{
                    changeToCurrentPage(userInputPageNumber)
                    setUserInputPageNumber(0);

                }} disabled={disabledContinueButton}>{labelTxt.button}</button>
            </div>
        </div>
    );
}

export default Footer;