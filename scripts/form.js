
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
    

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById(
      "lastModified"
    ).textContent = `Last Modification: ${lastModified}`;