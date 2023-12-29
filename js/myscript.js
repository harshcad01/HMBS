function add(){
    var a=10;
    var b=10;
    if(a==b){
        console.log("it is verified");
    }else{
        console.log("check the password");
    }
}
function sub(){
    let a=10;
    let b= 30;
    let c=a-b;
    let d=a*b;
    console.log("your a value is...." + a);   
    console.log("your b value is...." + b);   
    console.log("sutracted value is..."+ c);
    console.log("multiplied value is..."+ d);

    if(c>a){
        console.log("b is grater");
    }
    else{
        console.log("a is grater");
    }
}

function div(){
    const a=10;   
    const b=50;
    const c=b/a;
    console.log("your a value is...." + a);   
    console.log("your b value is...." + b);   
    console.log("divided value is..."+ c);
}
function all(){
   let a=10;
   var b=20;

    console.log("added value...."+(a+b));
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a**b);
    console.log(b||a);
    console.log(a&b);
    console.log(a==b);
    console.log(a===b);
    console.log(a!==b);
    console.log(a>b);
    console.log(a<b);
    console.log(a>=b);
    console.log(a<=b);
}
add();
sub();
div();
all();
