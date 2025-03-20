document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("rideRequestForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Obtener valores del formulario
        const origen = document.getElementById("origen").value;
        const destino = document.getElementById("destino").value;

        if (!origen || !destino) {
            alert("Por favor, ingresa origen y destino.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/rides/request", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ origen, destino }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Viaje solicitado con éxito. ID: ${data.viajeId}`);
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Hubo un problema al conectar con el servidor.");
        }
    });
});
