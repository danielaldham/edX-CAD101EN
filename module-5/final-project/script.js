function addRec() {
    let rec = document.getElementById("new-rec");
    if (rec.value != null && rec.value.trim() != "") {
        console.log("New rec added");
        showPopup(true)
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = '"' + rec.value + '"';
        document.getElementById("all-recommendations").appendChild(element);

        rec.value = ""
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible';
    } else {
        document.getElementById('popup').style.visibility = 'hidden';
    }
}