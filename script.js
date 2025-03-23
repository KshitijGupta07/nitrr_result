function showResult() {
    var roll = document.getElementById("roll").value;
    var loading = document.getElementById("loading");
    var resultDiv = document.getElementById("result");

    if (roll === "23017258") {
        loading.style.display = "block";
        resultDiv.classList.add("hidden");

        setTimeout(() => {
            loading.style.display = "none";
            resultDiv.classList.remove("hidden");
        }, 5000);
    } else {
        alert("Roll number not found.");
    }
}
