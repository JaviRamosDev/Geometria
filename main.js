"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var Triangulo_1 = require("./Triangulo");
var punto = new Punto_1.Punto(0, -6);
punto.toString();
console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(new Punto_1.Punto(0, 8)));
console.log(punto.calcularCuadrante());
console.log(punto.calcularMasCercano([new Punto_1.Punto(0, 12), new Punto_1.Punto(0, -3), new Punto_1.Punto(0, 1)]));
console.log(new Triangulo_1.Triangulo(new Punto_1.Punto(0, 12), new Punto_1.Punto(0, -3), new Punto_1.Punto(0, 1)).calcularLongitudLados());
