function chooseRandomNumber(arr:Number[]):Number {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex] ;
}

export{chooseRandomNumber}