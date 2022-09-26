function solve() {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        static distance(p1, p2) {
            return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
        }
    }
    let p1 = new Point(5, 5);
    let p2 = new Point(9, 8);
    console.log(Point.distance(p1, p2));

    // let p1 = new result(5, 5);
    // let p2 = new result(10, 10);
    // console.log(result.distance(p1, p2))
    //.toFixed(2)).to.equal('7.07', "Distance isn't correct.");

    // let p3 = new result(5, 0);
    // let p4 = new result(10, 0);
    // console.log((result.distance(p3, p4)))
    //.to.equal(5, "Distance isn't correct.");

}

solve()