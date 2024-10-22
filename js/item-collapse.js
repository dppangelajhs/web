var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        for (var j = 0; j < coll.length; j++) {
            var content = coll[j].nextElementSibling;
            if (coll[j] !== this) { 
                coll[j].classList.remove("collapsible-active");
                content.style.maxHeight = null; 
            }
        }

        this.classList.toggle("collapsible-active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; 
        }
    });
}
