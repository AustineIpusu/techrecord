// This code runs when the page loads
document.addEventListener("DOMContentLoaded", function () {
    //console.log("🎯 Welcome to Ipusu A. Austine's techrecord/portfolio!");
});

// Analog Clock Functionality - FIXED ACCURATE TIME
function initializeClock() {
    console.log('🕒 Initializing accurate analog clock...');
    
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        // SUPER SIMPLE ACCURATE CALCULATION
const secondDegrees = (seconds / 60) * 360 + 90;
const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 90;
        
        // Get hand elements
        const secondHand = document.querySelector('.second-hand');
        const minuteHand = document.querySelector('.minute-hand');
        const hourHand = document.querySelector('.hour-hand');
        
        // Apply rotations
        if (secondHand) secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        
        // Debug: Log actual time vs calculated degrees
        console.log(`Time: ${hours}:${minutes}:${seconds} | Degrees: H:${hourDegrees.toFixed(1)}° M:${minuteDegrees.toFixed(1)}° S:${secondDegrees.toFixed(1)}°`);
    }

    // Initialize immediately
    updateClock();
    
    // Update every second
    //setInterval(updateClock, 1000);
    
    console.log('✅ Accurate clock initialized!');
}
// Add this inside updateClock() function:
const digitalClock = document.getElementById('digital-clock');
if (digitalClock) {
    digitalClock.textContent = now.toLocaleTimeString();
}

function initializeVisitorCounter() {
    const visitorCounter = new PortfolioVisitorCounter();
    visitorCounter.init();
};
// Real-time Analog Clock Functionality
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate angles for clock hands
    const hourAngle = (hours * 30) + (minutes * 0.5); // 30 degrees per hour + 0.5 degrees per minute
    const minuteAngle = (minutes * 6) + (seconds * 0.1); // 6 degrees per minute + 0.1 degrees per second
    const secondAngle = seconds * 6; // 6 degrees per second
    
    // Get clock hands
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    
    // Apply rotations if elements exist
    if (hourHand) {
        hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    }
    if (minuteHand) {
        minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
    }
    if (secondHand) {
        secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
    }
    
    // Update digital time display (optional)
    const digitalTime = now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    
    // If you want to show digital time somewhere
    const clockText = document.querySelector('.clock-text');
    if (clockText) {
        clockText.textContent = `${digitalTime}`;
    }
}

// Start the clock and update every second
function initClock() {
    //updateClock(); // Initial call
    setInterval(updateClock, 1000); // Update every second
}

// Initialize clock when page loads
document.addEventListener('DOMContentLoaded', initClock);

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

// Analog Clock Functionality
function initializeClock() {
    console.log('Initializing clock...');
    
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;
        
        // Calculate degrees for each hand
        const secondDegrees = ((seconds / 60) * 360) + 90;
        const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        
        // Get hand elements
        const secondHand = document.querySelector('.second-hand');
        const minuteHand = document.querySelector('.minute-hand');
        const hourHand = document.querySelector('.hour-hand');
        
        console.log('Clock hands found:', {
            secondHand: !!secondHand,
            minuteHand: !!minuteHand,
            hourHand: !!hourHand
        });
        
        // Apply rotations
        if (secondHand) {
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;
            console.log('Second hand rotated to:', secondDegrees + 'deg');
        }
        if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initialize clock immediately
    updateClock();

    // Add smooth transitions after first render
    setTimeout(() => {
        const hands = document.querySelectorAll('.hand');
        hands.forEach(hand => {
            hand.style.transition = 'transform 0.3s cubic-bezier(0.4, 2.3, 0.8, 1)';
        });
    }, 100);
    
    console.log('Clock initialized successfully!');
}

function initializeVisitorCounter() {
    const visitorCounter = new PortfolioVisitorCounter();
    visitorCounter.init();
}
