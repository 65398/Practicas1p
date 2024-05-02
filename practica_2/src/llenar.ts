import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function llenarCitas() {
  try {
    for (let i = 0; i < 10; i++) {
      const paciente = await prisma.paciente.create({
        data: {
          nombre: 'Natasha Chavez' + (i + 1),
          identificacion: '13659871202' + (i + 1)
        }
      });

      const doctor = await prisma.doctor.create({
        data: {
          nombre: 'Dr. Miguel Perez ' + (i + 1),
          identificacion: '1395871269' + (i + 1)
        }
      });

      const cita = await prisma.cita.create({
        data: {
          fecha: new Date(),
          hora: '09:00',
          sintomas: 'Dolor de cabeza ' + (i + 1),
          paciente: {
            connect: { id: paciente.id }
          },
          doctor: {
            connect: { id: doctor.id }
          }
        },
        include: {
          paciente: true,
          doctor: true
        }
      });

      console.log('Cita creada:', cita);
    }
  } catch (error) {
    console.error('Error al llenar citas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  await llenarCitas();
}

main().catch(error => {
  console.error('Error en la ejecución:', error);
});
