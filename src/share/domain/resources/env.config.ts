import { registerAs } from '@nestjs/config';

/**
 *  @description En las aplicaciones de Node.js, es común usar archivos .env, que contienen pares
 *  clave-valor donde cada clave representa un valor particular, para representar cada entorno.
 *  Ejecutar una aplicación en diferentes entornos es solo una cuestión de intercambiar el
 *  archivo .env correcto.
 *
 *  @author Celula Azure
 *
 */
export default registerAs('configuration', () => ({
  PORT: process.env.PORT,
  TIMEOUT: parseInt(process.env.TIMEOUT),
  JWT_SECRET: process.env.JWT_SECRET,
}));
