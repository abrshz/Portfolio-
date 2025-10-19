
        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme preference or default to light
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        // Apply the saved theme on page load
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        }
        
        // Toggle theme function
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Form Validation
        const contactForm = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const successMessage = document.getElementById('successMessage');
        
        // Error elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validate form on submit
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Reset error messages
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            subjectError.style.display = 'none';
            messageError.style.display = 'none';
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Validate subject
            if (subjectInput.value.trim() === '') {
                subjectError.style.display = 'block';
                isValid = false;
            }
            
            // Validate message
            if (messageInput.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, show success message and reset form
            if (isValid) {
                successMessage.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });

        // Animated Skill Bars on Scroll
        const skillLevels = document.querySelectorAll('.skill-level');
        
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Function to animate skill bars
        function animateSkillBars() {
            skillLevels.forEach(skill => {
                if (isInViewport(skill) && !skill.classList.contains('animated')) {
                    const width = skill.getAttribute('data-width');
                    skill.style.width = width;
                    skill.classList.add('animated');
                }
            });
        }
        
        // Animate skill bars on page load and scroll
        window.addEventListener('load', animateSkillBars);
        window.addEventListener('scroll', animateSkillBars);
        
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
