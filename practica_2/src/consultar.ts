import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function consultarCitas() {
    try {
      const citas = await prisma.cita.findMany({
        include: {
          paciente: true,
          doctor: true
        }
      });
      if (citas.length > 0) {
        console.log('Citas encontradas:');
        console.log(citas);
      } else {
        console.log('No se encontraron citas en la base de datos.');
      }
    } catch (error) {
      console.error('Error al consultar citas:', error);
    }
  }

  async function main() {
    await consultarCitas();
  }
  
  main().catch(error => {
    console.error('Error en la ejecución:', error);
  });
  