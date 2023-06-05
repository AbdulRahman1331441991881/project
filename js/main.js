document.querySelector(".listSitting .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".listSitting").classList.toggle("open");
};
document.querySelector(".fa-list").addEventListener("click", () => {
  document.querySelector(".hdd .header .link").style.display = "block";
});
document.querySelector(".fa-x").addEventListener("click", () => {
  document.querySelector(".hdd .header .link").style.display = "none";
});
let Colors = document.querySelectorAll(".listSitting .main .colors ul li");
let colorSt = window.localStorage.getItem("color");
let span = document.querySelectorAll(".listSitting .main .background span");
let Scroll = document.querySelectorAll(".listSitting .main .scroll span");
if (colorSt !== null) {
  document.documentElement.style.setProperty(
    "--color",
    window.localStorage.getItem("color")
  );

  Colors.forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.color === colorSt) {
      el.classList.add("active");
    }
  });
}
Colors.forEach((el) => {
  el.addEventListener("click", (el) => {
    document.documentElement.style.setProperty(
      "--color",
      el.target.dataset.color
    );

    window.localStorage.setItem("color", el.target.dataset.color);
    removeActive(el);
 
  });
});
let ArrayImg = document.querySelector(".hdd");
let Img = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];
let Random;
let option = true;
let option2 = "no";
let BackgStoritg = window.localStorage.getItem("back");
if (BackgStoritg !== null) {
  // console.log(BackgStoritg)
  if (BackgStoritg === "true") {
    option = true;
  } else {
    option = false;
  }
  span.forEach((el) => {
    el.classList.remove("active");
  });
  if (BackgStoritg === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
}
// ArrayImg.style.backgroundImage ="url('../imgs/4.jpeg')"

let RandomB = () => {
  if (option === true) {
    Random = setInterval(() => {
      let i = Math.floor(Math.random() * Img.length);
      // console.log(math1)
      ArrayImg.style.cssText = "background-image:url('./imgs/" + Img[i] + "')";
    }, 5000);
  } else {
    // clearInterva(Random);
  }
};
RandomB();
span.forEach((el) => {
  el.addEventListener("click", (el) => {

    removeActive(el);
    if (el.target.dataset.backgrount === "yes") {
      option = true;
      RandomB();
      localStorage.setItem("back", option);
    } else {
      option = false;
      clearInterval(Random);
      localStorage.setItem("back", option);
    }
  });
});

let Skills = document.querySelector(".Skills");
window.addEventListener("scroll", () => {
  let TopScroll = Skills.offsetTop;
  let higtScroll = Skills.offsetHeight;
  let innerHeightScroll = this.innerHeight;
  let PageYScroll = this.pageYoffset;
  if ((PageYScroll = TopScroll + higtScroll - innerHeightScroll)) {
    let Span = document.querySelectorAll(
      ".Skills .box .Skills-box .scroll span"
    );
    Span.forEach((el) => {
      el.style.width = el.dataset.progress;
    });
  } else {
    let Span = document.querySelectorAll(
      ".Skills .box .Skills-box .scroll span"
    );
    Span.forEach((el) => {
      el.style.width = "0%";
    });
  }
});
let Pictur = document.querySelector(".picturs .image");
for (let i = 0; i < 10; i++) {
  let img = document.createElement("img");
  img.style.width = "150px";
  img.style.height = "150px";
  img.style.padding = "10px 10px";
  img.style.border = "1px solid #666";
  // img.style.backgroundColor = "#f00";
  img.classList = "img";

  Pictur.appendChild(img);
}

let imge = document.querySelectorAll(".picturs .image .img");

imge[0].src = "./imgs/1.jpeg";
imge[1].src = "./imgs/2.jpeg";
imge[2].src = "./imgs/3.jpeg";
imge[3].src = "./imgs/4.jpeg";
imge[4].src = "./imgs/5.jpeg";
imge[5].src = "./imgs/6.jpeg";
imge[6].src = "./imgs/download.png";
imge[7].src = "./imgs/images.jpeg";
imge[8].src = "./imgs/photo-1603302576837-37561b2e2302.jpeg";
imge[9].src = "./imgs/hero_endframe__bsza6x4fldiq_large_2x.jpg";
imge.forEach((img) => {
  img.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.classList = "page";
    let Close = document.createElement("div");
    Close.style.cursor = " pointer";
    Close.classList = "X";
    div.appendChild(Close);

    document.body.appendChild(div);
    let pop = document.createElement("div");
    pop.classList = "pop";
    let imge = document.createElement("img");
    imge.classList = "imge";
    imge.src = img.src;
    div.appendChild(imge);
    Close.addEventListener("click", () => {
      Close.parentElement.remove();
    });
  });
});

let bulit = document.querySelectorAll(
  ".hdd .header .link ul li a,.list-bulit .bulit"
);
let h4 = document.querySelectorAll(".list-bulit .bulit h4");
bulit.forEach((el) => {
  el.addEventListener("click", (el) => {
    el.preventDefault();

    document.querySelector(el.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });

  });
});
let bl = document.querySelector(".list-bulit");
let blStoritg = window.localStorage.getItem("bulit");
if (blStoritg !== null) {
  Scroll.forEach((el) => {
    el.classList.remove("active");
  });
  if (blStoritg === "-80px") {
    bl.style.right = "-80px";
    document.querySelector(".scroll .no").classList.add("active");
  } else {
    bl.style.right = "0px";
    document.querySelector(".scroll .yes").classList.add("active");
  }
}
Scroll.forEach((el) => {
  el.addEventListener("click", (el) => {
    removeActive(el);

    if (el.target.dataset.scroll === option2) {
      bl.style.right = "-80px";
      localStorage.setItem("bulit", "-80px");
    } else {
      bl.style.right = "0px";
      localStorage.setItem("bulit", "0px");
    }
  });
});
function removeActive(Element) {
  Element.target.parentElement.querySelectorAll(".active").forEach((ev) => {
    ev.classList.remove("active");
  });
  Element.target.classList.add("active");
}
let data=new Date()

document.querySelector('.h3').innerHTML=data.getFullYear()