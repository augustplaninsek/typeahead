// Function to make an AJAX request and fetch data
function fetchData(inputValue, apiEndpoint) {
    return fetch(`${apiEndpoint}?search=${inputValue}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function handleInput(inputSelector, apiEndpoint) {
    const inputElement = document.querySelector(inputSelector);

    // Create a container div with position: relative
    const inputContainer = document.createElement("div");
    inputContainer.style.position = "relative";
    inputElement.parentNode.insertBefore(inputContainer, inputElement);
    inputContainer.appendChild(inputElement);

    // Create suggestions container dynamically
    const suggestionsContainer = document.createElement("div");
    suggestionsContainer.id = "suggestions-container";
    inputContainer.appendChild(suggestionsContainer);

    // Apply initial styles to suggestions container
    suggestionsContainer.style.maxHeight = "200px";
    suggestionsContainer.style.overflowY = "auto";
    suggestionsContainer.style.position = "absolute";
    suggestionsContainer.style.border = "1px solid #ccc";
    suggestionsContainer.style.display = "none";
    suggestionsContainer.style.width = "498px";
    suggestionsContainer.style.maxWidth = "100%";
    suggestionsContainer.style.background = "white";


    // Event listener for input changes
    inputElement.addEventListener("input", function () {
        const inputValue = inputElement.value.toLowerCase();

        // Clear previous suggestions
        suggestionsContainer.innerHTML = '';

        if (inputValue.length > 0) {
            // Make an AJAX request using fetchData function
            fetchData(inputValue, apiEndpoint)
                .then(data => {
                    // Display suggestions based on the data received
                    data.forEach(item => {
                        const suggestionElement = document.createElement("div");
                        suggestionElement.classList.add("suggestion");
                        suggestionElement.textContent = item;

                        suggestionElement.style.padding = "5px";
                        suggestionElement.style.cursor = "pointer";

                        // Event listener for suggestion hover
                        suggestionElement.addEventListener("mouseover", function () {
                            suggestionElement.style.backgroundColor = "#f0f8ff"; // Light blue background
                        });

                        // Event listener for suggestion unhover
                        suggestionElement.addEventListener("mouseout", function () {
                            suggestionElement.style.backgroundColor = ""; // Reset background
                        });

                        // Event listener for suggestion click
                        suggestionElement.addEventListener("click", function () {
                            inputElement.value = item;
                            suggestionsContainer.style.display = "none";
                        });

                        suggestionsContainer.appendChild(suggestionElement);
                    });

                    // Display or hide suggestions container based on the number of suggestions
                    suggestionsContainer.style.display = data.length > 0 ? "block" : "none";
                });
        } else {
            // Hide suggestions container if input is empty
            suggestionsContainer.style.display = "none";
        }
    });

    // Close suggestions on outside click
    document.addEventListener("click", function (event) {
        if (!event.target.closest(inputSelector) && !event.target.closest("#suggestions-container")) {
            suggestionsContainer.style.display = "none";
        }
    });
}
