const textColorRed = document.getElementById("text-red");
const textColorGreen = document.getElementById("text-green");
const textColorBlue = document.getElementById("text-blue");

const borderColorRed = document.getElementById("border-red");
const borderColorGreen = document.getElementById("border-green");
const borderColorBlue = document.getElementById("border-blue");

const borderWidthInput = document.getElementById("border-width");
const dummyText = document.getElementById("dummy-paragraph");

textColorRed.addEventListener("input", () => {
	dummyText.style.backgroundColor = `rgb(${textColorRed.value},${textColorGreen.value},${textColorBlue.value})`;
});
textColorGreen.addEventListener("input", () => {
	dummyText.style.backgroundColor = `rgb(${textColorRed.value},${textColorGreen.value},${textColorBlue.value})`;
});
textColorBlue.addEventListener("input", () => {
	dummyText.style.backgroundColor = `rgb(${textColorRed.value},${textColorGreen.value},${textColorBlue.value})`;
});


borderColorRed.addEventListener("input", () => {
	dummyText.style.borderColor = `rgb(${borderColorRed.value},${borderColorGreen.value},${borderColorBlue.value})`;
});
borderColorGreen.addEventListener("input", () => {
	dummyText.style.borderColor = `rgb(${borderColorRed.value},${borderColorGreen.value},${borderColorBlue.value})`;
});
borderColorBlue.addEventListener("input", () => {
	dummyText.style.borderColor = `rgb(${borderColorRed.value},${borderColorGreen.value},${borderColorBlue.value})`;
});


borderWidthInput.addEventListener("input", () => {
	dummyText.style.borderWidth = `${borderWidthInput.value}px`;
});
