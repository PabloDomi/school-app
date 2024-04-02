import checkService from "../services/checkServices"

export function useActive () {

    const isUserActive = async (usernameLogin) => {
        console.log('soyyy useActive')
        try{
            const isActive = await checkService.checkActive(usernameLogin)
            console.log(isActive.validUsername)
            const userActive = isActive.validUsername

            return userActive
        } catch(e) {
            console.error('Error validando el usuario', e)
        }  
    }

    return {
        isUserActive,
    }
    
}