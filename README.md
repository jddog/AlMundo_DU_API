#ALMundo_DU_API
Servicio API REST (Back - End) para prueba de ingreso de AlMundo


- Para utilizar este proyecto se necesita tener las siguientes herramientas


- Descargar npm y node js en la version (6.11.0 en adelante)

```sh

https://nodejs.org/en/

```


- Clonar proyecto
- Se debe ejecutar el siguiente comando estando en el directorio que se desee obetener el codigo
```sh

git clone https://github.com/jddog/AlMundo_DU.git

```

- Luego ingresar a la carpeta generada y ejecutar para instalar todas las dependencias

```sh

npm install --save

```


# Lanzar Servidor


- Ejecutar en la linea de comandos a nivel donde se encuentra el proyecto

```sh

node index.js

```

# Metodos del CRUD hoteles

- Para consultar todos los hoteles, se debe enviar una peticion de tipo GET a la siguiente url

```sh

https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/hotels

```

- Para consultar todos un hotel por medio del id, se debe enviar una peticion de tipo GET a la siguiente url enviando el id del hotel a consultar

```sh

https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/hotels/15102

```

- Para crear un hotel , se debe enviar una peticion de tipo POST a la siguiente url enviando el objeto a crear

```sh

header: {"Content-Type" : "application/json"}

Body: {
	"amenities":["garden","business-center","bathrobes","safety-box","beach-pool-facilities"],
	 "id":"999999",
	 "image":"164283a_hb_a_001.jpg",
	 "name":"Hotel We Work",
	 "price":1914.87,
	 "stars":4
	
}

https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/hotels

```

- Para eliminar un hotel por medio del id, se debe enviar una peticion de tipo DELETE a la siguiente url enviando el id del hotel a eliminar

```sh

https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/hotels/1619121

```

- Para editar un hotel por medio del id, se debe enviar una peticion de tipo PUT a la siguiente url enviando el id del hotel a editar y el objeto del hotel con los nuevos valores

```sh

header: {"Content-Type" : "application/json"}

Body: {
	"amenities":["garden","business-center","bathrobes","safety-box","beach-pool-facilities"],
	 "id":"1619121",
	 "image":"164283a_hb_a_001.jpg",
	 "name":"Hotel We Work Actualizado",
	 "price":1914.87,
	 "stars":4
	
}

https://dry-atoll-76166.herokuapp.com/AlMundoHotelsAPI/hotels/1619121

```