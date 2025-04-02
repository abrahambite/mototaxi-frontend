document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registroForm");

    // ✅ LOGIN CON TELÉFONO
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const telefono = document.getElementById("telefono").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("https://mototaxi-api-production.up.railway.app/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ telefono, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert("Inicio de sesión exitoso. Redirigiendo...");
                    window.location.href = "solicitud-viaje.html";
                } else {
                    alert("Error en el login: " + data.error);
                }
            } catch (error) {
                console.error("Error en el login:", error);
            }
        });
    }

    // ✅ REGISTRO CON TELÉFONO
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const telefono = document.getElementById("telefono").value;
            const password = document.getElementById("password").value;
            const userType = document.getElementById("tipo_usuario").value;
            const licencia = document.getElementById("licencia") ? document.getElementById("licencia").value : "";
            const vehiculo = document.getElementById("vehiculo") ? document.getElementById("vehiculo").value : "";

            try {
                const response = await fetch("https://mototaxi-api-production.up.railway.app/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nombre, telefono, password, userType, licencia, vehiculo })
                });

                const data = await response.json();

                if (response.ok) {
                    alert("Registro exitoso. Redirigiendo al login...");
                    window.location.href = "index.html";
                } else {
                    alert("Error en el registro: " + data.error);
                }
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        });
    }
});