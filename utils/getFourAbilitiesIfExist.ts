


function getFourAbilitiesIfExist(abilitiesArray :any[]):string[]{

    const resultingArray : string[] = [];

    for (let i = 0; i < 4; i++) {
        if(!abilitiesArray[i]){
            return resultingArray
        }else {
            resultingArray.push(abilitiesArray[i].move.name)
        }

    }

    return resultingArray
}

export default getFourAbilitiesIfExist