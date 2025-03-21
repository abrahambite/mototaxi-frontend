document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // 📌 Manejar LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("https://mototaxi-api-production.up.railway.app/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert("Inicio de sesión exitoso. Redirigiendo...");
                    window.location.href = "solicitud-viaje.html"; // Redirigir a la solicitud de viaje
                } else {
                    alert("Error: " + data.error);
                }
            } catch (error) {
                console.error("Error en el login:", error);
            }
        });
    }

    // 📌 Manejar REGISTRO
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const userType = document.getElementById("userType").value;

            try {
                const response = await fetch("https://mototaxi-api-production.up.railway.app/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password, userType })
                });

                const data = await response.json();

                if (response.ok) {
                    alert("Registro exitoso. Redirigiendo al login...");
                    window.location.href = "index.html.html"; // Redirigir al login
                } else {
                    alert("Error en el registro: " + data.error);
                }
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        });
    }
});
