import { useParams } from "react-router-dom"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom'

const ActivateAccount = () => {
    
    const {password_token, username} = useParams()


    // Referencia al input
    const inputRef = useRef(null)
    const navigate = useNavigate()
    
    // Función para copiar al portapapeles
    const copyToClipboard = () => {
        // Seleccionar el contenido del input
        inputRef.current.select();
        navigator.clipboard.writeText(inputRef.current.value)
            .then(() => {
                console.log('¡Texto copiado al portapapeles!');
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles:', error);
            });
        
        navigate('/changePassword', {state: {userData: {
            forgot_password: true,
            username: username
        }}})
    };


    return(
        <>
            <h3>Este es tu token de cambio de contraseña, copialo y usalo en la pestaña de cambio de contraseña</h3>
            <div>
                <input
                type="text"
                ref={inputRef}
                value={password_token}
                readOnly
                />
            </div>
            <button onClick={copyToClipboard}>Copiar al portapapeles</button>
        </>
        
    )
}

export default ActivateAccount