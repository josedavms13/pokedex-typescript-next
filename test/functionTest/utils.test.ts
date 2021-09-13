import {firstLetterCapitalize} from "../../utils/firstLetterCapitalize";

describe('Utilities functions testing', ()=>{


    describe('First to capitalize', ()=>{

        test('Single words', ()=>{

            expect(firstLetterCapitalize('hola')).toBe('Hola');

        })

        test('Multiple words',()=>{
            expect(firstLetterCapitalize('this is a test')).toBe('This Is A Test');
        })

    })




})