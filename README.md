🚀 CRUDAUTH - Sistema de Gestión de Cuentas y Empresas

📝 Descripción

CRUDAUTH es una aplicación backend desarrollada en NestJS que proporciona una API RESTful para la gestión de empresas, productos y usuarios. La aplicación está diseñada para ser escalable, modular y fácil de mantener, siguiendo las mejores prácticas de desarrollo de software.

El proyecto utiliza TypeORM para la gestión de la base de datos, Passport para la autenticación basada en JWT, y NestJS como framework principal. Además, se integra con PostgreSQL como base de datos principal.

🌟 Características Principales

Característica	Descripción

🏢 Gestión de Empresas	Creación, lectura, actualización y eliminación (CRUD) de empresas.

📦 Gestión de Productos	CRUD de productos asociados a empresas.

👤 Gestión de Usuarios	CRUD de usuarios y autenticación basada en JWT.

🔐 Autenticación y Autorización	Uso de JWT (JSON Web Tokens) para proteger las rutas de la 


🌱 Seeders	Inicialización de datos de prueba en la base de datos.

📜 Logs Centralizados	Uso de un sistema de logging para monitorear el comportamiento de 
la aplicación.

⚙️ Configuración Dinámica	Uso de variables de entorno para configurar la aplicación.

🛠️ Tecnologías Utilizadas

🟢 NestJS	Framework backend para Node.js.

🗃️ TypeORM	ORM para la gestión de la base de datos.

🐘 PostgreSQL	Base de datos relacional.

🔐 Passport	Middleware de autenticación.

🎫 JWT	JSON Web Tokens para autenticación.

⚙️ ConfigModule	Gestión de variables de entorno.

📜 Logging	Sistema de logs centralizado.

⚙️ Configuración del Proyecto

Requisitos Previos

Node.js (v16 o superior)

PostgreSQL

Nest CLI (npm install -g @nestjs/cli)

Instalación
Clona el repositorio:

git clone https://github.com/tu-usuario/CRUDAUTH.git
cd CRUDAUTH
Instala las dependencias:

npm install
Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto.

Define las siguientes variables:

env

PORT=8080

TIMEOUT=1800000

JWT_SECRET=aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789+AbCdEfGhIjKl=

DATABASE_URL=postgresql://postgres.mdqkqypggdxouqdvgsvz:C8zjzxdMNQX040F2@aws-0-us-west-1.pooler.supabase.com:6543/postgres

Inicia la aplicación:

npm run start

🌐 Endpoints de la API

Autenticación

Método	Endpoint	Descripción

POST	/auth/login	Inicia sesión y devuelve un JWT.

POST	/auth/signup	Registra un nuevo usuario.

Empresas

Método	Endpoint	Descripción

POST	/companies	Crea una nueva empresa.

GET	/companies	Obtiene todas las empresas.

GET	/companies/:id	Obtiene una empresa por su ID.

PUT	/companies/:id	Actualiza una empresa.

DELETE	/companies/:id	Elimina una empresa.

Productos

Método	Endpoint	Descripción

POST	/products	Crea un nuevo producto.

GET	/products	Obtiene todos los productos.

GET	/products/:id	Obtiene un producto por su ID.

PUT	/products/:id	Actualiza un producto.

DELETE	/products/:id	Elimina un producto.

Usuarios

Método	Endpoint	Descripción

POST	/users	Crea un nuevo usuario.

GET	/users	Obtiene todos los usuarios.

GET	/users/:id	Obtiene un usuario por su ID.

PUT	/users/:id	Actualiza un usuario.

DELETE	/users/:id	Elimina un usuario.

🌱 Ejecución de Seeders

Para inicializar la base de datos con datos de prueba, ejecuta el siguiente comando:

npm run seed

📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Ferney Alexis Naranjo Vargas

Email: alexis.naranjo1998@gmail.com

GitHub: Alexis1326

¡Gracias por usar CRUDAUTH! 🚀
