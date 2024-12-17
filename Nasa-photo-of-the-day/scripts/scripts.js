let currentDate = new Date();

function formatDate(date) {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return date.toLocaleDateString(undefined, options);
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

async function nasaImages(date, retryCount = 0) {
  const MAX_RETRIES = 5;
  const loadingElement = document.querySelector("#loading");
  loadingElement.classList.remove('hidden');
  const formattedDate = date.toISOString().split("T")[0];

  try {
    const response = await axios.get(
     `https://api.nasa.gov/planetary/apod?api_key=z6tbGC4iWnPPopHOX0dVelXGMvdtopQXe9VlM4vO&date=${formattedDate}`
    );
    const imageData = response.data;
    console.log("Image data:", imageData);


    const titleElement = document.querySelector('#featured-date');
      titleElement.innerText = isToday(date)
      ? "Today's Featured Image"
       : `Featured Image for ${formatDate(date)}`;
    
   

    const contentContainer = document.querySelector("#photo");
    contentContainer.innerHTML = "";

    if (imageData.media_type === "image") {
      const image = document.querySelector("#photo");
      image.setAttribute("src", imageData.url);
      image.setAttribute("alt", imageData.title);
      image.setAttribute("title", imageData.url);
      image.setAttribute("width", "1100");
      image.setAttribute("height", "250");

    } else if (imageData.media_type === "video") {
      const iframeElement = document.createElement("iframe");
      iframeElement.setAttribute("src", imageData.url);
      iframeElement.setAttribute("title", imageData.title);
      iframeElement.setAttribute("width", "600");
      iframeElement.setAttribute("height", "400");
      iframeElement.setAttribute("frameborder", "0");
      iframeElement.setAttribute("allowfullscreen", "true");
      contentContainer.appendChild(iframeElement);
    }

    
    document.querySelector("#image-title").textContent = imageData.title;
    document.querySelector("#photo-description").textContent = imageData.explanation;
    document.getElementById("current-date").textContent = formattedDate;

    const description = (document.querySelector(
      "#photo-description"
    ).textContent = imageData.explanation);
  } catch (error) {
    if (error.response && error.response.status === 404 && retryCount < MAX_RETRIES) {
      console.log(`No data available for ${formattedDate}. Trying the previous day...`);
      date.setDate(date.getDate() -1);
      nasaImages(date, retryCount + 1);
    } else {
      console.log("An unexpected error occurred:", error.message);
      document.querySelector("#photo-description").textContent = "No image available for this date."
    }

  } finally {
    loadingElement.classList.add("hidden");
  }
}

function goBack() {
    currentDate.setDate(currentDate.getDate() - 1);
    nasaImages(currentDate);
    nextBtn.disabled = normalizeDate(currentDate) >= today;
}

function goForward() {
  if (normalizeDate(currentDate) < today) {
    currentDate.setDate(currentDate.getDate() + 1);
    nasaImages(currentDate);
  }
  nextBtn.disabled = normalizeDate(currentDate) >= today;
}

document.querySelector("#prev-btn").addEventListener("click", goBack);
document.querySelector("#next-btn").addEventListener("click", goForward);



const nextBtn = document.querySelector('#next-btn');

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

const today = normalizeDate(new Date());
if (normalizeDate(currentDate) >= today) {
  nextBtn.disabled = true;
} else {
  nextBtn.disabled = false;
}

nasaImages(currentDate);
