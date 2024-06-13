# 🎮 Proyecto Backend API REST
## 📄 Descripción

Este proyecto es una API RESTful desarrollada con Node.js y Express, que utiliza Mongoose para interactuar con una base de datos MongoDB alojada en MongoDB Atlas. La aplicación está desplegada en Render.com y utiliza Docker para su despliegue.

## 📂 Estructura del Proyecto

La estructura del proyecto es la siguiente:

~~~
backendProyecto2324/
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── emailController.js
│   │   ├── gamesController.js
│   │   ├── indexController.js
│   │   ├── loginController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   │
│   ├── models/
│   │   ├── games.js
│   │   ├── indexModels.js
│   │   ├── order.js
│   │   └── user.js
│   │
│   ├── routes/
│   │   ├── emailRoutes.js
│   │   ├── gamesRoutes.js
│   │   ├── loginRoutes.js
│   │   ├── orderRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── utils/
│   │   ├── bcrypt.js
│   │   ├── catchAsync.js
│   │   ├── clientError.js
│   │   ├── emailController.js
│   │   ├── indexUtils.js
│   │   ├── jwt.js
│   │   ├── resError.js
│   │   ├── response.js
│   │   ├── utils.js
│   │   └── validarDatos.js
│   │
│   └── index.js
│
├── .env
├── .gitignore
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md

~~~

## 🚀 Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### Clonar el repositorio:
 ~~~
git clone <URL_DEL_REPOSITORIO>
cd backendProyecto2324
~~~

### Instalar las dependencias:

~~~
npm install
~~~

### Configurar las variables de entorno:
Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

~~~
PORT=<puerto>
JWT=<jwt>
EMAIL=<pass_email> // esto dependerá del servidor que uses
USERNAME=<username de la bbdd de mongo>
PASS=<password de la bbdd de mongo>
~~~

### Ejecutar la aplicación:

Desarollo:
~~~
npm run dev
~~~
Producción:
~~~
npm start
~~~

### 🐳 Uso de Docker

Para construir y ejecutar la imagen Docker de la aplicación, usa los siguientes comandos:

Construir la imagen:

~~~
docker build -t nombre-imagen .
~~~

### Ejecutar el contenedor:

~~~
docker run -d -p <PUERTO_LOCAL>:<PUERTO_CONTENEDOR> --env-file .env nombre-imagen
~~~

#### ☁️ Despliegue en Render.com

Para desplegar la aplicación en Render.com, sigue estos pasos:

* Crear un nuevo servicio en Render:
Ve a la consola de Render.com y crea un nuevo servicio web, seleccionando tu repositorio.
* Configurar el Dockerfile:
Asegúrate de que Render detecte y use tu Dockerfile para construir la aplicación.
* Definir las variables de entorno:
En la configuración del servicio en Render, define las variables de entorno como se indicó en el archivo .env.
* Desplegar:
Render se encargará de construir y desplegar la aplicación automáticamente.

#### 📬 Endpoints

Aquí tienes una lista de los endpoints disponibles en la API:

* ### 📧 Emails

~~~
POST /contacto - Envía un correo electrónico.
~~~

* ### 🎮 Juegos

~~~
GET /games - Obtiene todos los juegos.
GET /games/:id - Obtiene un juego por su ID.
POST /creargames - Crea un nuevo juego (Requiere autenticación de administrador).
DELETE /borrargames - Elimina un juego por su ID (Requiere autenticación de administrador).
PUT /actualizargames - Actualiza un juego por su ID (Requiere autenticación de administrador).
POST /gamesfilterlimit - Filtra juegos con un límite.
POST /gamesfilter - Filtra juegos.
POST /gamescountgames - Obtiene el conteo de juegos según un filtro.
GET /gamescategory - Obtiene las categorías de juegos.
~~~

* ### 🔒 Autenticación

~~~
POST /login - Inicia sesión y obtiene un token JWT.
POST /validtoken - Valida el token JWT.
~~~

* ### 🛒 Pedidos

~~~
POST /orders - Obtiene todos los pedidos (Requiere autenticación).
GET /order/:id - Obtiene un pedido por su ID (Requiere autenticación).
POST /crearorder - Crea un nuevo pedido (Requiere autenticación).
DELETE /borrarorder/:id - Elimina un pedido por su ID (Requiere autenticación de administrador).
PUT /modificarpedido - Actualiza un pedido (Requiere autenticación de administrador).
~~~

* ### 👥 Usuarios

~~~
GET /users - Obtiene todos los usuarios (Requiere autenticación de administrador).
GET /user/:id - Obtiene un usuario por su ID (Requiere autenticación).
POST /crearusuario - Crea un nuevo usuario.
DELETE /borrarusuario/:id - Elimina un usuario por su ID (Requiere autenticación de administrador).
PUT /actualizarusuario - Actualiza un usuario por su ID (Requiere autenticación).
POST /usersfilter - Filtra usuarios (Requiere autenticación de administrador).
~~~

### 🛠️ Tecnologías Utilizadas

    Node.js: Entorno de ejecución para JavaScript.
    Express: Framework para aplicaciones web en Node.js.
    Mongoose: ODM para MongoDB.
    MongoDB Atlas: Servicio de base de datos en la nube.
    Docker: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
    Render.com: Plataforma de despliegue.

### 📜 Creador

Este proyecto está ha sido creado por Elisabet D'Acosta Almirón