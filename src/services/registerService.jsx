import checkService from './checkServices'
import postService from './postServices'

const validateUsername = async (username) => {
    try {
        const data = checkService.checkUsername(username)
        return data
    } catch(e){
        console.log('error en el registro', e)
    }
   
}

const validateEmail = (email) => {
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    } catch(e){console.log('error en el registro', e)}
    
};

const validatePasswordMatch = (password, repeatPassword) => {
    return password === repeatPassword;
};

const isValidData = (user) => {
    return Object.values(user).every(value => value !== "");
};

const isTokenValid = (token) => {
    return !!token
}

const registerStd = (user) => {
    try {user.rol = 1
        const data = postService.registerStudent(user)
        return data} catch(e){console.log('error en el registro', e)}
    
}

const registerTch = (user) => {
    try {user.rol = 2
        const data = postService.registerTeacher(user)
        return data} catch(e){console.log('error en el registro', e)}
    
}

const register = async credentials => {

    const {repeatPassword, ...teacherUser} = credentials
    
    const {teacher_token, ...studentUser} = teacherUser

    console.log(teacherUser)
    console.log(studentUser)

    if (!isValidData(studentUser))
        return console.error("Al menos un campo del registro es inválido.");

    if (!await validateUsername(teacherUser.username))
        return console.error("¡Este nombre de usuario ya existe!")

    if (!validateEmail(teacherUser.email))
        return console.error("Debe escribir un email válido.")

    if (!validatePasswordMatch(teacherUser.password, repeatPassword))
        return console.error("¡Las contraseñas no coinciden!")

    if(teacherUser.rol === 'Alumno') {
        return await registerStd(studentUser)
    } else if(teacherUser.rol === 'Profesor' && isTokenValid(teacher_token)) {
        return await registerTch(teacherUser)
    } else {
        return console.error("El token de 'Profesor' no es válido.")
    }

}

   

export default { register }




