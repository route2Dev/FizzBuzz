import { Entry } from "@/app/models"
import { atom } from "jotai"

export const getResult = (item: string) => {
    if (item === '' || isNaN(+item)) {
        return 'Invalid Item';
    } 

    const value = +item;
    
    if (value % 3 === 0 && value % 5 === 0) {
         return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return '';
    }
}

export const rawInputAtom = atom('');
export const entriesAtom = atom((get) => {
    const raw = get(rawInputAtom);
    const answer: Entry[] = [];

    if (!raw) {
        return answer;
    }

    const parsed = raw.split(',');

    for (let i = 0; i < parsed.length; i++) {

        const item = parsed[i]
        const result = getResult(item);
        
        answer.push({value: item, result: result});        
    }

    return answer;
})