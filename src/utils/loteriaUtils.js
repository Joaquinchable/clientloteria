// import axios from 'axios'; // Por ejemplo, para realizar peticiones HTTP

// const baseUrl = 'http://localhost:3001'; 
// // Función para generar las tablas de lotería

// export const generarTablasDeLoteria = async (numeroDeTablas) => {
//   try {
//     const response = await axios.post(`${baseUrl}/generar-tablas`, { numeroDeTablas });
//     return response.data.tablas; // Suponiendo que el servidor responde con las tablas generadas
//   } catch (error) {
//     throw new Error('Error al generar las tablas de lotería');
//   }
// };

// // Función para obtener las cartas disponibles desde la base de datos
// export const obtenerCartasDisponibles = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/cartas-disponibles`);
//     return response.data.cartas; // Suponiendo que el servidor responde con las cartas disponibles
//   } catch (error) {
//     throw new Error('Error al obtener las cartas disponibles');
//   }
// };
