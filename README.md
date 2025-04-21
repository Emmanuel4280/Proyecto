# Proyecto


Created with CodeSandbox
# 🐶 Adogtame

**Adogtame** es una aplicación web pensada para ayudar a reducir el número de perros sin hogar, facilitando el proceso de adopción responsable. Permite a los usuarios subir información sobre perros en adopción y también ver perfiles de perros disponibles, incluyendo detalles del dueño o contacto responsable.

---

## 🎯 Objetivo

Conectar a personas que desean dar en adopción a sus mascotas con usuarios interesados en adoptar perros de manera responsable, ayudando así a disminuir la cantidad de perros sin hogar.

---

## 👥 Público objetivo

- Amantes de los animales
- Personas interesadas en adoptar mascotas
- Refugios o dueños que desean ofrecer perros en adopción

---

## 🔐 Funcionalidades

- ✅ **Login y Logout seguros** utilizando Firebase Authentication
- ❌ **Subida de tarjetas de perros** con imagen, descripción y contacto (no se guardan en Firestore, solo se suben a Firebase Storage)
- ✅ **Visualización detallada** del perro y del dueño desde una tarjeta
- ❌ **Persistencia de datos en Firebase Firestore** (los datos no se guardan correctamente)
- ✅ **Interfaz intuitiva y responsive** con Bootstrap

---

## 🧰 Tecnologías utilizadas

- ⚛️ React
- 🔥 Firebase (Authentication + Firestore + Storage)
- 🎨 Bootstrap
- 🧼 HTML5 / CSS3
- 📜 JavaScript (ES6)

---

## 🚀 Demo en vivo

🔗 [¡Probar en CodeSandbox!](https://codesandbox.io/p/sandbox/adogtame-wwrtts)

---

## 💻 Cómo ejecutar el proyecto localmente

# 1. Clona el repositorio
git clone https://github.com/Emmanuel4280/Proyecto

# 2. Entra a la carpeta del proyecto
cd adogtame

# 3. Instala las dependencias
npm install

# 4. (Opcional) Crea un archivo .env con tus credenciales de Firebase
# VITE_FIREBASE_API_KEY=...
# VITE_FIREBASE_AUTH_DOMAIN=...
# VITE_FIREBASE_PROJECT_ID=...
# VITE_FIREBASE_STORAGE_BUCKET=...
# VITE_FIREBASE_MESSAGING_SENDER_ID=...
# VITE_FIREBASE_APP_ID=...

# 5. Ejecuta la app en modo desarrollo
npm run dev
  

