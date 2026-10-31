// --- Countdown Timer Configuration ---
// Set the wedding target date here
const targetWeddingDate = new Date("Oct 16, 2027 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetWeddingDate - now;

    if (difference <= 0) {
        document.querySelector(".countdown-container").innerHTML = "The Celebration Has Begun!";
        clearInterval(timerInterval);
        return;
    }

    // Calculation mapping for Time
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    // Output data to DOM safely, padding strings to stay uniform
    document.getElementById("days").innerText = String(d).padStart(2, '0');
    document.getElementById("hours").innerText = String(h).padStart(2, '0');
    document.getElementById("minutes").innerText = String(m).padStart(2, '0');
    document.getElementById("seconds").innerText = String(s).padStart(2, '0');
}

// Initialize and fire countdown loop every 1 second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// --- RSVP Interactive Modal UI Operations ---
const openRsvpBtn = document.getElementById("openRsvp");
const closeRsvpBtn = document.getElementById("closeRsvp");
const rsvpModal = document.getElementById("rsvpModal");
const rsvpForm = document.getElementById("rsvpForm");

openRsvpBtn.addEventListener("click", () => {
    rsvpModal.classList.add("active");
});

closeRsvpBtn.addEventListener("click", () => {
    rsvpModal.classList.remove("active");
});

// Close modal if user clicks anywhere outside of the modal dialog box
window.addEventListener("click", (e) => {
    if (e.target === rsvpModal) {
        rsvpModal.classList.remove("active");
    }
});

// Form processing simulation
rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guestName").value;
    const status = document.getElementById("attendance").value;

    if(status === "yes") {
        alert(`Thank you, ${name}! Your attendance has been joyfully registered.`);
    } else {
        alert(`Thank you for informing us, ${name}. You will be missed!`);
    }

    rsvpForm.reset();
    rsvpModal.classList.remove("active");
});
