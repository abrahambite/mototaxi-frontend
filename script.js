document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // ?? Manejar LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("Intentando login con:", email, password); // ?? Depuraci車n

            try {
                const response = await fetch("https://mototaxi-api-production.up.railway.app/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                console.log("Respuesta del backend:", data); // ?? Depuraci車n

                if (response.ok) {
                    alert("Inicio de sesi車n exitoso. Redirigiendo...");
                    window.location.href = "solicitud-viaje.html"; // Redirige a la p芍gina de solicitud
                } else {
                    alert("Error en el login: " + data.error);
                }
            } catch (error) {
                console.error("Error en el login:", error);
            }
        });
    }

    // ?? Manejar REGISTRO
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const userType = document.getElementById("tipo_usuario").value;
            const licencia = document.getElementById("licencia") ? document.getElementById("licencia").value : "";
            const vehiculo = document.getElementById("vehiculo") ? document.getElementById("vehiculo").value : "";

            console.log("Intentando registro con:", nombre, email, password, userType, licencia, vehiculo); // ?? Depuraci車n

            try {
                const response = await fetch("https://mototaxi-api-production.up.railway.app/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nombre, email, password, userType, licencia, vehiculo })
                });

                const data = await response.json();

                console.log("Respuesta del backend:", data); // ?? Depuraci車n

                if (response.ok) {
                    alert("Registro exitoso. Redirigiendo al login...");
                    window.location.href = "index.html.html"; // Redirige al login
                } else {
                    alert("Error en el registro: " + data.error);
                }
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        });
    }
});
