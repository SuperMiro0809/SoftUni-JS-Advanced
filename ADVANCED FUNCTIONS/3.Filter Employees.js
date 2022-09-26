function solve(data, criteria) {
    let [prop, val] = criteria.split("-");
    let dataArr = JSON.parse(data);
    let i = -1;

    for(let obj of dataArr) {
        if(obj.hasOwnProperty(prop) && obj[prop] === val) {
            i += 1;
            console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        }else if(prop === 'all') {
            i += 1;
            console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)