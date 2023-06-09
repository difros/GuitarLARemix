export async function GET(uri) {
    const https = require('https')
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    })

    const url = `${process.env.API_URL}/${uri}`
    const respuesta = await fetch(url, {
        agent: httpsAgent
    })
    const resultado = await respuesta.json()
    return resultado
}