var assert = require('assert');

describe('JS Basics', function () {
    describe('Numbers', function () {
        it('should be able define variables and add them', function () {
            var y = 1;
            var x = 1;
            assert.equal(x + y, 2);
        });

        it('should be able to divide and multiply number', function () {
            var a = 42;
            var b = 2;
            if(b === 0){
                throw new Error('Division by 0 is not allowed')
            }

            // change first parameter to expected number
            assert.equal(21, a / b);
            assert.equal(84, a * b);
        });

        it('should be able to round numbers', function () {
            var a = 42.94;
            var a = Math.floor(a);

            // do something to round the number
            assert.equal(a, 42);
        });

        it('should be able to find sin^2(x) * cos^2(x)', function () {
            var a = 42;
            var x = Math.random();
            a = Math.pow(Math.sin(x), 2) + Math.pow(Math.cos(x), 2);

            // instead of a write equasion sin^2(x) * cos^2(x)
            assert.equal(a, 1);
        });
    });

    describe('Objects', function () {
        it('should be find object value by key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 };
            
            obj = obj.a.b.d.valueOf();

            // find key by dot obj.<put relevant keys here>
            assert.equal(obj, "foo");
        });

        it('should be find object value by dynamic key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 }
            assert.equal(obj["c"], 42);
        });

        it('should be parse object from json', function () {
            // var json = '{ "ok": true, "metadata": { "date_start": "1533108640" }}'
            var json = '{"ok":true, "metadata": {"date_start": 1533108640}}';
            var temp = JSON.parse(json);
            dateStart = temp.metadata.date_start;
           
            // see JSON.parse function, use it and find key date_start
            assert.equal(dateStart, 1533108640);
        });

        it('should be set objet key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 }

            obj.a.b = "Js Rocks!";
            // set instead as value to key b new value to make test pass
            assert.equal(obj.a.b, "Js Rocks!")
        });
    });


    describe('Arrays', function () {
        it('should be access array by index', function () {
            var arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

            // select correct index
            assert.equal(arrray[4], 5);
        });

        it('should to push and pop from array', function () {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            array.push(Math.random());
            // read about push method on array
            assert.equal(array.length, 10);
        });

        it('should be able to sort array', function () {
            var arr = [23, 23, 4, 5, 123, 7, 32, 13, 13, 9]

            arr.sort(function(a, b) {return a-b});
            // read about .sort function
            assert.deepEqual(arr, [4, 5, 7, 9, 13, 13, 23, 23, 32, 123]);
        });
    });

    describe('Functions', function () {
        it('should define function that returns number 1', function () {
            function test (){
                return 1;
            }

            assert.equal(test(), 1);
        });

        it('should assign function to another variable', function () {
            function square(x) { return x * x }

            var sq = square;

            // make this line work
            assert.equal(sq(4), 16);
        });

        it('should implement function currying ', function () {
            function add(a){
                return function(b){
                    return a + b;
                };
            }

            assert.equal(add(4)(4), 8);
        });
    });
});