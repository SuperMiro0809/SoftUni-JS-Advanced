(function () {
    String.prototype.ensureStart = function (str) {
        if(this.startsWith(str) === false) {     //this е самия стринг
            return str + this;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if(this.endsWith(str) === false){
            return this + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if(this.length > 0) {
            return false;
        }else {
            return true;
        }
    }

    String.prototype.truncate = function (n) {
        if(this.length <= n) {
            return this.toString();
        }
        if(n < 4) {
            return '.'.repeat(n);
        }
        let spaceIndex = this.substring(0, n - 1).lastIndexOf(' ');
        if(spaceIndex >= 0) {
            return this.substring(0, spaceIndex) + '...';
        }else {
            return this.substring(0, n - 3) + '...';
        }
    }

    String.format = function (string, ...params) {
        params.forEach((el, index) => {
            string = string.replace(`{${index}}`, el);
        });

        return string;
    }

    // let str = 'my string';
    // str = str.ensureStart('my');
    // str = str.ensureStart('hello ');
    // str = str.truncate(16);
    // str = str.truncate(10);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);
    // str = String.format('The {0} {1} fox',
    // 'quick', 'brown');
    // str = String.format('jumps {0} {1}',
    // 'dog');

    let testString = 'the quick brown fox jumps over the lazy dog';
// expect(testString.truncate(10)).to.equal('the...', 'Incorrect truncate() functionality 1');
// expect(testString.truncate(25)).to.equal('the quick brown fox...', 'Incorrect truncate() functionality 2');
testString.truncate(43);
//).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 3');
// expect(testString.truncate(45)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 4');

})();


