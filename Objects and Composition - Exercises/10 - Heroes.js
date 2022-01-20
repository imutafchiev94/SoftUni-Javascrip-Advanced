function solve() {
    let create = {
        mage(name) {
            
            let hero = {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }

            return hero;
        },

        fighter(name) {
            let hero = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }

            return hero;
        },
    }

    return create;
}