// Get current page name
let currentPage = window.location.pathname.split("/").pop();

// If empty (means user is on "/"), treat as index.html
if (currentPage === "") {
  currentPage = "index.html";
}

// Loop through all navbar links
document.querySelectorAll(".navbar-top ul li a").forEach(link => {
  // Get the file name from each link's href
  let linkPage = link.getAttribute("href").replace("./", "");

  // Match and activate the correct link
  if (linkPage === currentPage) {
    link.parentElement.classList.add("active");
  }
});