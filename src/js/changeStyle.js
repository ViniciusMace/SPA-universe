const body = document.querySelector("body");
const main = document.querySelector("main");

const listLinks = document.querySelectorAll("a");

export function BackgroundImg(pathName) {
  switch (pathName) {
    case "/":
      body.style.backgroundImage = "url(/assets/mountains-universe-1.png)";
      break;
    case "/universe":
      body.style.backgroundImage = "url(/assets/mountains-universe02.png)";
      break;
    case "/exploration":
      body.style.backgroundImage = "url(/assets/mountains-universe-3.png)";
      break;
  }
}

export function pushAndRemoveBoldLinks(pathName) {
  listLinks.forEach((element) => {
    if (element.pathname == pathName) {
      return element.classList.add("bold");
    }

    element.classList.remove("bold");
  });
}

export function toogleClassMain(pathName) {
  if (pathName == "/universe" || pathName == "/exploration")
    return main.classList.add("content-text");

  return main.classList.remove("content-text");
}
