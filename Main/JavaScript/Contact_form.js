// Popup message
let popupBox = document.querySelector(".popupBox");

function showPopup(Popup_message) {
  let contactBox = document.querySelector(".contact_box");
  const mediaQuery = window.matchMedia("(max-width: 450px)");

  if (mediaQuery.matches) {
    if (contactBox) {
      contactBox.style.filter = "blur(7px)";
    }
  }

  let popupBox = document.querySelector(".popupBox"); // Ensure this is the correct container for the popups
  let popup = document.createElement("div");

  if (Popup_message === "Success") {
    console.log("Popup_success");
    popup.classList.add("Popup_success");
    popup.innerHTML = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
    if (popupBox) {
      popupBox.appendChild(popup);
    }
  }

  if (Popup_message === "Wrong") {
    popup.classList.add("Popup_error");
    popup.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Something went wrong';
    if (popupBox) {
      popupBox.appendChild(popup);
    }
  }

  setTimeout(() => {
    popup.remove();
    if (contactBox) {
      contactBox.style.filter = ""
      contactBox.style.transition = "0.5s"; // Remove the blur effect after the popup disappears
    }
  }, 7000);
}


// Input form Contact section
const Contact_form = document.querySelector(".form_for_submit");
//Submit event received
Contact_form.addEventListener("submit", function (event) {
  event.preventDefault();//Not going next page

  let DataOfObject = {
    name: `${document.querySelector(".FirstName").value} ${document.querySelector(".LastName").value}`,
    email: document.querySelector(".email").value,
    phoneNumber: document.querySelector(".phoneNumber").value,
    select_option: document.querySelector(".select_option").value,
    massage: document.querySelector(".massage").value
  }

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == "Success") {
      let Popup_message = "Success";
      showPopup(Popup_message);

      document.querySelector('.FirstName').value = "";
      document.querySelector('.LastName').value = "";
      document.querySelector('.email').value = "";
      document.querySelector('.phoneNumber').value = "";
      document.querySelector('.select_option').value = "";
      document.querySelector('.massage').value = "";
    } else {
      let Popup_message = "Wrong";
      showPopup(Popup_message);
    }
  };

  xhr.send(JSON.stringify(DataOfObject));
});