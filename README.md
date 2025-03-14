🚀 CRUDAUTH - Sistema de Gestión de Cuentas y Empresas
📝 Descripción
CRUDAUTH es una aplicación backend desarrollada en NestJS que proporciona una API RESTful para la gestión de empresas, productos y usuarios. La aplicación está diseñada para ser escalable, modular y fácil de mantener, siguiendo las mejores prácticas de desarrollo de software.

El proyecto utiliza TypeORM para la gestión de la base de datos, Passport para la autenticación basada en JWT, y NestJS como framework principal. Además, se integra con PostgreSQL como base de datos principal.

🌟 Características Principales
Gestión de Empresas: Creación, lectura, actualización y eliminación (CRUD) de empresas.

Gestión de Productos: CRUD de productos asociados a empresas.

Gestión de Usuarios: CRUD de usuarios y autenticación basada en JWT.

Autenticación y Autorización: Uso de JWT (JSON Web Tokens) para proteger las rutas de la API.

Seeders: Inicialización de datos de prueba en la base de datos.

Logs Centralizados: Uso de un sistema de logging para monitorear el comportamiento de la aplicación.

Configuración Dinámica: Uso de variables de entorno para configurar la aplicación.

🗂️ Estructura del Proyecto
El proyecto sigue una estructura modular y organizada:

Copy
📦src
 ┣ 📂auth
 ┃ ┣ 📂dto
 ┃ ┃ ┣ 📜createUser.dto.ts
 ┃ ┃ ┗ 📜login.dto.ts
 ┃ ┣ 📂strategies
 ┃ ┃ ┗ 📜jwt.strategy.ts
 ┃ ┣ 📜auth.controller.ts
 ┃ ┣ 📜auth.module.ts
 ┃ ┗ 📜auth.service.ts
 ┣ 📂companies
 ┃ ┣ 📂application
 ┃ ┃ ┗ 📜companies.service.ts
 ┃ ┣ 📂domain
 ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┣ 📜createCompanyDto.ts
 ┃ ┃ ┃ ┗ 📜updateCompanyDto.ts
 ┃ ┗ 📂interfaces
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜companies.controller.ts
 ┃ ┃ ┗ 📂module
 ┃ ┃ ┃ ┗ 📜companies.module.ts
 ┣ 📂products
 ┃ ┣ 📂application
 ┃ ┃ ┗ 📜products.service.ts
 ┃ ┣ 📂domain
 ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┣ 📜createProductDto.ts
 ┃ ┃ ┃ ┗ 📜updateProductDto.ts
 ┃ ┗ 📂interfaces
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜products.controller.ts
 ┃ ┃ ┗ 📂module
 ┃ ┃ ┃ ┗ 📜products.module.ts
 ┣ 📂share
 ┃ ┗ 📂domain
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┣ 📜apm.interceptor.ts
 ┃ ┃ ┃ ┣ 📜global.module.ts
 ┃ ┃ ┃ ┣ 📜http-exception.filter.ts
 ┃ ┃ ┃ ┣ 📜logger20.service.ts
 ┃ ┃ ┃ ┣ 📜processTime.service.ts
 ┃ ┃ ┃ ┣ 📜response.interceptor.ts
 ┃ ┃ ┃ ┣ 📜timeout.interceptors.ts
 ┃ ┃ ┃ ┗ 📜transactionId.provider.ts
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜apiResponse.dto.ts
 ┃ ┃ ┃ ┗ 📜errorResponse.dto.ts
 ┃ ┃ ┣ 📂infraestructura
 ┃ ┃ ┃ ┣ 📂database
 ┃ ┃ ┃ ┃ ┗ 📜database.module.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┣ 📜city.entity.ts
 ┃ ┃ ┃ ┃ ┣ 📜company.entity.ts
 ┃ ┃ ┃ ┃ ┣ 📜department.entity.ts
 ┃ ┃ ┃ ┃ ┣ 📜product.entity.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.entity.ts
 ┃ ┃ ┃ ┗ 📂seed
 ┃ ┃ ┃ ┃ ┣ 📜seed.controller.ts
 ┃ ┃ ┃ ┃ ┣ 📜seed.module.ts
 ┃ ┃ ┃ ┃ ┗ 📜seed.service.ts
 ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┃ ┗ 📜env.config.ts
 ┣ 📂users
 ┃ ┣ 📂application
 ┃ ┃ ┗ 📜users.service.ts
 ┃ ┣ 📂domain
 ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┣ 📜createUserDto.dto.ts
 ┃ ┃ ┃ ┗ 📜updateUserDto.ts
 ┃ ┗ 📂interfaces
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜users.controller.ts
 ┃ ┃ ┗ 📂module
 ┃ ┃ ┃ ┗ 📜users.module.ts
 ┣ 📜app.module.ts
 ┗ 📜main.ts
🛠️ Tecnologías Utilizadas
NestJS: Framework backend para Node.js.

TypeORM: ORM para la gestión de la base de datos.

PostgreSQL: Base de datos relacional.

Passport: Middleware de autenticación.

JWT: JSON Web Tokens para autenticación.

ConfigModule: Gestión de variables de entorno.

Logging: Sistema de logs centralizado.

⚙️ Configuración del Proyecto
Requisitos Previos
Node.js (v16 o superior)

PostgreSQL

Nest CLI (npm install -g @nestjs/cli)

Instalación
Clona el repositorio:

bash
Copy
git clone https://github.com/tu-usuario/CRUDAUTH.git
cd CRUDAUTH
Instala las dependencias:

bash
Copy
npm install
Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto.

Define las siguientes variables:

env
Copy
PORT=8080
TIMEOUT=1800000
JWT_SECRET=aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789+AbCdEfGhIjKl=
DATABASE_URL=postgresql://postgres.mdqkqypggdxouqdvgsvz:C8zjzxdMNQX040F2@aws-0-us-west-1.pooler.supabase.com:6543/postgres
Ejecuta las migraciones de TypeORM:

bash
Copy
npm run typeorm migration:run
Inicia la aplicación:

bash
Copy
npm run start
🌐 Endpoints de la API
Autenticación
POST /auth/login: Inicia sesión y devuelve un JWT.

POST /auth/signup: Registra un nuevo usuario.

Empresas
POST /companies: Crea una nueva empresa.

GET /companies: Obtiene todas las empresas.

GET /companies/:id: Obtiene una empresa por su ID.

PUT /companies/:id: Actualiza una empresa.

DELETE /companies/:id: Elimina una empresa.

Productos
POST /products: Crea un nuevo producto.

GET /products: Obtiene todos los productos.

GET /products/:id: Obtiene un producto por su ID.

PUT /products/:id: Actualiza un producto.

DELETE /products/:id: Elimina un producto.

Usuarios
POST /users: Crea un nuevo usuario.

GET /users: Obtiene todos los usuarios.

GET /users/:id: Obtiene un usuario por su ID.

PUT /users/:id: Actualiza un usuario.

DELETE /users/:id: Elimina un usuario.

🌱 Ejecución de Seeders
Para inicializar la base de datos con datos de prueba, ejecuta el siguiente comando:

bash
Copy
npm run seed
📧 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Ferney Alexis Naranjo Vargas

Email: alexis.naranjo1998@gmail.com

GitHub: Alexis1326

¡Gracias por usar CRUDAUTH! 🚀
