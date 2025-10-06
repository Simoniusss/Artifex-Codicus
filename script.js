document.querySelectorAll('.btn-get-started').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        document.body.classList.add('hidden');

        setTimeout(function() {
            window.location.href = this.href; // Use the href attribute of the <a> tag
        }.bind(this), 500); // 2000 milliseconds = 2 seconds
    });
});