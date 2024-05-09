// Handling Toggled (SIMPLE)
const Letters = document.getElementById("Letter-check");
const Numbers = document.getElementById("Number-check");
const Symbols = document.getElementById("Symbol-check");

let Use_Letters = true;
let Use_Numbers = true;
let Use_Symbols = true;

Letters.addEventListener("change", () => {
	if (Use_Letters) {
		Use_Letters = false;
	} else {
		Use_Letters = true;
	}
});

Numbers.addEventListener("change", () => {
	if (Use_Numbers) {
		Use_Numbers = false;
	} else {
		Use_Numbers = true;
	}
});

Symbols.addEventListener("change", () => {
	if (Use_Symbols) {
		Use_Symbols = false;
	} else {
		Use_Symbols = true;
	}
});

// Handling Generate

const Password_Container = document.getElementById("Password_Input");
const Generate_btn = document.getElementById("Generate");
const Length_element = document.getElementById("Password_Length");

Generate_btn.addEventListener("click", () => {
	if ((!Length_element) instanceof Element) {
		console.error("Unable to generate");
		return;
	}
	if (Length_element.value <= 0) {
		console.error("Unable to generate");
		return;
	}
	if (isNaN(Length_element.value)) {
		console.error("Unable to generate");
		return;
	}
	if (!Use_Symbols && !Use_Letters && !Use_Numbers) {
		console.error("Unable to generate");
		return;
	}

	const Letters = "qwertyuiopasdfghjklzxcvbnmlQERTYUIOPASDFGHJKLZXCVBNM";

	const Symbols = "{}}:><:{}!@#$%^&*()__+~`";

	function GeneratePassword() {
		let password = "";

		for (let index = 0; index < Number(Length_element.value); index++) {
			if (Use_Letters) {
				const Calculation = Math.floor(Math.random() * Letters.length);
				password += Letters[Calculation];
			}
			if (Use_Symbols) {
				const Calculation = Math.floor(Math.random() * Symbols.length);
				password += Symbols[Calculation];
			}
			if (Use_Numbers) {
				password += Math.floor(
					Math.random() * Number(Length_element.value),
				).toString();
			}
		}

		return password.toString();
	}

	const Password = GeneratePassword().toString();

	if (Password_Container instanceof HTMLElement) {
		Password_Container.value = Password.toString();
	} else {
		console.error("Password_Container is not a HTMLElement");
	}
});
