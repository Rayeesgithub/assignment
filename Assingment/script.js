 
 
 const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

 const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitButton = form.querySelector('.submit-button');
        const successMessage = document.getElementById('successMessage');



 hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });


         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation functions
        function validateName() {
            const value = nameInput.value.trim();
            const errorMsg = document.getElementById('nameError');
            
            if (value.length < 2) {
                nameInput.classList.add('error');
                errorMsg.classList.add('show');
                return false;
            } else {
                nameInput.classList.remove('error');
                errorMsg.classList.remove('show');
                return true;
            }
        }

        function validateEmail() {
            const value = emailInput.value.trim();
            const errorMsg = document.getElementById('emailError');
            
            if (!emailRegex.test(value)) {
                emailInput.classList.add('error');
                errorMsg.classList.add('show');
                return false;
            } else {
                emailInput.classList.remove('error');
                errorMsg.classList.remove('show');
                return true;
            }
        }

        function validateMessage() {
            const value = messageInput.value.trim();
            const errorMsg = document.getElementById('messageError');
            
            if (value.length < 10) {
                messageInput.classList.add('error');
                errorMsg.classList.add('show');
                return false;
            } else {
                messageInput.classList.remove('error');
                errorMsg.classList.remove('show');
                return true;
            }
        }

        // Real-time validation on blur
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);

        // Clear error on input
        nameInput.addEventListener('input', () => {
            if (nameInput.classList.contains('error')) {
                validateName();
            }
        });

        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('error')) {
                validateEmail();
            }
        });

        messageInput.addEventListener('input', () => {
            if (messageInput.classList.contains('error')) {
                validateMessage();
            }
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isMessageValid) {
                // Simulate form submission
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                setTimeout(() => {
                    form.reset();
                    successMessage.classList.add('show');
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                }, 1500);
            }
        });
