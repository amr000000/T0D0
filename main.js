
function newElement() {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(checkbox);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
    checkbox.onclick = function () {
        li.classList.toggle('checked');
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'INPUT' && ev.target.type === 'checkbox') {
        ev.target.parentElement.classList.toggle('checked');
    }
}, false);