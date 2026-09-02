import dividir from "../divisao";
import { soma, subtracao } from "../index";
import multiplicar from "../multi";
import raizQuadrada from "../raizQuadrada";

describe("soma", () => {
    test("soma dois números positivos", () => {
        expect(soma(2, 3)).toBe(5);
    });
    test("soma número negativo", () => {
        expect(soma(-2, 3)).toBe(1);
    });
});

describe("subtracao", () => {
    test("subtrai dois números", () => {
        expect(subtracao(5, 3)).toBe(2);
    });
    test("resultado negativo", () => {
        expect(subtracao(3, 5)).toBe(-2);
    });
});

describe("multiplicar", () => {
    test("multiplica dois números", () => {
        expect(multiplicar(4, 3)).toBe(12);
    });
    test("multiplica por zero", () => {
        expect(multiplicar(5, 0)).toBe(0);
    });
});

describe("dividir", () => {
    test("divide dois números válidos", () => {
        expect(dividir(10, 2)).toBe(5);
    });
    test("retorna null ao dividir por zero", () => {
        expect(dividir(10, 0)).toBeNull();
    });
    test("retorna null se algum argumento não for número", () => {
        expect(dividir("a", 2)).toBeNull();
        expect(dividir(2, "b")).toBeNull();
    });
});

describe("raizQuadrada", () => {
    test("calcula raiz de número positivo", () => {
        expect(raizQuadrada(9)).toBe(3);
    });
    test("retorna null para número negativo", () => {
        expect(raizQuadrada(-4)).toBeNull();
    });
    test("raiz de zero é zero", () => {
        expect(raizQuadrada(0)).toBe(0);
    });
});