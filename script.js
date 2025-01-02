let countdown; // Variable to store the countdown interval
let targetDate; // Variable to store the target event date

// Function to start the countdown based on user input
function startCountdown() {
    const eventDateInput = document.getElementById("event-date").value;
    
    if (eventDateInput) {
        targetDate = new Date(eventDateInput).getTime(); // Convert user input to timestamp

        // Start the countdown interval
        countdown = setInterval(updateCountdown, 1000);
    } else {
        alert("Please select an event date!");
    }
}

// Function to update the countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerText = `${days}d`;
    document.getElementById("hours").innerText = `${hours}h`;
    document.getElementById("minutes").innerText = `${minutes}m`;
    document.getElementById("seconds").innerText = `${seconds}s`;

    // When the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").style.display = "none";
        const message = document.getElementById("message");
        message.style.display = "block";
        message.innerText = "🎉 Your Event Has Arrived! 🎉";
    }
}

// Add event listener to the "Start Countdown" button
document.getElementById("set-date").addEventListener("click", startCountdown);
