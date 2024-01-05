// function to shuffle the array
export function shuffle(arr){
    const shuffledArray = arr.slice();

    for(let i=0; i<shuffledArray.length-1; i++){
        const rand = Math.random()
        const j = Math.floor(rand*(i+1));
        console.log(j, rand, i+1, shuffledArray[i], shuffledArray[j]);
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
        console.log(shuffledArray)
    }
return shuffledArray;
}
