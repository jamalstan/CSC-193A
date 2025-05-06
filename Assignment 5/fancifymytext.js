alert("Hello, world!");

// Function called by the "Bigger!" button
function makeBigger() {

    // Get the text area element by its ID
    const textArea = document.getElementById("userText");

    textArea.style.fontSize = "24pt";
}

// Function called when either radio button's state changes
function applyStyles() {


    // Get the text area and radio buttons
    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        // FancyShmancy is selected
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // BoringBetty must be selected (or neither initially, but applies boring)
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function called by the "Moo" button
function mooifyText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Split into sentences (using period as delimiter)
    const sentences = text.split(".");

    // Process each sentence fragment
    for (let i = 0; i < sentences.length; i++) {
        // Trim whitespace from the fragment
        let sentence = sentences[i].trim();

        // Check if the fragment is not empty after trimming
        if (sentence.length > 0) {
            let words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    // Join the modified sentences back together with periods
    textArea.value = sentences.join(".").trim();
}