document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      alert(`Thank you, ${name}. We have received your message and will contact you at ${email}.`);
    });
  });
 



document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.about-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const universityCards = document.querySelectorAll('.university-card');
  
  universityCards.forEach(card => {
    card.addEventListener('click', function() {
      const universityName = this.querySelector('h3').textContent;
      
      if (universityName === 'University of Oxford') {
        window.location.href = 'https://www.ox.ac.uk/';
      } else if (universityName === 'University of Cambridge') {
        window.location.href = 'https://www.cam.ac.uk/';
      }
      // Add more conditions for other universities
    });
  });
});


$(document).ready(function() {
  $(".testimonial-container").hover(
    function() {
      $(this).css("animation-play-state", "paused");
    },
    function() {
      $(this).css("animation-play-state", "running");
    }
  );
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
  });
});
