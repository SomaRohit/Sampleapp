function outer (){
    var x=10;
    function inner(){
        var x=20;
        console.log(x);
    }
    inner();



}
outer();
console.log(x);