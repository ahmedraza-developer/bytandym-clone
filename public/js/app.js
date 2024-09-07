const button = document.querySelector("button");
const menubar = document.querySelector(".__menubar");

let isExpanded = button.getAttribute("aria-expanded") === "true";

function open() {
    button.setAttribute("aria-expanded", "true");
    menubar.classList.add("open");
    isExpanded = true;
}

function close() {
    button.setAttribute("aria-expanded", "false");
    menubar.classList.remove("open");
    isExpanded = false;
}

function toggle() {
    isExpanded ? close() : open();
}

button.addEventListener("click", toggle);

// Set default state to closed
close();
