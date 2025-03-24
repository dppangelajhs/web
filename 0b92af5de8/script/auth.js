function checkAuthSession() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionID = urlParams.get('sessionID');

    if (sessionID === '0b92af5de8') {
        alert("Logged in as System32Player10. Press 'OK' to continue.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkAuthSession();
});