var arr = [1, 2, 3];

arr[0] = 4;
arr[1] = "5";

console.log(arr);

var arr2 = [
    1,
    false,
    {
        name: "Tony",
        address: "111 Main St."
    },
    function(name) {
        var greeting = 'Hello, ';
        console.log(greeting + name + " in " + this);
    }
];

console.log(arr2);
arr2[3](arr2[2].name);
console.log(arr2[5]);