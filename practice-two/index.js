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

switch (command) {
    case "listar":
        tasks.forEach(task => console.log(task))
    break;

    case "detalle":
        console.log( tasks.find( (task,index) => index == Number( process.argv[3] - 1 ) ) )
    break;

    case "incompletas":
        tasks.filter(task => task.status == "incompleta").forEach(task => console.log(task))
        console.log("Total de las tareas incompletas",tasks.filter(task => task.status == "incompleta").length)
    break;

    case "completas":
        tasks.filter(task => task.status == "completa").forEach(task => console.log(task))
        console.log("Total de las tareas completas",tasks.filter(task => task.status == "completa").length)
    break;

    case "eliminar":
        console.log( tasks.filter( (task,index) => index != Number( process.argv[3] - 1 ) ) )
    break;

    case "agregar":
        tasks.push({
            titulo: process.argv[3],
            status: process.argv[4]
        })
        tasks.forEach(task => console.log(task.titulo,task.status,"\n"))
    break;

    case "modificar":
        console.log( 
            tasks.map( (task,index) => index == Number( process.argv[3] - 1 ) ? 
            {   
                titulo: tasks[Number( process.argv[3] - 1 )].titulo ,
                status: tasks[Number( process.argv[3] - 1 )].status == "completa" ? "incompleta" : "completa" 
            }  : task  ) 
        )
    break;


    default:
        console.error("No se encontro el comando")
    break;
}
