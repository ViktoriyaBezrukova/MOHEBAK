const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}
function inputCheck (el) {
	const inputValue = el.value;
	const inputReg = el.getAttribute("data-reg");
	const reg = new RegExp(inputReg);
	if (reg.test(inputValue)) {
		el.style.background = "#F5F5F5";
		el.setAttribute("is-valid", "1")
	} else{
		el.style.background = "rgba(191, 39, 56, 0.3)";
		el.setAttribute("is-valid", "0")
	}
}


function buttonHandler(e) {
	const allValid = [];
	validFormArr.forEach((el) => {
	  allValid.push(el.getAttribute("is-valid"));
	});
	const isAllValid = allValid.reduce((acc, current) => {
	  return acc && current;
	});
	if (!Boolean(Number(isAllValid))) {
	  e.preventDefault();
	}
 }



