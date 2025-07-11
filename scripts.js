/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const patrones = [
    {nombre: "Abstract Factory", descripcion: "Proporciona una interfaz para crear familias de objetos relacionados."},
    {nombre: "Adapter", descripcion: "Permite que dos interfaces incompatibles trabajen juntas."},
    {nombre: "Orden de bloqueo", descripcion: "Gestiona el acceso concurrente a recursos compartidos."},
    {nombre: "Bridge", descripcion: "Separa una abstracción de su implementación."},
    {nombre: "Builder", descripcion: "Construye objetos complejos paso a paso."},
    {nombre: "Chain of responsability", descripcion: "Encadena objetos para procesar una solicitud."},
    {nombre: "Command", descripcion: "Encapsula una solicitud como objeto."},
    {nombre: "Composite", descripcion: "Trata objetos individuales y composiciones de manera uniforme."},
    {nombre: "Decorator", descripcion: "Agrega responsabilidades a un objeto dinámicamente."},
    {nombre: "Facade", descripcion: "Proporciona una interfaz unificada a un conjunto de interfaces."},
    {nombre: "Factory", descripcion: "Crea objetos sin exponer la lógica de creación."},
    {nombre: "Flyweight", descripcion: "Reduce el uso de memoria compartiendo objetos comunes."},
    {nombre: "Iterator", descripcion: "Accede secuencialmente a los elementos de un objeto."},
    {nombre: "Mediador", descripcion: "Facilita la comunicación entre objetos sin que se conozcan."},
    {nombre: "Memento", descripcion: "Captura y restaura el estado interno de un objeto."},
    {nombre: "Observer", descripcion: "Notifica cambios a múltiples objetos dependientes."},
    {nombre: "Prototype", descripcion: "Clona objetos existentes sin acoplarse a sus clases."},
    {nombre: "Proxy", descripcion: "Proporciona un sustituto o representante de otro objeto."},
    {nombre: "Seccion critica", descripcion: "Controla el acceso a secciones críticas de código."},
    {nombre: "Singleton", descripcion: "Asegura una única instancia de una clase."},
    {nombre: "State", descripcion: "Permite cambiar el comportamiento cuando cambia su estado."},
    {nombre: "Strategy", descripcion: "Define una familia de algoritmos intercambiables."},
    {nombre: "Concurrencia suspendida", descripcion: "Gestiona operaciones en espera hasta que se reanuden."},
    {nombre: "Template", descripcion: "Define el esqueleto de un algoritmo y delega pasos."},
    {nombre: "Visitor", descripcion: "Permite definir nuevas operaciones sin cambiar clases."},
];

const tabla = document.getElementById("tabla-patrones");

patrones.forEach(p => {
    const fila = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = p.nombre.replace("Ejercicios_", "");

    const tdDesc = document.createElement("td");
    tdDesc.textContent = p.descripcion;

    const tdBoton = document.createElement("td");
    const boton = document.createElement("button");
    boton.textContent = "Descargar";
    boton.onclick = () => {
        const enlace = document.createElement("a");
        enlace.href = `zips/Ejercicios_${p.nombre}.zip`;
        enlace.download = `Ejercicios_${p.nombre}.zip`;
        enlace.click();
    };
    tdBoton.appendChild(boton);

    fila.appendChild(tdNombre);
    fila.appendChild(tdDesc);
    fila.appendChild(tdBoton);
    tabla.appendChild(fila);
});

