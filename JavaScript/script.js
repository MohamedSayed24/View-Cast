function active() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var sections = document.querySelectorAll('section[id]');
    
    // Click handler
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Scroll handler
    window.addEventListener('scroll', function() {
        var scrollPos = window.scrollY + 100;
        var activeSection = null;
        
        // Find current section
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            
            if(scrollPos >= top && scrollPos < bottom) {
                activeSection = section.id;
            }
        });
        
        // Clear all active states
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        
        // Set active based on section
        var activeLink = null;
        
        switch(activeSection) {
            case 'home':
                activeLink = document.querySelector('.navbar-nav .nav-link[href="#"]');
                break;
            case 'series':
                activeLink = document.querySelector('.navbar-nav .nav-link[href="#series"]');
                break;
            case 'anime':
                activeLink = document.querySelector('.navbar-nav .nav-link[href="#anime"]');
                break;
            case 'pricing':
                activeLink = document.querySelector('.navbar-nav .nav-link[href="#pricing"]');
                break;
            case 'footer':
                activeLink = document.querySelector('.navbar-nav .nav-link[href="#footer"]');
                break;
        }
        
        if(activeLink) {
            activeLink.classList.add('active');
        }
    });
}

active();


// validation form 
function validate(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();


  if (email === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address (must include "@").');
    emailInput.focus();
    return false;
  }

  if (password === '') {
    alert('Please enter a password.');
    passwordInput.focus();
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    passwordInput.focus();
    return false;
  }
 
 
  return true;
}

const form = document.querySelector('form');
form.addEventListener('submit', validate);


