document.addEventListener('DOMContentLoaded', function() {
    const accordionTitles = document.querySelectorAll('.accordion-title');
    
    accordionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Toggle content display
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });
});


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('navbarNav').classList.toggle('active');
  });
  
  var accordionTitles = document.querySelectorAll('.accordion-title');
  accordionTitles.forEach(function(title) {
    title.addEventListener('click', function() {
      var content = this.nextElementSibling;
      content.classList.toggle('active');
    });
  });
  
