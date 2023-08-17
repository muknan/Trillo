const userEl = document.querySelector(".user-nav__user");
const userListEl = document.querySelector(".user-nav__user-list");
const userMenuEl = document.querySelector(".user-nav__menu");

// userEl.addEventListener("click", function () {
//   userListEl.style.cssText = `opacity: 1;
//   visibility: visible;
//   top: 7rem;
// `;

//   //   if (
//   //     userListEl.style.opacity === "0" &&
//   //     userListEl.style.visibility === "hidden"
//   //   ) {
//   //     console.log("hello");
//   //     userListEl.style.cssText = `opacity: 1;
//   //   visibility: visible;
//   // `;
//   //   } else {
//   //     console.log("world");
//   //     userListEl.style.cssText = `opacity: 0;
//   //   visibility: hidden;
//   // `;
//   //   }
// });

userEl.addEventListener("click", function () {
  userListEl.classList.toggle("menu-toggle"), false;
});

userMenuEl.addEventListener(
  "click",
  function (ev) {
    ev.stopPropagation();
  },
  false
);
