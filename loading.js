    // Show the loading animation when the page loads or refreshes
    document.addEventListener("DOMContentLoaded", function () {
        showLoadingAnimation();
    });

// Function to show the loading animation for 5 seconds
function showLoadingAnimation() {
    const loadingOverlay = document.querySelector(".loading-overlay");
    const actualContent = document.getElementById("actualContent");

    setTimeout(function () {
        loadingOverlay.style.display = "none";
        actualContent.style.display = "block";
    }, 3000); // 5000 milliseconds (5 seconds)
}