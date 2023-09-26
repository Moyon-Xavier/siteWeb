function getAge() { 
    const birthDate = new Date("2003-12-26");
    var diff = Date.now() - birthDate.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}

document.getElementById("calcAge").innerHTML = "Age : <strong>"  + getAge() +"</strong>" ;


