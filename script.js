function firstWord(s) {
    if (!s) return ''; // Handle empty string or null

    // Trim leading spaces
    s = s.trim();

    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');

    // If no space found, return the entire string
    if (spaceIndex === -1) return s;

    // Otherwise, return substring up to the first space
    return s.slice(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
