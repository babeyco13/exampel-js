
var a = Number(prompt("A="));
var b = Number(prompt("B="));
var c = Number(prompt("C="));
if (a == 0){
    document.write('a=0');
}
else{
    var result = equation(a, b, c);
    document.write(result);
}


function equation(a, b, c){
   var d =  (b^2 - 4 * a * c);
   var result;
   
    if (d < 0){
        result = "d<0";
    }

    if (d > 0){
        var x1 = (- b - Math.sqrt(d)) / (2 * a)
        result = "x1 =" + x1
        var x2 = (-b + Math.sqrt(d)) / (2 * a)
         result += "x2 =" + x2}
    
    if (d == 0){
        var x_root1 = (-(b * b) / (2 * a))
        result = "x_1 =" + x_1
        }    
    return result;
    
    }
    
    
    
   
    