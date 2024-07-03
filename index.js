// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("loginForm");
//   const errorElement = document.getElementById("error");

//   if (loginForm) {
//     loginForm.addEventListener("submit", function (event) {
//       event.preventDefault();

//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;

//       if (username === "user" && password === "password") {
//         localStorage.setItem("authenticated", "true");
//         window.location.href = "home.html";
//       } else {
//         errorElement.textContent = "Invalid username or password!";
//       }
//     });
//   }

//   const logoutBtn = document.getElementById("logoutBtn");

//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", function () {
//       localStorage.removeItem("authenticated");
//       window.location.href = "index.html";
//     });
//   }

//   const isAuthenticated = sessionStorage.getItem("authenticated");

//   if (window.location.pathname === "/home.html" && !isAuthenticated) {
//     window.location.href = "index.html";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const errorText = document.getElementById("error");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "user" && password === "password") {
        sessionStorage.setItem("auth", "true");
        window.location.href = "/home.html";
      } else {
        errorText.textContent = "Username dan password tidak sesuai";
      }
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      sessionStorage.removeItem("auth");
      window.location.href = "index.html";
    });
  }

  const authenticated = sessionStorage.getItem("auth");

  if (window.location.pathname === "/home.html" && !authenticated) {
    window.location.href = "index.html";
  }
});
