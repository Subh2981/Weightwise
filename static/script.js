// Function to hide result card and reset form
function hideResult() {
    const resultCard = document.querySelector('.result-card');
    const welcomeMessage = document.querySelector('.welcome-message');
    const container = document.querySelector('.container');
    const form = document.querySelector('.health-form');
    
    if (!resultCard) return;
    
    // Add fade out animation
    resultCard.style.animation = 'fadeOut 0.4s ease-out forwards';
    
    setTimeout(() => {
        // Remove result card
        resultCard.remove();
        
        // Show welcome message again if it doesn't exist
        if (!welcomeMessage) {
            const newWelcome = document.createElement('div');
            newWelcome.className = 'welcome-message';
            newWelcome.innerHTML = `
                <h2>Hello Everyone</h2>
                <p>Fill in your details below to get your personalized health prediction</p>
            `;
            newWelcome.style.animation = 'fadeIn 0.5s ease-out';
            container.insertBefore(newWelcome, form);
        }
        
        // Reset form
        form.reset();
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
}

// Optional: Add form validation feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.health-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;
            const age = document.getElementById('age').value;
            const activity = document.getElementById('activity').value;
            const gender = document.querySelector('input[name="Gender"]:checked');
            
            // Check if all fields are filled
            if (!height || !weight || !age || !activity || !gender) {
                e.preventDefault();
                alert('Please fill in all fields before submitting!');
                return false;
            }
            
            // Add loading animation to submit button
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.innerHTML = '<span>Processing...</span> <span class="btn-icon">⏳</span>';
            submitBtn.style.pointerEvents = 'none';
        });
    }
});