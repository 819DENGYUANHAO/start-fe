export function openModal({ text }) {
    const contentElement = document.getElementsByClassName("content")[0];
    const modalElement = document.getElementsByClassName("modal")[0];
    
    contentElement.textContent = text;
    modalElement.style.display = "flex";
    }
    
    export function closeModal() {
    const modalElement = document.getElementsByClassName("modal")[0];
    modalElement.style.display = "none";
    }