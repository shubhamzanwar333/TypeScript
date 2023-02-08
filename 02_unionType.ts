var sn: string | number;

sn = 'codemind';
sn = 100; 

type test = string | number | number[] | string[]  //type annotation with union
function formatCommandLine(input: test) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}


console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
console.log(formatCommandLine(123457));






// class parameter property

class Person1 {
    // public fname: string;       
    // public age: number;

    // parameterised constructor .
    constructor(public fname: string, public age: number) {    //classParameterProperty
        // this.fname = fname;
        // this.age = age;
    }
}

const jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);