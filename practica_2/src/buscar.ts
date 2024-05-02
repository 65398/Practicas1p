import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function buscarCitaPorId(id: number) {
    try {
      const citaEncontrada = await prisma.cita.findUnique({
        where: {
          id: id
        },
        include: {
          paciente: true,
          doctor: true
        }
      });
      if (citaEncontrada) {
        console.log('Cita encontrada:');
        console.log(citaEncontrada);
      } else {
        console.log('No se encontró ninguna cita con el ID proporcionado.');
      }
    } catch (error) {
      console.error('Error al buscar la cita:', error);
    }
  }

  async function main() {
    await buscarCitaPorId(1);
  }
  
  main().catch(error => {
    console.error('Error en la ejecución:', error);
  });
  