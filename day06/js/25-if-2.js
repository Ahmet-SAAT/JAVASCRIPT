let a = 10; //t
a = null; //f
a = " "; //t
a = undefined; //f
a = 0; //f
a = NaN; //f
a = {}; //t
a = []; //t
a = Infinity; //t
if (a) {
    console.log(`${a} is a truthy value`)
}