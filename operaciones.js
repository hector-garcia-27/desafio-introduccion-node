const fs = require('fs')

const leerCitas = () => {
    try {
        const leer = JSON.parse(fs.readFileSync("citas.json", "utf-8"))
        console.log(leer)
    } catch (error) {
        console.log(error)
    }
}

const registrarCitas = (nombre, edad, tipo, color, enfermedad) => {
    try {
        const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"))
        citas.push({nombre, edad, tipo, color, enfermedad})
        fs.writeFileSync("citas.json", JSON.stringify(citas))
        console.log("la cita se ha registrado con exito")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {leerCitas, registrarCitas}