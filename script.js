// When the script runs before the HTML is fully loaded, document.querySelector("button") returns null, so .addEventListener() silently fails.

// Wrapping in DOMContentLoaded makes sure JS only runs after the button exists in the DOM.

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  console.log("Script loaded");

  button.addEventListener("click", () => {
    console.log("Button clicked");

    if (navigator.geolocation) {
      console.log("Geolocation is supported");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Success", position);
          button.innerText = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
        },
        (error) => {
          console.log("Error", error);
          button.innerText = `Error: ${error.message}`;
        }
      );
    } else {
      console.log("Geolocation NOT supported");
      button.innerText = "Geolocation not supported";
    }
  });
});
