// This code runs when the page loads
document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to Ipusu A. Austine's techrecord/portfolio!");
});
// Live visitor counter for portfolio
class PortfolioVisitorCounter {
    constructor() {
        this.apiUrl = 'https://qifolf6l45.execute-api.us-east-1.amazonaws.com/prod/';
        this.counterElement = document.getElementById('portfolioVisitorCount');
    }

    async updateCounter() {
        if (!this.counterElement) return;
        
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error('API request failed');
            
            const data = await response.json();
            this.counterElement.textContent = data.count;
            this.counterElement.style.color = '#27ae60';
            
        } catch (error) {
            console.log('Visitor counter offline');
            this.counterElement.textContent = 'See Live Demo';
            this.counterElement.style.color = '#667eea';
        }
    }

    init() {
        if (this.counterElement) {
            this.updateCounter();
            // Update every 60 seconds to show it's live
            setInterval(() => this.updateCounter(), 60000);
        }
    }
}

// Initialize when portfolio loads
document.addEventListener('DOMContentLoaded', function() {
    const visitorCounter = new PortfolioVisitorCounter();
    visitorCounter.init();
});
