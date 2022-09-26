function solve(strArr) {
    const arr = JSON.parse(strArr);

    let resObj = {};
    
    function objFactory(objArr) {
       resObj[objArr[0]] = objArr[1];
    }
    for(let i = 0; i < arr.length; i++) {
        let el = Object.entries(arr[i]);

        el.forEach(element => {
            objFactory(element)
        });
    }

    return resObj;
}

solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);