const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// function to open modal
function openModal() {
    overlay.classList.add("overlayActive");
    modal.classList.add("active");
}

// function to close modal
const closeModal = () => {
    overlay.classList.remove("overlayActive");
    modal.classList.remove("active");
};
