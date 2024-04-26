interface Paciente {
    id: number;
    nombre: string;
    identificacion: string;
}

interface Doctor {
    id: number;
    nombre: string;
    identificacion: string;
}

interface Cita {
    id: number;
    idPaciente: number;
    idDoctor: number;
    fecha: string;
    hora: string;
    sintomas: string;
}

const pacientes: Paciente[]=[
  {id:1, nombre:"Juan Chavez", identificacion:"101" },
  {id:2, nombre:"Maria Mera", identificacion:"102" },
  {id:3, nombre:"Manuel Mendoza", identificacion:"103" },
  {id:4, nombre:"Erika Mero", identificacion:"120" },
  {id:5, nombre:"Ana Mieles", identificacion:"115" }
];

const doctores: Doctor[]=[
    {id:1, nombre:"Mario Fernandez", identificacion:"13698" },
    {id:2, nombre:"Diego Reyes", identificacion:"14896" },
    {id:3, nombre:"Marcelo Palma", identificacion:"59865" },
    {id:4, nombre:"Gema Lopez", identificacion:"56984" },
    {id:5, nombre:"Daniel Gomez", identificacion:"69876" }
];

const citas: Cita[]=[
    {id: 1, idPaciente: 1, idDoctor: 1, fecha: "07/05/2024", hora: "08:00 am", sintomas: "Dolor de cabeza"},
    {id: 2, idPaciente: 2, idDoctor: 2, fecha: "10/05/2024", hora: "09:00 am", sintomas: "Fiebre"},
    {id: 3, idPaciente: 3, idDoctor: 3, fecha: "15/05/2024", hora: "09:00 am", sintomas: "Dolor de cabeza"},
    {id: 4, idPaciente: 4, idDoctor: 4, fecha: "10/05/2024", hora: "08:00 am", sintomas: "Fiebre"},
    {id: 5, idPaciente: 5, idDoctor: 5, fecha: "07/05/2024", hora: "10:00 am", sintomas: "Dolor de cabeza"}

]

// forEach
console.log("Pacientes:");
pacientes.forEach(paciente => {
  console.log(paciente);
});

// for in
console.log("Doctores:");
for (let i in doctores) {
  console.log(doctores[i]);
}

// for of
console.log("Citas:");
for (const cita of citas) {
  console.log(cita);
}

// Función con Callback 
function buscarPorId<T>(arreglo: T[], id: number, callback: (elemento: T | undefined) => void) {
  const elemento = arreglo.find((elem: any) => elem.id === id);
  callback(elemento);
}

// Mostrar un paciente por su ID utilizando la función con Callback
buscarPorId<Paciente>(pacientes, 3, (paciente) => {
  console.log("Paciente encontrado:");
  console.log(paciente);
});

//Servicio rest
async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (response.ok) {
      const data = await response.json();
      console.log('Datos obtenidos:');
      console.log(data);
    } else {
      console.log('Error al obtener datos');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

obtenerDatos();