function solve() {
    let list = [];
    let obj =  {
        add,
        remove,
        get,
        size: 0
    }

    function add(el) {
       list.push(el);
       obj.size++;
       return sorting(list);
    }

    function remove(index) {
        if(index >= 0 && index < list.length) {
            obj.size--;
            return list.splice(index, 1);
        }
    }
    
    function get(index) {
        if(index >= 0 && index < list.length) {
            return list[index];
        }
    }

    function sorting(list) {
        return list.sort((a,b) => a - b);
    }

    return obj;
}  

result = solve();
    var myList = result;

    myList.add(5);
    //expect(myList.get(0)).to.equal(5, "Element wasn't added");

    myList.add(3);
   // expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

    myList.remove(0);

    console.log(myList.size);
    //expect(myList.get(0)).to.equal(5, "Element wasn't removed");
    //expect(myList.size).to.equal(1, "Element wasn't removed");