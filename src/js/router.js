import * as HandleStyle from "./changeStyle.js";

export class Router {
  routes = {};

  add(pathName, page) {
    this.routes[pathName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    HandleStyle.pushAndRemoveBoldLinks(pathname);
    HandleStyle.BackgroundImg(pathname);
    HandleStyle.toogleClassMain(pathname);
    fetch(route)
      .then((route) => route.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
