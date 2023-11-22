const editarEvento = async (editedValues) => {
    try {
        const response = await fetch(`http://localhost/Backend_web_/editarEvento.php`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedValues),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
            return data;
        } else {
            const errorData = await response.json();
            throw new Error(`Error al editar el evento. Código de estado: ${response.status}`);
        }
    } catch (error) {
        console.error('Error en la solicitud de edición:', error);
        throw error;
    }
};

export default editarEvento;
