document.querySelectorAll('.button').forEach(function(e) {
    e.addEventListener('click', function() {
        this.style.backgroundColor = "red";
    })
});
