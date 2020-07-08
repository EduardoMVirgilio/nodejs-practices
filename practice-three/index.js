const fs = require("fs")

const command = process.argv[2]

let tasks = [
    {
        titulo:"Hacer la cama",
        status: "completa"
    },
    {
        titulo:"Escribir un libro",
        status: "incompleta"
    },
    {
        titulo:"Plantar un árbol",
        status: "completa"
    },
    {
        titulo:"Tener Familia",
        status: "incompleta"
    },
]

fs.writeFileSync("./task.json",JSON.stringify(tasks,null,2))


switch (command) {
    case "listar":
        let taskJSON = JSON.parse(fs.readFileSync("./task.json","utf-8"))
        taskJSON.forEach(task => console.log("\n",task.titulo,task.status))
    break;

    case "detalle":
        let task = JSON.parse(fs.readFileSync("./task.json","utf-8")).find( 
            (task,index) => index == Number( process.argv[3] - 1 ) )
        console.log("\n",task.titulo,task.status,"\n")
    break;

    case "incompletas":
        let incompletes = JSON.parse(fs.readFileSync("./task.json","utf-8")).filter(task => task.status == "incompleta")
        incompletes.forEach(task => console.log("\n",task.titulo,task.status,"\n"))
        console.log("\n Total de las tareas incompletas",incompletes.length,"\n")
    break;

    case "completas":
        let completes = JSON.parse(fs.readFileSync("./task.json","utf-8")).filter(task => task.status == "completa")
        completes.forEach(task => console.log("\n",task.titulo,task.status,"\n"))
        console.log("\n Total de las tareas completas",completes.length,"\n")
    break;

    case "eliminar":
        
        let todosMenosUno = tasks.filter( 
            (task,index) => index != Number( process.argv[3] - 1 ) 
        )
        
        fs.writeFileSync("./task.json",JSON.stringify(todosMenosUno,null,2))
    break;

    case "agregar":
        let oldTasks = JSON.parse(fs.readFileSync("./task.json","utf-8"))

        oldTasks.push({
            titulo: process.argv[3],
            status: process.argv[4]
        })
        
        fs.writeFileSync("./task.json",JSON.stringify(oldTasks,null,2))
    break;

    case "modificar":
        let newTasks = JSON.parse(fs.readFileSync("./task.json","utf-8"))

        newTasks.map( (task) => {
            if ( newTasks.indexOf(task) == Number(process.argv[3]-1) ) {
                    task.status = task.status == "completa" ? "incompleta": "completa"
                    return task
            }
                return task;
            }
        ) 
        
        fs.writeFileSync("./task.json",JSON.stringify(newTasks,null,2))
    break;


    default:
        console.error("No se encontro el comando")
    break;
}
