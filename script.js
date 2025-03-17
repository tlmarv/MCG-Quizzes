function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab and set it as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set the default active tab on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-link")[0].click();
});
