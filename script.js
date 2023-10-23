// Get references to the old and new content containers and the "Load More" button
const oldContent = document.getElementById('old-content');
const newContent = document.getElementById('new-content');
const loadMoreButton = document.getElementById('load-more');
let isOldContentVisible = true; // Initially, old content is visible

// Function to toggle content visibility
function toggleContentVisibility() {
    if (isOldContentVisible) {
        oldContent.style.display = "none"; // Hide old content
        newContent.style.display = "block"; // Show new content
    } else {
        oldContent.style.display = "block"; // Show old content
        newContent.style.display = "none"; // Hide new content
    }
    isOldContentVisible = !isOldContentVisible; // Toggle the visibility state
}

// Listen for the "Load More" button click event
loadMoreButton.addEventListener('click', toggleContentVisibility);
