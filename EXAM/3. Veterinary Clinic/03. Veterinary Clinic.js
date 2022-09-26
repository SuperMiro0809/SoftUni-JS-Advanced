class VeterinaryClinic {
    constructor (clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
        this.pets = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        let hasName = false;
        let index = 0;
        let hasPet = false;

        this.clients.forEach((cl, i) => {
            if(cl.hasOwnProperty(ownerName)) {
                hasName = true;
                index = i;
                cl[ownerName].forEach(pet => {
                    if(pet.petName === petName && pet.procedures.length > 0) {
                        throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
                    }else if(pet.petName === petName && pet.procedures.length === 0) {
                        hasPet = true;
                        procedures.forEach(proc => {
                            pet.procedures.push(proc);
                        });
                        this.currentWorkload += 1;
                    }
                })
            }
        });

        if(this.pets === this.capacity && hasPet === false) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        if(hasName && hasPet === false) {
            let petObj = {
                petName: petName,
                kind: kind,
                procedures: []
            }

            procedures.forEach(p => {
                petObj.procedures.push(p);
            });

            this.currentWorkload += 1;
            this.pets += 1;
            this.clients[index][ownerName].push(petObj);
        }else if(!hasName){
            let obj = {};
            obj[ownerName] = [];
            let petObj = {
                petName: petName,
                kind: kind,
                procedures: []
            }
            

            procedures.forEach(p => {
                petObj.procedures.push(p);
            });

            this.currentWorkload += 1;
            obj[ownerName].push(petObj);
            this.pets += 1;
            this.clients.push(obj);
        }

        return `Welcome ${petName}!`;
    }

    onLeaving (ownerName, petName) {
        let hasClient = false;
        let isReg = false;
        let index = 0;
        let currPet = null;
        let petIndex = 0;

        this.clients.forEach((cl, i) => {
            if(cl.hasOwnProperty(ownerName)) {
                hasClient = true;
                index = i;
                cl[ownerName].forEach((pet,index) => {
                    if(pet.petName === petName) {
                        isReg = true;
                        currPet = pet;
                        petIndex = index; 
                        // if(pet.procedures.length === 0) {
                        //     throw new Error(`Sorry, there are no procedures for ${petName}!`);
                        // }
                    }
                })
            }
        });

        if(isReg === false || (isReg === true && currPet.procedures.length === 0)) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        if(hasClient === false) {
            throw new Error('Sorry, there is no such client!');
        }

        let length = currPet.procedures.length;
        this.currentWorkload -= 1;
        this.clients[index][ownerName][petIndex].procedures = [];
        this.totalProfit += 500 * length;

        return `Goodbye ${petName}. Stay safe!`;

    }

    toString () {
        // let br = 0;
        // this.clients.forEach(cl => {
        //     let name = Object.keys(cl)[0];
        //     cl[name].forEach(pet => {
        //         if(pet.procedures.length > 0) {
        //             br++;
        //         }
        //     })
        // });

        let percenteg = Math.round(this.currentWorkload / this.capacity * 100);
        
        let str = `${this.clinicName} is ${percenteg}% busy today!\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        this.clients.sort((a,b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
        this.clients.forEach(cl => {
            let name = Object.keys(cl)[0];
            str += `\n${name} with:`
            cl[name].sort((p1,p2) => p1.petName.localeCompare(p2.petName));
            cl[name].forEach(pet => {
                str += `\n---${pet.petName} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}`;
            })
        })
        return str;
    }


}


let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'T', 'Cat', ['s']));
console.log(clinic.onLeaving('Jim Jones', 'T')); 
console.log(clinic.onLeaving('Jim Jones', 'T'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());



