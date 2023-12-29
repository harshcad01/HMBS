document.getElementById("fnamed").innerHTML=document.getElementById("fname").value;
document.getElementById("lnamed").innerHTML=document.getElementById("lname").value;
document.getElementById("emaild").innerHTML=document.getElementById("email").value;




function assign(){
    var a=10;
    var b=20;
    console.log("value of A is.. " + a);
    console.log("value of b is.. " + b);
    console.log("addition");
    c = a+b;  
    console.log("added value is.. A + B = "+c);
    console.log("subtraction");
    c=a-b;
    console.log("subtracted value is.. A - B = "+c);
    console.log("multiplication");
    c=a*b;
    console.log("multiplied value is.. A * B = "+c);
    console.log("divition");
    c=a/b;
    console.log("divided value is.. A / B = "+c);
    console.log("modulus");
    c=a%b;
    console.log("the remainder of the division is.. A % B = "+c);
    console.log("exponentiation");
    c=a**b;
    console.log("exponentiation is.. A ** B = "+c);
    console.log("increment");
    d=++a;
    console.log("incrementing value of A by 1 gives us.. A++ = "+d);
    console.log("decrement");
    c=--a;
    console.log("Decrementing value of A by 1 gives us.. A-- = "+c);
    console.log("assign add");
    c+=a;
    console.log("Add and Assign c + = a.. "+c);
    console.log("assign sub");
    c-=a;
    console.log("sub and assign c - = a.. "+c);
    console.log("assign mul");
    c*=a;
    console.log("sub and assign c * = a.. "+c);
    console.log("assign sub");
    c/=a;
    console.log("sub and assign c / = a.. "+c);
    console.log("assign modulo");
    c%=a;
    console.log("sub and assign c % = a.. "+c);

}

function obj(){
    let car={
        type : 'car',
        brand: 'Toyota',
        model:'Camry',
        year:2019,
        color:'Red'
    };
    console.log(car);

    
    if(car.brand=="Toyota")
    {
        console.log("yes it's brand is "+ car.brand);
    }
    else if(car.model=="Camry")
    {
        console.log("yes it's " + car.model);
    }
    else
    {
        console.log("No match found!");
    }
}
assign();
obj();