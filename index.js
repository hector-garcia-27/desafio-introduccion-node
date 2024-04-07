const {leerCitas, registrarCitas} = require("./operaciones.js")

const [accion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if (accion === "leer") {
    leerCitas()
} else if (accion === "registrar") {
    registrarCitas(nombre, edad, tipo, color, enfermedad)
} else {
    console.log("los comandos no coinciden")
}