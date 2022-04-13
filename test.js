let arr = [-1, 3, 5, -10, 100];
        let arrReverse = []
        // for(let i= arr.length-1; i>=0; i--){
        //     arrReverse.push(arr[i]);
        // }
        // console.log(arrReverse);
        // cách 2
        // console.log(arr);
        // for(let i = 0; i< 5; i++){
        //     let a = arr.shift();
        //     console.log("A "+a);
        //     arrReverse.unshift(a);
        // }
        // console.log(arrReverse);
        //cách 3
        let arrElement = []
        for(let i= arr.length -1 ; i>=0; i--){
            let a  = arrElement.push(i)
           b = arrReverse.concat(arrElement);
        }
        console.log(a);