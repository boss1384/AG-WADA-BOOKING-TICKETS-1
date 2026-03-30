function showSection(sectionId) {
    let sections = document.querySelectorAll(".content");
    sections.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(sectionId).classList.remove("hidden");
}

function bookTicket() {
    alert("Ticket booked successfully!");
}

function applyVisa() {
    alert("Visa application submitted!");
}

function applyPassport() {
    alert("Passport request sent!");
}
