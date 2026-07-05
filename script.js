const words = [
    "Software Engineering Student",
    "Web Developer",
    "Future Freelancer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();
const hireBtn = document.getElementById("hireBtn");

hireBtn.addEventListener("click", function () {
    alert("Thank you for your interest! You can contact me using the form below.");
});