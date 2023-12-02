function sendMail() {
    var link = "mailto:trz7one@proton.me"
             + "?cc=trz7one@proton.me"
             + "&subject=" + encodeURIComponent(document.getElementById('input-subjectt').value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}