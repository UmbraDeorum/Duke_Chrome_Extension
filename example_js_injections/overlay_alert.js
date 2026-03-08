(function () {
  // Create overlay element
  const overlay = document.createElement("div");

  // Style the overlay
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: "999999",
    cursor: "pointer"
  });

  // Click handler
  overlay.addEventListener("click", () => {
    alert("Please subscribe to continue");
  });

  // Add to page
  document.body.appendChild(overlay);
})();
