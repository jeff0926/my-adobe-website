document.addEventListener("DOMContentLoaded", function() {
    var accButtons = document.querySelectorAll('.product-tourz > div > div:first-child');

    accButtons.forEach(function(btn) {
        btn.classList.add('accordion-button');
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

