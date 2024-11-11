// Popup message handler
let popupBox = document.querySelector(".popupBox");

function showPopup(Popup_message) {
  let contactBox = document.querySelector(".contact_box");
  const mediaQuery = window.matchMedia("(max-width: 450px)");

  if (mediaQuery.matches && contactBox) {
    contactBox.style.filter = "blur(7px)";
  }

  let popup = document.createElement("div");

  if (Popup_message === "Success") {
    popup.classList.add("Popup_success");
    popup.innerHTML = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
    popupBox.appendChild(popup);
  } else if (Popup_message === "Wrong") {
    popup.classList.add("Popup_error");
    popup.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Something went wrong';
    popupBox.appendChild(popup);
  }

  setTimeout(() => {
    popup.remove();
    if (contactBox) {
      contactBox.style.filter = "";
      contactBox.style.transition = "0.5s";
    }
  }, 7000);
}

// Form submission handling
const Contact_form = document.querySelector(".form_for_submit");
Contact_form.addEventListener("submit", function (event) {
  event.preventDefault();

  let DataOfObject = {
    name: `${document.querySelector(".FirstName").value} ${document.querySelector(".LastName").value}`,
    email: document.querySelector(".email").value,
    phoneNumber: document.querySelector(".phoneNumber").value,
    select_option: document.querySelector(".select_option").value,
    massage: document.querySelector(".massage").value
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:5000/"); 
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    // console.log(xhr);

    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.message === "Success") {
            showPopup("Success");
            Contact_form.reset();
        } else {
            showPopup("Wrong");
        }
    } else {
        showPopup("Wrong");
    }
};
// This function will handle network errors
xhr.onerror = function () {
  console.error("A network error occurred. Unable to connect to the server.");
  showPopup("Wrong"); 
};
try {
  xhr.send(JSON.stringify(DataOfObject));
} catch (error) {
  console.error("An error occurred while sending the request:", error);
  showPopup("Wrong"); 
}
  
});
