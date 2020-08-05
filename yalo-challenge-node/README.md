# Yalo Challenge Nodejs

**Version experimental sin muchas pruebas unitarias, todo el tiempo de testing se utilizo en la version Java. Este proyecto tiene solo pruebas muy basicas**

## Requerimientos

- node
- npm

## Como correr los tests

```
npm install && npm test
```

## Como correrlo

```
npm install && node app.js
```

## Endpoints

### POST /arithmetic

Ejemplo:
```
curl --request POST \
  --url http://localhost:3000/arithmetic \
  --header 'content-type: application/json' \
  --data '{
	"expression": "value/(99**2)",
	"save": "result",
	"transitions": {
		"next": 1,
		"error": 2
	},
	"context": {
		"value": 180
	}
}'
```

```
{
  "result": 0.018365472910927456,
  "transition": 1
}
```

### POST /logic

Ejemplo:
```
curl --request POST \
  --url http://localhost:3000/logic \
  --header 'content-type: application/json' \
  --data '{
	"expression": "(age) >= 18",
	"save": "adult",
	"transitions": {
		"isTrue": 15,
		"isFalse": 23,
		"isError": 45
	},
	"context": {
		"age": 15
	}
}'
```

```
{
  "transition": 23,
  "adult": false
}
```


## Estructura del codigo

Existe un archivo de gramatica que define todas nuestras reglas para generar un parser (`src/main/antlr4/com/yalo/challenge/arithmetic/Arithmetic.g4`). El parser es generado por un plugin de maven a la hora de compilar el proyecto, estas clases son las que extendemos para implementar nuestro "walker" para el AST que genera el parser.

En el codigo hay 2 paquetes los cuales encapsulan la logica de negocio de la applicacion `com.yalo.challenge.arithmetic` y `com.yalo.challenge.logic`. Estos encapsulan la logica de negocio de como procesar transiciones de estados basados en expresiones arithmeticas y expressiones logicas respectivamente.

El ultimo paquete que existe en la applicacion `com.yalo.challenge.web` solo es una interfaz web hacia los servicios que encapsulan la logica de negocio y realmente no tienen mucha logica.

