# DragonBall API Application

Esta es una aplicación React que consume la API de Dragon Ball para mostrar información sobre los personajes de la serie. La aplicación permite seleccionar diferentes categorías de personajes y ver detalles específicos de cada uno.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1.22 o superior)

## Instalación

1. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

    o si prefieres usar yarn:

    ```bash
    yarn install
    ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm start

o con yarn:

Esto abrirá la aplicación en tu navegador predeterminado en la dirección http://localhost:3000.

Uso
Al abrir la aplicación, verás un título centrado "DragonBall API".
En la parte superior derecha, hay un botón desplegable ovalado que permite seleccionar diferentes categorías de personajes (Saiyan, Namekian, Human).
Al seleccionar una categoría, la lista de personajes se actualizará para mostrar los personajes correspondientes.
Cada personaje se muestra en una tarjeta con su nombre, descripción y su máxima capacidad de Ki.
La imagen del personaje se muestra a la derecha de la tarjeta.
Estructura del Proyecto
El proyecto sigue la siguiente estructura de directorios:my-react-app
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── CharacterCard.jsx
│   │   └── CharacterList.jsx
│   ├── hooks
│   │   └── useGetCharacters.js
│   ├── helpers
│   │   └── getUrl.js
│   ├── styles
│   │   └── App.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

Personalización
Puedes personalizar los estilos de la aplicación modificando el archivo src/index.css.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

