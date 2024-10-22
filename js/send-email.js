document.querySelector(".send-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var gmailURL = "https://mail.google.com/mail/?view=cm&fs=1" +
                   "&to=pramukaangelabdg@gmail.com" +
                   "&su=" + encodeURIComponent(subject) +
                   "&body=" + encodeURIComponent("Kepada, tim dppangelajhs. Pesan ini dikirim oleh " + name + ".\n\n" + message);

    window.open(gmailURL, '_blank');
});
