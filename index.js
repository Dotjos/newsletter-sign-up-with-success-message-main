const wrapper = document.querySelector(".wrapper");
const emailIn = document.querySelector("#emailIn");
const button = document.querySelector(".buttonDown");
const illustration = document.querySelector(".illustration");
const info = document.querySelector(".info");
const tBody = document.body;
const errorMessage = document.querySelector(".errMessage");

const isValid = function () {
  const emailValue = emailIn.value.trim();
  let valid = true;
  if (emailValue.length === 0) {
    valid = false;
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
    valid = false;
  }

  return valid;
};

//
const errMess = function () {
  if (!isValid()) {
    emailIn.classList.add("border-bordRed", "bg-errRed", "text-bordRed");
    errorMessage.classList.add("text-bordRed");
    errorMessage.classList.remove("hidden");
  } else {
    illustration.classList.add("hidden");
    info.classList.add("hidden");
    const successDiv = document.createElement("div");
    const imgSucc = document.createElement("img");
    const textSucc = document.createElement("p");
    const textSucc2 = document.createElement("h1");
    const btnSucc = document.createElement("button");
    const mailLink = document.createElement("a");
    btnSucc.textContent = "Dismiss message";
    imgSucc.src = "/assets/images/icon-success.svg";
    textSucc2.textContent = "Thanks for subscribing!";
    const html = `A confirmation email has been sent to
   <a href="mailto:${emailIn.value}"><b>${emailIn.value}</b></a>. Please open it and click the button inside to confirm
   your subscription.`;
    textSucc.innerHTML = html;
    imgSucc.classList.add("pt-10", "w-2/12", "md:1/4", "pb-10");
    textSucc.classList.add("pb-10", "xl:text-3xl");

    textSucc2.classList.add("font-bold", "text-4xl", "pb-5", "xl:text-6xl");

    btnSucc.classList.add(
      "border",
      "p-3",
      "mb-4",
      "w-11/12",
      "font-semibold",
      "rounded-md",
      "text-White",
      "bg-DarkSlateGrey",
      "xl:text-2xl",
      "xl:rounded-2xl",
      "ml-4",
      "mr-4",
      "xl:ml-10",
      "xl:mr-10",
      "xl:mt-4",
      "xl:text-4xl",
      "hover:bg-btnGrad"

      //   "hover:bg-gradient-to-rfrom-DarkSlateGrey to-Tomato"
    );
    successDiv.classList.add(
      "pl-7",
      "pr-5",
      "normal",
      "text-xl",
      "mb-2",
      "mt-auto",
      "mb-auto",
      "h-screen",
      "ml-auto",
      "mr-auto",
      "text-DarkSlateGrey",
      "pt-10"
    );

    wrapper.classList.add(
      "pt-10",
      "mb-auto",
      "md:w-3/4",
      "xl:w-3/4",
      "md:h-full"
    );
    wrapper.classList.remove("md:flex", "md:h-screen", "md:rounded", "border");

    successDiv.appendChild(imgSucc);
    successDiv.appendChild(textSucc2);
    successDiv.appendChild(textSucc);
    wrapper.appendChild(successDiv);
    wrapper.appendChild(btnSucc);
    tBody.classList.add("xl:h-screen");
    tBody.classList.remove("bg-DarkSlateGrey");
  }
};

button.addEventListener("click", errMess);
