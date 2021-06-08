var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {
    if(content.className == "open") {
        //to shrink
        content.className = "";
        button.innerHTML = "Show More";
    }
    else {
        //to expand
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};