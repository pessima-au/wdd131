

const apiKey = "z6tbGC4iWnPPopHOX0dVelXGMvdtopQXe9VlM4vO";
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("load-more-btn");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModalButton = document.getElementById("close-modal");

let currentDate = new Date();
let loadCount = 0; // Tracks how many sets of images have been loaded

// Function to fetch APOD images
async function fetchImages(count = 10) {
  const images = [];
  for (let i = 0; i < count; i++) {
    const dateString = currentDate.toISOString().split("T")[0];
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateString}`
      );
      images.push(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log(`No data available for ${dateString}, skipping...`);
      } else {
        console.log("Error fetching data:", error.message);
      }
    }
    currentDate.setDate(currentDate.getDate() - 1); // Go back one day
  }
  return images;
}

// Function to render images
function renderImages(images) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgElement = entry.target;
          console.log("Loading image:", imgElement.dataset.src); // Debug log
          imgElement.src = imgElement.dataset.src; // Replace placeholder with actual image URL
          imgElement.onload = () => imgElement.classList.add("loaded"); // Optional: Add a loaded class
          observer.unobserve(imgElement); // Stop observing once loaded
        }
      });
    },
    {
      root: null, // Use viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the image is visible
    }
  );

  images.forEach((image) => {
    if (image.media_type === "image") {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("data-src", image.url); // Use data-src for lazy loading
      imgElement.setAttribute("alt", image.title);
      imgElement.setAttribute("title", image.title);
      imgElement.setAttribute("loading", "lazy"); // Add native lazy loading
      imgElement.classList.add("gallery-image");

      // Observe the image for lazy loading
      observer.observe(imgElement);

      // Add an event listener to open the modal when the image is clicked
      imgElement.addEventListener("click", () => openModal(image));

      gallery.appendChild(imgElement);
    }
  });
}

// Modal handling
function openModal(image) {
  const imageUrl = image.url;
  console.log("Opening modal with URL:", imageUrl);

  modalImage.src = imageUrl;
  modalImage.alt = image.title;
  modalTitle.textContent = image.title;
  modalDescription.textContent = image.explanation;
  modal.classList.remove("hidden"); // Make the modal visible
}

function closeModal() {
  modal.classList.add("hidden"); // Hide the modal
}

// Close modal event listener
closeModalButton.addEventListener("click", closeModal);

// Close modal when clicking outside of the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Load more images on button click
loadMoreBtn.addEventListener("click", async () => {
  const newImages = await fetchImages(5);
  renderImages(newImages);
});

// Initial load
(async () => {
  const initialImages = await fetchImages(10);
  renderImages(initialImages);
})();

// Search form functionality
document.addEventListener("DOMContentLoaded", () => {
  const yearDropdown = document.getElementById("search-year");
  const monthDropdown = document.getElementById("search-month");
  const dayDropdown = document.getElementById("search-day");

  // Populate the year dropdown
  const currentYear = new Date().getFullYear();
  for (let year = 1995; year <= currentYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
  }

  // Populate the month dropdown
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = (index + 1).toString().padStart(2, "0");
    option.textContent = month;
    monthDropdown.appendChild(option);
  });

  // Update days based on year and month selection
  function updateDays() {
    const selectedYear = parseInt(yearDropdown.value);
    const selectedMonth = parseInt(monthDropdown.value);

    if (isNaN(selectedYear) || isNaN(selectedMonth)) return;

    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    dayDropdown.innerHTML = '<option value="" disabled selected>Select Day</option>';

    for (let day = 1; day <= daysInMonth; day++) {
      const option = document.createElement("option");
      option.value = day.toString().padStart(2, "0");
      option.textContent = day;
      dayDropdown.appendChild(option);
    }
  }

  // Add event listeners to update days when year or month changes
  yearDropdown.addEventListener("change", updateDays);
  monthDropdown.addEventListener("change", updateDays);

  // Handle form submission
  document.getElementById("search-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const year = yearDropdown.value;
    const month = monthDropdown.value;
    const day = dayDropdown.value;

    if (!year || !month || !day) {
      alert("Please select a valid year, month, and day.");
      return;
    }

    const selectedDate = `${year}-${month}-${day}`;
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`
      );

      // Clear the gallery before rendering the new image
      gallery.innerHTML = "";

      // Render the searched image
      renderImages([response.data]);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert(`No photo found for ${selectedDate}. Try another date.`);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  });
});


