export function getImage (img) {
    // Verifica si la url es correcta
    try {
        if (img === null || img === undefined || img === '') // Comprova si es null, undefineied o buit
            throw Error('No image');
        new URL(img);
        return img;
    } catch (error) { // captra error trobat
        // En caso de error, devuelve una imagen por defecto
        return 'src/assets/images/icons/userIcon.png';
    }
}

export function formDate(date) {
    const parsedDate = new Date(date);
    const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}/${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}/${parsedDate.getFullYear()}`;
    return formattedDate;
}