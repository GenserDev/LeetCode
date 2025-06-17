// 1. Dos Sumas 

// Dada una matriz de números enteros nums y un número entero target, devuelve los índices de los dos números tales que sumentarget .

// Puedes asumir que cada entrada tendrá exactamente una solución y no puedes usar el mismo elemento dos veces.

// Puedes devolver la respuesta en cualquier orden.

 

// Ejemplo 1:

// Entrada: nums = [2,7,11,15], objetivo = 9
//  Salida: [0,1]
//  Explicación: Como nums[0] + nums[1] == 9, devolvemos [0, 1].
// Ejemplo 2:

// Entrada: nums = [3,2,4], objetivo = 6
//  Salida: [1,2]
// Ejemplo 3:

// Entrada: nums = [3,3], objetivo = 6
//  Salida: [0,1]


const nums = [2,7,11,15]

const target = 9

var twoSum = function(nums, target) {
    const Mapa = new Map()
    for (let i = 0; i < nums.length; i++){
        const complemento = target - nums[i]
        if (Mapa.has(complemento)){
            return [Mapa.get(complemento), i]
        }
        Mapa.set(nums[i], i);
    }
};
