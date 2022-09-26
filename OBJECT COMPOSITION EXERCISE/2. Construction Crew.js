function solve(obj) {
    if(obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
        return obj;
    }else {
        return obj;
    }
}

let res = solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: false }
  );

  console.log(res);