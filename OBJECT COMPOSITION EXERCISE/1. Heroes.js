function solve() {
    function mage(name) {
        let obj = {
            name: name,
            health: 100,
            mana: 100,
            cast: (spellName) => {
                obj.mana -= 1;
                console.log(`${obj.name} cast ${spellName}`)
            }
        }
        return obj;
    }

    function fighter(name) {
        let obj = {
            name: name,
            health: 100,
            stamina: 100,
            fight: () => {
                obj.stamina -= 1;
                console.log(`${obj.name} slashes at the foe!`);
            }
        }

        return obj;
    }

    return {
        mage,
        fighter
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);

