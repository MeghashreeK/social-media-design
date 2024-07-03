const menuItems = document.querySelectorAll(".menu-items");
const sideBar = document.querySelector(".sidebar");
const notifications = document.querySelector("#notifications");
const tools = document.querySelector("#tools");
// --------------------------MESSAGE--------------------------
const messageSearchbar = document.querySelector("#message-search");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const msgSidebar = document.querySelector("#messages-notifications");
// --------------------------THEME-CUSTOMIZATION--------------------------
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");
const themeCard = document.querySelector(".card");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
// --------------------------NOTIFICATIONS & MESSAGES--------------------------
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notification-popup").style.display = "none";
        }
        else {
            document.querySelector(".notification-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
        if (item.id == "messages-notifications") {
            document.querySelector("#messages-notifications .notification-count").style.display = "none";
        }
    });
})
window.addEventListener("touchstart", (event) => {
    const touchElement = event.target;
    if (!notifications.contains(touchElement)) {
        document.querySelector(".notification-popup").style.display = "none";
    }
})
// --------------------------MESSAGE-BOX--------------------------
msgSidebar.addEventListener("click", () => {
    messages.style.border = "1px solid var(--color-primary)";
    setTimeout(() => {
        messages.style.border = "none";
    }, 200);
});

const searchMessage = () => {
    const val = messageSearchbar.value.toLowerCase().trim();
    // console.log(val);
    message.forEach(chat => {
        let names = Array.from(chat.querySelectorAll("h5")).map(h5Element => h5Element.innerText.toLowerCase());
        if (names.some(name => name.includes(val))) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};

messageSearchbar.addEventListener("keyup", searchMessage);

// --------------------------THEME-CUSTOMIZATION MODEL--------------------------
const openThemeModel = () => {
    themeModel.style.display = "grid";
    themeCard.style.border = "2px solid var(--color-primary)";
}
const closeThemeModel = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModel.style.display = "none";
    }
}
theme.addEventListener("click", openThemeModel);
themeModel.addEventListener("click", closeThemeModel);

// --------------------------FONTSIZE-CUSTOMIZATION--------------------------
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "12px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "-7rem");
        }
        else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        }
        else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("----sticky-top-left", "-10rem");
            root.style.setProperty("----sticky-top-right", "-33rem");
        }
        document.querySelector("html").style.fontSize = fontSize;
    })
})
// --------------------------BG-COLOR-CUSTOMIZATION--------------------------
const removeColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove("active");
    })
}
colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        removeColorSelector();
        let primaryHue;
        color.classList.toggle("active");
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        }
        else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        }
        else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        }
        else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        root.style.setProperty("--primary-color-hue", primaryHue);
    })
})
// --------------------------MODE-CUSTOMIZATION--------------------------
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;
bg1.addEventListener("click", () => {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "95%";
    bg1.classList.add("active");
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    changeBG();
})
bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";
    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBG();
})
bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";
    bg3.classList.add("active");
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBG();
})
const changeBG = () => {
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--light-color-lightness", lightColorLightness);
}
// --------------------------DEFAULT FONTSIZE--------------------------
window.addEventListener('DOMContentLoaded', (event) => {
    let flag = 1;
    if (flag == 1) {
        let fontSize;
        fontSize = "10px";
        root.style.setProperty("----sticky-top-left", "5.4rem");
        root.style.setProperty("----sticky-top-right", "5.4rem");
        document.querySelector("html").style.fontSize = fontSize;
    }
});
// --------------------------SWIPING SIDEBAR--------------------------
let touchstartX = 0;
let touchendX = 0;

tools.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
});

tools.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
});
function handleGesture() {
    if (touchendX < touchstartX) {
      document.querySelector(".sidebar").style.display = "block";
      document.querySelector("#tools").style.display = "none";
    } 
  }
  
let touchstartY = 0;
let touchendY = 0;
sideBar.addEventListener('touchstart', function(event) {
    touchstartY = event.changedTouches[0].screenX;
  });
  
  sideBar.addEventListener('touchend', function(event) {
    touchendY = event.changedTouches[0].screenX;
    handleGestures();
  });
function handleGestures() {
    if (touchendY > touchstartY) {
        document.querySelector(".sidebar").style.display = "none";
        document.querySelector("#tools").style.display = "block";
    } 
  }


