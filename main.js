document.addEventListener("DOMContentLoaded", function () {
  const priceMap = {
    "iPhone 12": {
      64: {
        Пошкоджений: "2500",
        Хороший: "4800",
        "Як новий": "5800",
      },

      128: {
        Пошкоджений: "2600",
        Хороший: "5000",
        "Як новий": "6000",
      },
      256: {
        Пошкоджений: "2700",
        Хороший: "5500",
        "Як новий": "6700",
      },

      512: {
        Пошкоджений: "3700",
        Хороший: "6500",
        "Як новий": "7700",
      },
    },
    "iPhone 13": {
      64: {
        Пошкоджений: "3500",
        Хороший: "5800",
        "Як новий": "6800",
      },

      128: {
        Пошкоджений: "2600",
        Хороший: "5000",
        "Як новий": "6000",
      },
      256: {
        Пошкоджений: "2700",
        Хороший: "5500",
        "Як новий": "6700",
      },

      512: {
        Пошкоджений: "3700",
        Хороший: "6500",
        "Як новий": "7700",
      },
    },
    // ... інші моделі
  };

  function updateDescription(status) {
    const descriptions = document.querySelectorAll(
      ".description-text1, .description-text2, .description-text3"
    );
    descriptions.forEach((desc) => (desc.style.display = "none")); // сховати всі описи

    if (status === "Пошкоджений") {
      document.querySelector(".description-text1").style.display = "block";
    } else if (status === "Хороший") {
      document.querySelector(".description-text2").style.display = "block";
    } else if (status === "Як новий") {
      document.querySelector(".description-text3").style.display = "block";
    }
  }

  function updatePrice() {
    const modelValue = document.getElementById("model").value;
    if (priceMap[modelValue] && priceMap[modelValue][memoryValue]) {
      const priceValue = priceMap[modelValue][memoryValue][statusValue];
      document.getElementById("total").value = priceValue;
    } else {
      // Ось ця частина може бути використана для відображення помилки або дефолтного значення.
      document.getElementById("total").value = "Ціна недоступна";
    }
    const memoryValue = document.querySelector(
      'input[name="radio"]:checked'
    ).value;
    const statusValue = document.getElementById("statustotal").value;
    const priceValue = priceMap[memoryValue][statusValue];

    document.getElementById("total").value = priceValue;
  }

  // Слухаємо зміни для радіо кнопок пам'яті
  const memoryRadios = document.querySelectorAll('input[name="radio"]');
  memoryRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      document.getElementById("memorytotal").value = this.value;
      updatePrice();
    });
  });

  // Слухаємо клік для стану телефону
  const statusButtons = document.querySelectorAll(".status");
  statusButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.getElementById("statustotal").value = this.value;
      updateDescription(this.value);
      updatePrice();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button"); // замініть ".button" на відповідний клас або селектор для ваших кнопок

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active-button");
      });
      button.classList.add("active-button");
    });
  });
});

document.getElementById("model").addEventListener("change", updatePrice);
