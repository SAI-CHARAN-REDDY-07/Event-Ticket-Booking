function openClass(className) {
    localStorage.setItem("selectedClass", className);
    window.location.href = "class.html";
}

function goHome() {
    window.location.href = "index.html";
}