const agregarEvento = async (eventoData) => {
    try {
        const response = await fetch('http://localhost/Backend_web_/AgregarEvento.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventoData),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.id_evento) {
                return { message: 'Evento agregado con éxito', id_evento: data.id_evento };
            } else {
                throw new Error('El ID del evento no está presente en la respuesta');
            }
        } else {
            throw new Error('Error al agregar el evento. Código de estado:', response.status);
        }
    } catch (error) {
        console.error('Error en la solicitud POST:', error);
        return { error: 'Error en la solicitud POST' };
    }
};

export default agregarEvento;
