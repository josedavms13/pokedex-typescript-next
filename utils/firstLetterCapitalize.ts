

export function firstLetterCapitalize (input:string):string{

    const trimmedInput = input.trim();
    if(trimmedInput.includes(' ')){

        const splitString = trimmedInput.split(' ');


        return (splitString.map((word:string)=>{
            return word[0].toUpperCase() + word.slice(1, word.length);
        })).join(' ')

    }else {

        return trimmedInput[0].toUpperCase() + trimmedInput.slice(1, trimmedInput.length)
    }

}


