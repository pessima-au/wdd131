
    document.addEventListener("DOMContentLoaded", () => {
      const productSelect = document.getElementById("product");
      const products = [
        { id: "fc-1888", name: "flux capacitor" },
        { id: "fc-2050", name: "power laces" },
        { id: "fs-1987", name: "time circuits" },
        { id: "ac-2000", name: "low voltage reactor" },
        { id: "jj-1969", name: "warp equalizer" },
      ];
    
      if (productSelect) {
        products.forEach((product) => {
          const option = document.createElement("option");
          option.value = product.name;
          option.textContent = product.name;
          productSelect.appendChild(option);
        });
      } else {
        console.error("Element with ID 'product' not found in the DOM.");
      }
    });
    

    // Update footer year
    // document.getElementById("currentYear").textContent =
    //   new Date().getFullYear();

    // // Track review submission count
    // document.addEventListener("DOMContentLoaded", () => {
    //   const counterKey = "reviewCounter";
    //   const reviewCount = parseInt(localStorage.getItem(counterKey) || 0) + 1;
    //   localStorage.setItem(counterKey, reviewCount);



    // const message = `You have submitted ${reviewCount} reviews so far.`;
    // document.getElementById("reviewForm").textContent = message;
    
    // });

    // document.addEventListener("DOMContentLoaded", () => {
    //     // Update the review counter in localStorage
    //     const counterKey = "reviewCounter";
    //     let reviewCount = localStorage.getItem(counterKey) || 0;
    //     reviewCount = parseInt(reviewCount, 10) + 1;
    //     localStorage.setItem(counterKey, reviewCount);

    //     // Display the updated review count
    //     const reviewCountDisplay = document.getElementById("reviewCount");
    //     if (reviewCountDisplay) {
    //         reviewCountDisplay.textContent = `You have submitted ${reviewCount} reviews so far.`;
    //     }

    //     // Update the footer information
    //     document.getElementById("currentYear").textContent = new Date().getFullYear();
    //     document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
    // });

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById(
      "lastModified"
    ).textContent = `Last Modification: ${lastModified}`;