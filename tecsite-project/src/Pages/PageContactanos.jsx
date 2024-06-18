import NavBar from "../Components/NavBar";
import React, { useState } from 'react';
import '../Styles/PageContacto.css';

const PageContactanos = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar el envío del formulario, por ejemplo, enviarlo a una API
        console.log('Form data:', formData);
        // Resetear el formulario
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    return (  
        <>
            <NavBar/>

            <div className="contact">
            <h2>Contáctanos</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Tu Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Tu Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>

        </>
    );
}

export default PageContactanos;