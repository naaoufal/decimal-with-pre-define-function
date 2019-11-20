function dec(){
    let decimal = document.getElementById("decimal").value;
    var bn = parseFloat(decimal).toString(2);
    document.getElementById("binary").innerHTML = (parseFloat(decimal).toString(2)).substring(0,14);
    document.getElementById("octal").innerHTML = parseFloat(decimal).toString(8).substring(0,14);
    document.getElementById("hexadecimal").innerHTML = parseFloat(decimal).toString(16).substring(0,14);
}
 