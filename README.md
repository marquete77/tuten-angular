#Login y busqueda de Bookings con Angular

1.- En el proyecto se crearon 2 componentes:

    1.- Login. en este mantenedor se valida el usuario y el password
    2.- Home. en este mantenedor se hace una busqueda de los bookings, y se tiene un filtro por ID y tambien por precios.
    
2.- La aplicacion posee un Guard para verificar que las sesion este iniciada y no permita el paso a la pagina de home de no estar iniciada la sesion.

3.- Se utilizo un servicio de tercero llamado "ngx toastr" para la notificacion al equivocarse en el login.

##Pasos para correr el proyecto.

1.- Se realeza la descarga desde el repositorio.

2.- Ejecutar en terminal el comando npm install.

3.- Ejecutar en terminal el comando npm start para iniciar el servidor virtual (en la ubicacion de la carpeta)

4.- Abrir el navegador y colocar la direccion https://localhost/4200

  **Nota: de presentar algun incoveniente con los comandos en la terminal prueba ejecutando el terminal en modo administrador.**


##Versiones de desarrollo:

NodeJs: 10.15.0
Angular: 6.14.0

**Si tiene problemas con la version de NodeJs**

### Si esta desarrollando otros proyectos con otra version de NodeJs

1.- Instale nvm con los siguientes comandos
    
      1.1.- npm install nvm 
      1.2.- nvm list, esto le dara una lista de las versiones de NodeJs instaladas.
      
      **Si no tenia instalado nvm sigo con el siguiente paso**
      1.3.- nvm install 10.15.0
      1.4.- nvm use 10.15.0 
      1.5.- nvm list para verificar que este usando la version deseada.
            debe aparecer algo asi en el terminal: * 10.15.0 (Currently using 64-bit executable)
            
            
      **Si tenia instalado nvm sigo con el siguiente paso**
      1.3.- Debe aparecerce el listado de NodeJs que se encuentran instalados y cual esta en uso.
      1.4.- 1.4.- nvm use 10.15.0 
      1.5.- nvm list para verificar que este usando la version deseada.
            debe aparecer algo asi en el terminal: * 10.15.0 (Currently using 64-bit executable)
    
"# angularTestTechnique" 
