const empties = document.querySelectorAll(".empty");
const textDrop = document.querySelector(".text-drop");
const textBox = document.querySelector(".textbox");
const checkbox = document.querySelector(".checkbox");
const radio = document.querySelector(".radio");
let draggedItem;
let index;

//dragging and dropping of logos
const logoDragged = () => {
  const logo = document.querySelector(".logo");
  logo.addEventListener("dragstart", () => {
    for (let empty of empties) {
      if (empty.childNodes.length < 1) {
        empty.style.backgroundColor = "blue";
      }
    }
  });
  logo.addEventListener("dragend", () => {
    for (let empty of empties) {
      empty.style.background = "white";
    }
  });
  empties.forEach((empty, index) => {
    empty.addEventListener("dragover", (e) => {
      if (empty.style.backgroundColor === "blue") {
        e.preventDefault();
      }
    });
    empty.addEventListener("drop", (e) => {
      const newItem = document.createElement("input");
      newItem.classList.add(`input-file`);
      newItem.setAttribute("type", "file");
      const image = document.createElement("img");
      image.classList.add(`image-${index}`);
      image.setAttribute("src", "");
      empty.append(newItem);
      newItem.onchange = () => {
        empty.append(image);
        const temp = newItem.files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          image.src = fileReader.result;
          if (e.target.id.includes("header")) {
            obj.addLogosBySection("header", image.src, e.target.id, index);
            console.log(obj);
          } else {
            obj.addLogosBySection("footer", image.src, e.target.id, index);
            console.log(obj);
          }
        });
        if (temp) {
          fileReader.readAsDataURL(temp);
        }
        newItem.style.display = "none";
        image.style.display = "block";
      };
    });
  });
};
logoDragged();

//dragging and dropping of textBox
const inputDragged = () => {
  textBox.addEventListener("dragstart", () => {
    textDrop.style.backgroundColor = "blue";
    draggedItem = "textBox";
  });
  checkbox.addEventListener("dragstart", () => {
    textDrop.style.backgroundColor = "blue";
    draggedItem = "checkbox";
  });
  radio.addEventListener("dragstart", () => {
    textDrop.style.backgroundColor = "blue";
    draggedItem = "radio";
  });
  textBox.addEventListener("dragend", () => {
    textDrop.style.background = "white";
  });
  checkbox.addEventListener("dragend", () => {
    textDrop.style.background = "white";
  });
  radio.addEventListener("dragend", () => {
    textDrop.style.background = "white";
  });
  textDrop.addEventListener("dragover", (e) => {
    if (textDrop.style.backgroundColor === "blue") {
      e.preventDefault();
    }
  });
  textDrop.addEventListener("drop", () => {
    const board = document.createElement("div");
    board.classList.add("board__item");
    board.innerHTML = getFormField(draggedItem);
    textDrop.append(board);
    deleteBoard();
    const editPopupBtns = document.querySelectorAll(".popup-edit");
    editPopupBtns.forEach((editBtn, i) => {
      editBtn.addEventListener("click", () => {
        index = i;
        const popup = document.querySelector(".popup");
        const container = document.querySelector(".container");
        popup.style.transform = "scale(1)";
        container.style.opacity = "0.2";
        container.style.pointerEvents = "none";
      });
    });
    const textChildren = textDrop.children;
    for (let i = 0; i < textChildren.length; i++) {
      const textChild = textChildren[i];
      textChild.setAttribute("id", i);
    }
  });
};
inputDragged();

//input append based on type
const getFormField = (type) => {
  switch (type) {
    case "textBox":
      return `
    <div class="board-content">
    <label for ="label" class="title">label</label>
    <div class="edit-buttons"> <div class="popup-edit" ><a href="#"><i class="fa-solid fa-pencil"></i></a></div>
    <div class ='close-mark'><i class="fa-regular fa-x"></i></div></div>
    </div>
    <input type='text' placeholder="placeholder" class="inputArea"/>`;
    case "checkbox":
      return `<div class="board-content">
    <div class= "input-and-label"><input type='checkbox' name="checkbox class="inputArea"  />
    <label for="checkbox" class="title"  onclick = "">label</label></div>  
    <div class="edit-buttons"> <div class="popup-edit" ><a href="#"><i class="fa-solid fa-pencil"></i></a></div>
    <div class ='close-mark'><i class="fa-regular fa-x"></i></div></div>
    </div>`;
    case "radio":
      return `<div class="board-content">
    <div class="input-and-label"><input type='radio' name="radio" class="inputArea"  />
    <label for="checkbox" class="title" >label</label></div>  
    <div class="edit-buttons"> <div class="popup-edit" ><a href="#"><i class="fa-solid fa-pencil"></i></a></div>
    <div class ='close-mark'><i class="fa-regular fa-x"></i></div></div>
    </div>`;
    default:
      return "";
  }
};

//previewing banner on same page
const banner = document.getElementById("banner");
const bgInput = document.getElementById("bg-input");
banner.onchange = () => {
  const bannerImage = document.createElement("img");
  bannerImage.src = "";
  bannerImage.classList.add("banner-image");
  bgInput.append(bannerImage);
  const temp = banner.files[0];
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    bannerImage.src = fileReader.result;
    logos.banner.url = bannerImage.src;
  });
  if (temp) {
    fileReader.readAsDataURL(temp);
  }
  banner.style.display = "none";
  bannerImage.style.display = "block";
};

//change data of form
const changeData = (obj) => {
  const titles = document.querySelectorAll(".title");
  const inputAreas = document.querySelectorAll(".inputArea");
  titles[index].textContent = obj.name;
  inputAreas[index].placeholder = obj.place;
  inputAreas[index].type = obj["input-type"];
  if (obj["input-required"] === "true") {
    inputAreas[index].setAttribute("required", "");
  }
};

//change label on save
const form = document.querySelector("#form");
const saveForm = (e) => {
  e.preventDefault();
  let obj = {};
  const fd = new FormData(form);
  for (let [key, value] of fd) {
    obj[key] = value;
  }
  form.reset();
  changeData(obj);
  registerData(obj);
};
form.addEventListener("submit", saveForm);

//
const registerData = (obj) => {
  document.querySelector(".register").addEventListener("click", () => {
    const arr = Array.from(textDrop.children);
    if (arr.length == 0) {
      formData.formField.splice(0);
    } else {
      formData.formField.push(obj);
    }
  });
};

//closing of popup form
const closePopup = () => {
  const popup = document.querySelector(".popup");
  const container = document.querySelector(".container");
  popup.style.transform = "scale(0)";
  container.style.opacity = "1";
  container.style.pointerEvents = "auto";
};

//saving user data on localStorage
const saveItemsInLocalStorage = () => {
  localStorage.setItem("logos", JSON.stringify(logos));
  localStorage.setItem("formData", JSON.stringify(formData.formField));
};

//clearing all selected data and localStorage
const cancelData = document.getElementById("cancelData");
cancelData.addEventListener("click", () => {
  window.location.reload();
  localStorage.clear();
});

//remove append
const deleteBoard = () => {
  const closeMarks = document.querySelectorAll(".close-mark");
  const boardItems = document.querySelectorAll(".board__item");
  for (let i = 0; i < boardItems.length; i++) {
    for (let j = 0; j < closeMarks.length; j++) {
      const boardItem = boardItems[i];
      const closeMark = closeMarks[i];
      closeMark.addEventListener("click", () => {
        boardItem.remove();
      });
    }
  }
};
