//EN-Readme

Setup Guide and Application Overview
This application is designed to manage tasks, utilizing React with Vite and Firebase for authentication and data handling. Here's how to set up the application for use and an overview of how it operates.

Setup:
1. Clone the Repository:
Copy code
git clone <repository-url>
2. Install Dependencies:
Navigate to the project directory and run:
Copy code
npm install
3. Start the Development Server:
sh
Copy code
npm run dev
4. Firebase Setup:
Ensure you have your Firebase project already set up. If not, follow the mentioned steps above to configure Firestore and Firebase Authentication.

Application Structure:
1. Authentication:
AuthProvider: Manages user authentication state using Firebase's authentication service and provides user information throughout the application using context.
useAuth: Custom hook for accessing authentication state and user information from any component.
ProtectedRoute: Ensures that certain routes/components are only accessible by authenticated users.
2. Task Management:
Task Services: These consist of functions to interact with Firestore to perform CRUD operations on tasks.
TaskList: Renders a list of tasks, allowing users to update and delete them.
TaskItem: Represents a single task item with functionalities like toggling completed state and deletion.
3. Application Routes:
Login, SignUp, and ChangePassword: Handle user authentication processes.
Dashboard: The main interface for task management for authenticated users.
App Component: Defines the routes and wraps the entire application within the AuthProvider.
How it Works:
User Authentication:

Users can sign up, log in, and change their password using Firebase Authentication.
Authentication state is globally managed using the AuthProvider component, allowing easy access to user information via the useAuth hook.
Protected routes ensure unauthorized users do not access private areas.
Task Management:

Once authenticated, users can create, update, and delete tasks.
Created tasks are stored in Firestore, and any task updates or deletions are reflected in real-time in the Firestore database.
With this setup and clear structure, any user should be able to easily configure and use the application for task management.



//ES-Readme 

Guía de Configuración y Descripción de la Aplicación
Esta aplicación está diseñada para gestionar tareas, utilizando React con Vite y Firebase para la autenticación y el manejo de datos. Aquí se describe cómo configurar la aplicación para su uso y un resumen de cómo funciona.

Configuración:
1. Clonar el Repositorio:
sh
Copy code
git clone <url-del-repositorio>
2. Instalar las Dependencias:
Navega al directorio del proyecto y ejecuta:
npm install
3. Iniciar el Servidor de Desarrollo:
npm run dev
4. Configuración de Firebase:
Asegúrate de que ya tienes configurado tu proyecto en Firebase. Si aún no lo has hecho, sigue los pasos mencionados anteriormente para configurar Firestore y la Autenticación de Firebase.

Estructura de la Aplicación:
1. Autenticación:
AuthProvider: Gestiona el estado de autenticación del usuario usando el servicio de autenticación de Firebase y provee información del usuario a través de la aplicación usando context.
useAuth: Hook personalizado para acceder al estado de autenticación y a la información del usuario desde cualquier componente.
ProtectedRoute: Asegura que ciertas rutas/componentes sólo sean accesibles por usuarios autenticados.
2. Gestión de Tareas:
Servicios de Tarea: Consisten en funciones para interactuar con Firestore para realizar operaciones CRUD en tareas.
TaskList: Renderiza una lista de tareas, permitiendo a los usuarios actualizarlas y eliminarlas.
TaskItem: Representa un único ítem de tarea con funcionalidades como cambiar el estado de completado y eliminación.
3. Rutas de la Aplicación:
Login, SignUp, y ChangePassword: Manejan los procesos de autenticación de usuarios.
Dashboard: La interfaz principal para la gestión de tareas para usuarios autenticados.
Componente App: Define las rutas y envuelve toda la aplicación dentro del AuthProvider.
Cómo Funciona:
Autenticación de Usuario:

Los usuarios pueden registrarse, iniciar sesión y cambiar su contraseña utilizando Firebase Authentication.
El estado de autenticación se gestiona globalmente utilizando el componente AuthProvider, permitiendo el fácil acceso a la información del usuario mediante el hook useAuth.
Las rutas protegidas aseguran que los usuarios no autorizados no accedan a áreas privadas.
Gestión de Tareas:

Una vez autenticados, los usuarios pueden crear, actualizar y eliminar tareas.
Las tareas creadas son almacenadas en Firestore, y cualquier actualización o eliminación de tareas se reflejará en tiempo real en la base de datos de Firestore.
Con esta configuración y estructura clara, cualquier usuario debería poder configurar y usar la aplicación fácilmente para gestionar tareas.