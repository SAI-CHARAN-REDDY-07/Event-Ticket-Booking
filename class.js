let mutex = false;
let availableTickets = 6;

const selectedClass = localStorage.getItem("selectedClass");
document.getElementById("classTitle").innerText =
    selectedClass + " - Ticket Types";
function logMessage(msg) {
    const log = document.getElementById("log");
    log.innerHTML += msg + "<br>";
    log.scrollTop = log.scrollHeight;
}
function bookTicket(type) {

    if (mutex) {
        logMessage(type + " ⏳ Waiting (Mutex Locked)");
        return;
    }

    mutex = true;
    logMessage(type + " 🔒 Entered Critical Section");
    setTimeout(() => {

        if (availableTickets > 0) {
            availableTickets--;
            document.getElementById("ticketCount").innerText = availableTickets;
            logMessage(type + " ✅ Ticket Booked");
        } else {
            logMessage(type + " ❌ Tickets Sold Out");
        }

        mutex = false;
        logMessage(type + " 🔓 Exited Critical Section");

    }, 1500);
}
function goBack() {
    window.location.href = "booking.html";
}