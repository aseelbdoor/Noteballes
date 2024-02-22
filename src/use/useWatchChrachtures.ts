import { watch } from 'vue';

export function useWatchCharacters(valueToWatch: Object) :any {
    watch(valueToWatch, (newValue: any) => {
        if (newValue.toUpperCase() === 'YES') { // invoke toUpperCase and use strict equality operator
           alert("Thank you you are great @.@")
        }
        else if(newValue.toUpperCase() === 'NO'){
            alert("what do you mean with no????")
        }
    });
}