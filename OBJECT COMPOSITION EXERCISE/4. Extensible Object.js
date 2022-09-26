function solve() {
    const proto = {};

    const instance = Object.create(proto); //създава нов обект чиито прототип сочи към обекта който сме подали, т.е proto
    instance.extend = function (template) {
        for(let prop in template) {
            if(typeof template[prop] === 'function') {
                proto[prop] = template[prop];
            }else {
                instance[prop] = template[prop];
            }
        }
    }

    return instance;
}

const res = solve();
res.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
  }
  )
  console.log(res);