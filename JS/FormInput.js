function RegisterClick() {
  // Show the details container
  document.getElementById("detailsContainer").style.display = "block";

  // Populate the details with input values
  document.getElementById("lblName").innerHTML =
    document.getElementById("ProductName").value;

  document.getElementById("lblPrice").innerHTML =
    document.getElementById("ProductPrice").value;

  document.getElementById("lblCity").innerHTML =
    document.getElementById("ProductShippedTo").value;

  // Handle checkbox value
  const stockStatus = document.getElementById("ProductStock").checked
    ? "In Stock"
    : "Out of Stock";
  document.getElementById("lblStock").innerHTML = stockStatus;
}
