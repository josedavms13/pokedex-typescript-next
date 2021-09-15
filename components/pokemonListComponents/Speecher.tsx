import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from '../../customTypes/reduxTypes'


function Speecher() {

    const speech = useSelector((state: RootState) => state.speech)

    const [currentUtterance, setCurrentUtterance] = useState<any>(null);
    const [volume, setVolume] = useState<number>(0);
    useEffect(()=>{
        if(speech.length > 0){

            setCurrentUtterance(new SpeechSynthesisUtterance(speech));




        }
    },[speech])

    useEffect(() => {
        console.log(volume);
    }, [volume]);



    const utterance = new SpeechSynthesisUtterance()

    function playText(text:string):void{



    }


    return (
        <div>
            <input  min={0} max={10} defaultValue={0.5} onChange={(e)=>setVolume(Number(e.target.value)/10)} type="range"/>
            <button>Mute</button>
        </div>
    );
}

export default Speecher;