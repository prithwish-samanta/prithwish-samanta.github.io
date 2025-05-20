function getCopyrightInfo() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
}

document.addEventListener('DOMContentLoaded', getCopyrightInfo);