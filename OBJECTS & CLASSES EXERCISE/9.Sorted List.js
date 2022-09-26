function solve() {

    class List {
        constructor() {
            this._list = [];
            this.size = 0;
        }
        add(el) {
            this._list.push(el);
            this.size = this._list.length;
            this._list.sort((a,b) => a - b);
        }

        remove(index) {
            if(index >= 0 && index < this._list.length) {
                this._list.splice(index,1);
                this.size = this._list.length;
            }else {
                throw new Error('Index is out of bounds');
            }
        }

        get(index) {
            if(index >= 0 && index < this._list.length) {
                return this._list[index];
            }else {
                throw new Error('Index is out of bounds');
            }
        }

    }

    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1)); 
    list.remove(1);
    console.log(list.get(1));

}

solve();