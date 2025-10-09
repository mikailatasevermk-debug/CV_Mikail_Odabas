// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Animate language bars when they come into view
    function animateLanguageBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const languageBars = entry.target.querySelectorAll('.language-bar');
                    languageBars.forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        setTimeout(() => {
                            bar.style.width = level + '%';
                        }, 300);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const languagesSection = document.querySelector('.languages-section');
        if (languagesSection) {
            observer.observe(languagesSection);
        }
    }

    // Add smooth scroll animation for sections
    function addScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Add animation to sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    // Add stagger animation for timeline items
    function addTimelineAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const timelineItems = timeline.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            observer.observe(timeline);
        }
    }

    // Add hover effect for skill tags
    function addSkillTagInteractions() {
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Add click to call/email functionality
    function addContactInteractions() {
        const phoneElement = document.querySelector('.contact-item:first-child span');
        const emailElement = document.querySelector('.contact-item:nth-child(2) span');
        
        if (phoneElement) {
            phoneElement.style.cursor = 'pointer';
            phoneElement.addEventListener('click', function() {
                window.open('tel:' + this.textContent.replace(/\s/g, ''));
            });
        }
        
        if (emailElement) {
            emailElement.style.cursor = 'pointer';
            emailElement.addEventListener('click', function() {
                window.open('mailto:' + this.textContent);
            });
        }
    }

    // Add parallax effect to profile image on scroll
    function addParallaxEffect() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                profileImage.style.transform = `translateY(${rate}px)`;
            });
        }
    }

    // Add typing effect for name
    function addTypingEffect() {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            const text = nameElement.textContent;
            nameElement.textContent = '';
            nameElement.style.borderRight = '2px solid #E53E3E';
            nameElement.style.animation = 'blink 1s infinite';
            
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    nameElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        nameElement.style.borderRight = 'none';
                        nameElement.style.animation = 'none';
                    }, 1000);
                }
            }
            
            // Start typing after a short delay
            setTimeout(typeWriter, 500);
        }
    }

    // Add CSS for typing animation
    function addTypingAnimationCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0%, 50% { border-color: #E53E3E; }
                51%, 100% { border-color: transparent; }
            }
            
            .fade-in {
                animation: fadeIn 0.6s ease-in;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .skill-tag {
                cursor: pointer;
            }
            
            .contact-item span:hover {
                color: #E53E3E;
            }
            
            .timeline-item {
                cursor: pointer;
            }
            
            .project-card {
                cursor: pointer;
            }
            
            .education-item {
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }

    // Add print functionality
    function addPrintFunctionality() {
        // Create print button
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i> Print CV';
        printButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #5dade2;
            color: white;
            border: none;
            padding: 12px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-family: Inter, sans-serif;
            font-weight: 500;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.2s ease;
        `;

        printButton.addEventListener('mouseenter', function() {
            this.style.background = '#48a0d8';
            this.style.transform = 'translateY(-1px)';
        });

        printButton.addEventListener('mouseleave', function() {
            this.style.background = '#5dade2';
            this.style.transform = 'translateY(0)';
        });
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
        
        // Hide print button on mobile
        if (window.innerWidth < 768) {
            printButton.style.display = 'none';
        }
    }

    // Add smooth scrolling for better UX
    function addSmoothScrolling() {
        // Add smooth scrolling to any internal links if they exist
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Add loading animation
    function addLoadingAnimation() {
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // Animate in after a brief moment
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    // Day in the Life Interactive Timeline
    function addDayTimelineInteractivity() {
        const timelineButtons = document.querySelectorAll('.timeline-btn');
        const dayPeriods = document.querySelectorAll('.day-period');
        
        timelineButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTime = this.getAttribute('data-time');
                
                // Remove active class from all buttons and periods
                timelineButtons.forEach(btn => btn.classList.remove('active'));
                dayPeriods.forEach(period => period.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding period with animation
                const targetPeriod = document.querySelector(`[data-period="${targetTime}"]`);
                if (targetPeriod) {
                    targetPeriod.classList.add('active');
                    
                    // Reset activity card animations
                    const activityCards = targetPeriod.querySelectorAll('.activity-card');
                    activityCards.forEach((card, index) => {
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = `cardFadeIn 0.6s ease-out forwards ${index * 0.2}s`;
                        }, 50);
                    });
                }
            });
        });
        
        // Auto-advance timeline every 10 seconds
        let currentIndex = 0;
        const autoAdvance = setInterval(() => {
            if (document.querySelector('.day-in-life-section:hover')) {
                return; // Don't auto-advance if user is hovering
            }
            
            currentIndex = (currentIndex + 1) % timelineButtons.length;
            timelineButtons[currentIndex].click();
        }, 8000);
        
        // Pause auto-advance on hover
        const daySection = document.querySelector('.day-in-life-section');
        if (daySection) {
            daySection.addEventListener('mouseenter', () => {
                clearInterval(autoAdvance);
            });
        }
    }
    
    // Add reference form functionality
    function addReferenceFormHandler() {
        const referenceForm = document.getElementById('referenceForm');
        const referencesList = document.getElementById('references-list');
        
        if (referenceForm) {
            referenceForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const referenceData = {
                    name: formData.get('name'),
                    position: formData.get('position'),
                    email: formData.get('email'),
                    period: formData.get('period'),
                    relation: formData.get('relation'),
                    testimonial: formData.get('testimonial'),
                    rating: formData.get('rating') || 5,
                    date: new Date().toLocaleDateString('nl-NL')
                };
                
                // Create reference card
                const referenceCard = createReferenceCard(referenceData);
                
                // Add to references list
                const placeholder = referencesList.querySelector('.reference-placeholder');
                if (placeholder) {
                    placeholder.remove();
                }
                
                referencesList.insertAdjacentHTML('afterbegin', referenceCard);
                
                // Reset form
                this.reset();
                
                // Show success message
                showSuccessMessage('Bedankt voor je aanbeveling! Deze wordt nu getoond in de referenties sectie.');
                
                // Scroll to references
                document.getElementById('references-list').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
    }
    
    function createReferenceCard(data) {
        const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
        const relationText = {
            'direct-colleague': 'Directe collega',
            'supervisor': 'Leidinggevende', 
            'subordinate': 'Medewerker',
            'client': 'Klant/Opdrachtgever',
            'supplier': 'Leverancier/Partner',
            'project-partner': 'Projectpartner',
            'other': 'Anders'
        };
        
        return `
            <div class="reference-card animate-in">
                <div class="reference-header">
                    <div class="reference-author">
                        <h4>${data.name}</h4>
                        <p>${data.position}</p>
                        <small>${relationText[data.relation] || data.relation} ${data.period ? `• ${data.period}` : ''}</small>
                    </div>
                    <div class="reference-rating">${stars}</div>
                </div>
                <div class="reference-text">
                    "${data.testimonial}"
                </div>
                <div class="reference-meta">
                    Toegevoegd op ${data.date}
                </div>
            </div>
        `;
    }
    
    function showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(34, 197, 94, 0.3);
            z-index: 1000;
            animation: slideInFromRight 0.5s ease-out;
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.style.animation = 'slideOutToRight 0.5s ease-out forwards';
            setTimeout(() => successDiv.remove(), 500);
        }, 4000);
    }
    
    // Add activity card hover effects with sound simulation
    function addActivityCardInteractions() {
        const activityCards = document.querySelectorAll('.activity-card');
        
        activityCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.activity-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 12px 32px rgba(229, 62, 62, 0.4)';
                
                // Add subtle animation to the specific icon type
                const coffeeIcon = this.querySelector('.coffee-steam');
                const emailIcon = this.querySelector('.email-pulse');
                const priorityIcon = this.querySelector('.priority-sort');
                
                if (coffeeIcon) {
                    coffeeIcon.style.animation = 'none';
                    setTimeout(() => {
                        coffeeIcon.style.animation = '';
                    }, 50);
                }
                
                if (emailIcon) {
                    const dot = emailIcon.querySelector('.notification-dot');
                    if (dot) {
                        dot.style.animation = 'emailPulse 0.5s ease-in-out 3';
                    }
                }
                
                if (priorityIcon) {
                    const bars = priorityIcon.querySelectorAll('.bar');
                    bars.forEach((bar, index) => {
                        bar.style.animation = `barGrow 1s ease-in-out ${index * 0.1}s`;
                    });
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.activity-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '';
            });
        });
    }
    
    // Initialize all interactions
    function init() {
        addTypingAnimationCSS();
        addLoadingAnimation();
        addTypingEffect();
        animateLanguageBars();
        addScrollAnimation();
        addTimelineAnimation();
        addSkillTagInteractions();
        addContactInteractions();
        addParallaxEffect();
        addPrintFunctionality();
        addSmoothScrolling();
        addDayTimelineInteractivity();
        addReferenceFormHandler();
        addActivityCardInteractions();
    }

    // Start the show
    init();

    // Add resize handler for responsive interactions
    window.addEventListener('resize', function() {
        const printButton = document.querySelector('button');
        if (printButton) {
            if (window.innerWidth < 768) {
                printButton.style.display = 'none';
            } else {
                printButton.style.display = 'block';
            }
        }
    });
});