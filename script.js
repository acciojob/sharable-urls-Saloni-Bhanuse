// your code here
document.getElementById("button").addEventListener("click", function() {
    // Get the values from the input fields
    var nameValue = document.getElementById("name").value;
    var yearValue = document.getElementById("year").value;

    // Construct the new URL with query string
    var newURL = `https://localhost:8080/?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;

    // Update the h3 text
    document.getElementById("url").textContent = newURL;
});
