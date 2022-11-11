const container = document.querySelector(".container");
const word = document.querySelector(".word")
const careers = ["JS engineer", "React engineer", "successful real estate investor", "UI React specialist"];

let careerIndex = 0;

let charIndex = 0;



function updateText() {
    charIndex++;
    word.textContent = `
    I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
            careerIndex
        ].slice(0, charIndex)}
    `;

    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 200);
}

updateText();