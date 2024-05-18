
const popup = document.querySelector(".popup");
        
document.getElementById("open").addEventListener("click", () => {
    popup.classList.add("show-popup");
});

document.getElementById("close").addEventListener("click", () => {
            popup.classList.remove("show-popup");
});