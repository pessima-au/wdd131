document.addEventListener("DOMContentLoaded", () => {
    
    const counterKey = "reviewCounter";
    let reviewCount = localStorage.getItem(counterKey) || 0;
    reviewCount = parseInt(reviewCount, 10) + 1;
    localStorage.setItem(counterKey, reviewCount);

    
    const reviewCountDisplay = document.getElementById("reviewCount");
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = `You have submitted ${reviewCount} reviews so far.`;
    }
    

    
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});