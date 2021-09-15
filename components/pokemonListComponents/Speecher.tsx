import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../customTypes/reduxTypes'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faStop} from '@fortawesome/free-solid-svg-icons'

import {setSpeech} from '../../state'

function Speecher() {

    const speech = useSelector((state: RootState) => state.speech)
    const language = useSelector((state:RootState) => state.language)
    const dispatch = useDispatch();

    const [buttonLabel, setButtonLabel] = useState(faPlay);
    const [currentUtterance, setCurrentUtterance] = useState<any>(null);
    const [canPlay, setCanPlay] = useState<boolean>(true);
    const [volume, setVolume] = useState<number>(0);


    useEffect(()=>{
        if(speech.length > 0){

            setCurrentUtterance(new SpeechSynthesisUtterance(speech));



        }
    },[speech, dispatch])

    useEffect(() => {
        if (currentUtterance && canPlay) {


            switch (language){
                case 'spanish':
                    currentUtterance.lang = 'es-co';
                    speechSynthesis.speak(currentUtterance);
                    break

                case 'english':
                    currentUtterance.lang = 'en-us';
                    speechSynthesis.speak(currentUtterance);

                    break
            }

        }

        setTimeout(()=>{

            dispatch(setSpeech(''));
        },500)
    }, [dispatch, currentUtterance, language, canPlay]);


    useEffect(() => {
        console.log(volume);
        if(currentUtterance){
            currentUtterance.volume = volume
        }
    }, [currentUtterance, volume]);

    useEffect(() => {
        if(canPlay){
            setButtonLabel(faStop)
        }else{
            setButtonLabel(faPlay)
        }
    }, [canPlay]);



    return (
        <div>
            <input  min={0} max={10} defaultValue={5} onChange={(e)=>setVolume(Number(e.target.value)/10)} type="range"/>
            <button onClick={()=>setCanPlay(!canPlay)}><FontAwesomeIcon icon={buttonLabel} /></button>
        </div>
    );
}

export default Speecher;