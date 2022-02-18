function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    placeholder.setAttribute("src", source);   
}

function countBodyChilderen() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}

//window.onload = countBodyChilderen();