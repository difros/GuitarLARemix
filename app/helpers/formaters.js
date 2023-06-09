const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
}

export function DateFormat(pDate) {
    const fechaNueva = new Date(pDate)
    return fechaNueva.toLocaleDateString('es-ES', dateOptions)
}