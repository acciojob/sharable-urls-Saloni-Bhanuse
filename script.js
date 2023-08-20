
document.getElementById("button").addEventListener("click", function() {

    var nameValue = document.getElementById("name").value;
    var yearValue = document.getElementById("year").value;

    var newURL = `https://localhost:8080/?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;

    document.getElementById("url").textContent = newURL;
});
