# Proyecto RetailOff - Segunda Entrega

Este proyecto es la segunda entrega del desarrollo de una aplicación multiplataforma para "Retail Off", una empresa del área de retail que busca alcanzar a los nuevos clientes nativos digitales de manera rápida y eficiente. Esta aplicación está construida sobre el framework Ionic, utilizando Angular y NgModules.

## Características Principales

- Registro de nuevos usuarios integrando Firebase.
- Autenticación de usuarios con Firebase.
- Utilización de servicios de localización con Mapbox.

## Funcionalidades

Una vez que el usuario se ha autenticado, la aplicación ofrece las siguientes funcionalidades:

### Escaneo de Código QR o de Barra

La vista principal de la aplicación consta de dos pestañas: "SCAN" e "Historial".

#### SCAN

Permite al usuario escanear códigos QR o de barras y realizar acciones según el tipo de contenido detectado:

- Si el código escaneado es un enlace HTTP, la aplicación abrirá el navegador del dispositivo móvil para mostrar el contenido.
- Si el código contiene información de geolocalización, se mostrará dentro de la aplicación un mapa utilizando los servicios de localización de Mapbox.

#### Historial de Registro

Muestra el registro de códigos escaneados previamente, guardados en el LocalStorage del dispositivo. Además, si el código QR contiene información de geolocalización, se mostrará un mapa correspondiente a esa ubicación.

## Tecnologías Utilizadas

- Ionic
- Angular
- NgModules
- Firebase (para registro y autenticación de usuarios)
- Mapbox (para servicios de localización)

## Configuración

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando `npm install`.
3. Configura Firebase siguiendo las instrucciones proporcionadas por Firebase para la integración en una aplicación Ionic.
4. Configura Mapbox siguiendo las instrucciones proporcionadas por Mapbox para la integración en una aplicación Ionic.
5. Realiza cualquier otra configuración necesaria según las necesidades específicas del proyecto.

## Ejecución

Una vez configurado el proyecto, puedes ejecutarlo utilizando el comando:

```bash
ionic serve
```

Esto iniciará el servidor de desarrollo y hará que la aplicación sea accesible en un navegador web en `http://localhost:8100/`.

## Autor

Jose Contreras Stoltze
