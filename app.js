// ============ 1. Tugma bosilganda rangni o'zgartirish ============

const btn = document.getElementById("isChanged-color");
const texts = document.querySelectorAll("#texts p");

let btns = false;

btn.addEventListener("click", function () {
  texts.forEach((value) => {
    if (btns) {
      value.style.color = ["red", "orange", "white", "blue", "brown", "yellow"][
        Math.floor(Math.random() * 4)
      ];
      btns = false;
    } else {
      value.style.color = ["red", "orange", "white", "blue", "brown", "yellow"][
        Math.floor(Math.random() * 4)
      ];
      btns = true;
    }
  });
});

// ============ 2. Inputdagi qiymatni clipboardga nusxalash ============

function myFunction() {
  const copyText = document.getElementById("myInput");
  const xabar = document.getElementById("xabar");

  const text = copyText.value;

  if (text.trim() !== "") {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        xabar.textContent = "Matn nusxalandi!";
        setTimeout(() => {
          xabar.textContent = "";
        }, 3000);
      })
      .catch(() => {
        xabar.textContent = "Matnni nusxalab bo'lmadi!";
        xabar.style.color = "red";
      });
  } else {
    xabar.textContent = "Matn maydoni bo'sh!";
    xabar.style.color = "orange";

    setTimeout(() => {
      xabar.textContent = "";
    }, 3000);
  }
}

// ============ 3. Qidiruv natijasini belgilash ============

function search() {
  const matnElement = document.querySelector("#paragraph");
  const textSearch = document.querySelector("#text-search");

  const searchText = textSearch.value.trim();

  if (searchText === "") {
    xabar2.textContent = "qidiriladigan so'zni yozing!";
    xabar2.style.color = "red";

    setTimeout(() => {
      xabar2.textContent = "";
    }, 3000);
  }

  const originalMatn = matnElement.textContent;

  const regex = new RegExp(searchText, "gi");
  if (originalMatn.match(regex)) {
    const yangilanganMatn = originalMatn.replace(regex, (match) => {
      return `<span style="background-color: yellow">${match}</span>`;
    });
    matnElement.innerHTML = yangilanganMatn;
  } else {
    xabar2.textContent = "qidirilgan so'z topilmadi!";
    xabar2.style.color = "red";

    setTimeout(() => {
      xabar2.textContent = "";
    }, 3000);
  }
}

// ============ 4. Elementni yashirish va ko‘rsatish ============

const paragraphs = document.querySelectorAll("#p");

const hideBtn = document.querySelector("#hide");

const showBtn = document.querySelector("#show");

hideBtn &&
  hideBtn.addEventListener("click", function () {
    paragraphs.forEach((value) => {
      value.style.display = "none";
    });
  });

showBtn &&
  showBtn.addEventListener("click", function () {
    paragraphs.forEach((value) => {
      value.style.display = "block";
    });
  });

// ============ 5. Tugma bosilganda fon rangini o'zgartirish ============

function colorChanged() {
  const btns = document.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const backColor = btn.getAttribute("data-color");
      document.body.style.backgroundColor = backColor;
    });
  });
}

colorChanged();

// ============ 6. Belgilangan matnni kattalashtirish ============

const pText = document.querySelectorAll("#paragraph");

pText.forEach((element) => {
  element.addEventListener("click", function () {
    element.style.fontSize = "50px";
  });
});

// ============ 7. Ko‘zgu (mirror) effekti ============

function mirror() {
  const inputText = document.querySelector("#mirrorInput");
  const outputText = document.querySelector("#mirrorOutput");

  inputText.addEventListener("input", function () {
    outputText.textContent = inputText.value;
  });
}

mirror();

// ============ 8. Parolni ko‘rsatish/yashirish ============

const passwordInput = document.querySelector("#passwordInput");
const showPassword = document.querySelector("#showPassword");

showPassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPassword.textContent = "Yashirish";
  } else {
    passwordInput.type = "password";
    showPassword.textContent = "Ko‘rsatish";
  }
});

// ============ 9. Elementni boshqarish ============

const square = document.querySelector("#square");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let topPosition = 0;
let leftPosition = 0;

up.addEventListener("click", function () {
  topPosition -= 10;
  square.style.marginTop = `${topPosition}px`;
});

down.addEventListener("click", function () {
  topPosition += 10;
  square.style.marginTop = `${topPosition}px`;
});

left.addEventListener("click", function () {
  leftPosition -= 10;
  square.style.marginLeft = `${leftPosition}px`;
});

right.addEventListener("click", function () {
  leftPosition += 10;
  square.style.marginLeft = `${leftPosition}px`;
});

// ============ 10. Tasodifiy rasm ko'rsatish ============


// ============ 11. Paragraflarni yashirish va ko‘rsatish ============

const p = document.querySelectorAll("#paragraf");

const hide = document.querySelector("#hide-btn");

const show = document.querySelector("#show-btn");

hide &&
  hide.addEventListener("click", function () {
    p.forEach((value) => {
      value.style.display = "none";
    });
  });

show &&
  show.addEventListener("click", function () {
    p.forEach((value) => {
      value.style.display = "block";
    });
  });

// ============ 12. Matnni almashtirish ============

const paragraph = document.querySelectorAll("#text");

paragraph.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    paragraph.innerText = "qonday eee";
  });
});
