function convertTemp() {
    var c = document.getElementById("c").value;

    var f = (c*9/5)+32;

    document.getElementById("f").value = f;
}

function convertWeight() {
    var kg = document.getElementById("kg").value;

    var lbs = kg*2.2;

    document.getElementById("lbs").value = lbs;
}

function convertDistance() {
    var km = document.getElementById("km").value;

    var m = km * 0.62137;

    document.getElementById("m").value = m;
}