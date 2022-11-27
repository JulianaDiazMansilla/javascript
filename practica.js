import readline from "readline";

// Creamos un array de object como base para la practica.
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
},
{
    age: 39,
    examScores: [],
    gender: 'female',
    name: 'Fernanda'
},
{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'luis'
},
{
    age: 45,
    examScores: [],
    gender: 'female',
    name: 'gloria'
},
{
    age: 21,
    examScores: [],
    gender: 'female',
    name: 'Juliana'
}]

// arrays auxiliares para la practica.
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

// Funciones necesarias para la entrada de datos desde teclado.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumberFromConsole() {
    const promise = new Promise((resolve) => {
        rl.question('Introduce un número: ', (num) => {
            rl.pause();
            resolve(num)
        })
        // Falta el chequeo de letras.
    })
    return promise;
}

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}



// menu de opciones


let numberFromConsole;
let opcionSel;
let key;
let alumnos;
do{
    console.clear();
    console.log("### 1- Mostrar en formato de tabla todos los alumnos.");
    console.log("### 2- Mostrar por consola la cantidad de alumnos que hay en clase.");
    console.log("### 3- Mostrar por consola todos los nombres de los alumnos.");
    console.log("### 4- Eliminar el último alumno de la clase.");
    console.log("### 5- Eliminar un alumno aleatoriamente de la clase.");
    console.log("### 6- Mostrar por consola todos los datos de los alumnos que son chicas.");
    console.log("### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.");
    console.log("### 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.");
    console.log("### 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.");
    console.log("### 10- Añadir un alumno nuevo con los siguientes datos.");
    console.log("### 11- Mostrar por consola el nombre de la persona más joven de la clase.");
    console.log("### 12- Mostrar por consola la edad media de todos los alumnos de la clase.");
    console.log("### 13- Mostrar por consola la edad media de las chicas de la clase.");
    console.log("### 14- Añadir nueva nota a los alumnos.");
    console.log("### 15- Ordenar el array de alumnos alfabéticamente según su nombre.");
    console.log("### 16- Mostrar por consola el alumno de la clase con las mejores notas.");
    console.log("### 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno.");
    console.log("### 18- Añadir un punto extra a cada nota existente de todos los alumnos.");

    numberFromConsole = await getNumberFromConsole();
    opcionSel = parseInt(numberFromConsole);

    // ejecucion de cada opcion con un case
   
    switch(opcionSel) {
        case 1:                             // 1- Mostrar en formato tabla.
            console.table(students);
            break;

        case 2:                            // 2- Cantidad de alumnos
            alumnos=0;
            for (key in students){
                alumnos++;
            }
            console.log('Alumnos en clase: ',alumnos);
            break;

        case 3:                            // 3.- Nombre de los alumnos.
            for (key in students){
                console.log(students[key].name)
            }
            break;

        case 4:                           // 4. Eliminar el ultimo alumno.
            console.table(students);
            students.pop()
            console.table(students);
            break;

        case 5:                          // 5. Eliminar un alumno aleatorio
            console.table(students);
            let min = 0;
            let max = students.length;
            const aleatorio = calculateRandomNumber(min,max);
            //console.log(aleatorio);
            if (aleatorio >=0){
                students.splice(aleatorio,1);
            }
            console.table(students);
            break;

        case 6:                          // 6. Mostrar los alumnos que son chicas.

            for (key in students){
                if (students[key].gender === 'female') {
                    console.log(students[key])
                }   
            }
            break;

        case 7:                           // 7. Numero de chicas y chicos
            let female = 0;
            let male = 0;
            for (key in students){

                if (students[key].gender ===  'female')
                    female++;
                else
                    male++;
                
            }
            console.log('Chicas: ',female);
            console.log('Chicos: ',male);
            break;

        case 8:                            // 8. Mostrar true o false si todos los alumnos son chicas
            let female2 = 0;
            let male2 = 0;
            for (key in students){

                if (students[key].gender ===  'female')
                    female2++;
                else
                    male2++;
                
            }
            //console.log(alumnos);
            //console.log(female2);
            console.log(female2 === alumnos)
            break;

        case 9:             // 9. Mostrar los nombres de los alumnos que tengan entre 20 y 25 años
            let mayor20 = 0;
            for (key in students){
                if (students[key].age >= 20 && students[key].age <= 25){
                    console.log(students[key].name);
                }   
            }
            break;

        case 10:                              // 10. Añadir un alumno nuevo con los siguientes datos.
            let min1 = 0;

            let max2 = availableMaleNames.length;
            let max3 = availableFemaleNames.length;
            let max4 = max3;
            let newName;

            const genderAle = calculateRandomNumber(0,2);
            //console.log(availableGenders[genderAle]);

            if (genderAle === 0){
                max4 = max2;
                newName = (availableMaleNames[calculateRandomNumber(min1,max4)]);
                //console.log(newName)
            }
            else {
                max4 = max3;
                newName = (availableFemaleNames[calculateRandomNumber(min1,max4)]); 
                //console.log(newName)
            }

            const ageAle = calculateRandomNumber(20,50);
            //console.log(ageAle);

            students.push({
                age: ageAle,
                examScores: [],
                gender: availableGenders[genderAle],
                name: newName
            })
            console.table(students);
            break;

        case 11:                            // 11. Mostrar el nombre de la persona mas joven.
            let joven = students[0].age;
            let sumas = 0;
            for (key in students){
                if (students[key].age < joven){
                    joven = students[key].age;
                    sumas = key;
                }   
            }
            console.table(students);
            console.log("El alumno de menor edad es : ",students[sumas].name);
            break;

        case 12:                        // 12. Mostrar la edad media de todos los alumnos.

            let edadTotal = 0;
            students.map(({age}) => edadTotal += age);
            const edadMedia = edadTotal / students.length;
            console.table(students);
            console.log(edadMedia);
            break;

        case 13:                        // 13. Mostrar la edad media de las chicas.
            let edadTotal2 = 0;
            let edadMedia2 = 0;
            let females = 0;
            for (key in students){
                if (students[key].gender === 'female') {
                    edadTotal2 += students[key].age;
                    females++;
                    edadMedia2 = edadTotal2 / females;
                    
                }   
            }
            console.table(students);
            console.log("Edad media Femenina es : ",edadMedia2)
            break;

        case 14:                            // 14. Añadir nota , calculando aleatoriamente.
            for (key in students){
                let nota = calculateRandomNumber(0,10);
                students[key].examScores[students[key].examScores.length] = nota;
                }   

            console.table(students);
            break;

        case 15:                            // 15. Ordenar el array alfabeticamente segun el nombre.

            function comparar(a,b) {

                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;   
            }
            students.sort(comparar);

            console.table(students);
            break;

        case 16:                           // 16- Mostrar por consola el alumno de la clase con las mejores notas.
            let sumaNotas;
            let notasSumadas =[]
            for (key in students){
                sumaNotas = students[key].examScores.reduce((sum,n)=> sum + n,0);
                notasSumadas[key] = sumaNotas;
            
            }
            let primeraNota = notasSumadas[0];
            let total = 0;
            for (key in notasSumadas){
            
                if (notasSumadas[key] > primeraNota){
                    primeraNota = notasSumadas[key];
                    total = key;
                } 
            }
            console.table(students);
            console.log('El alumno con mejores notas es :',students[total].name);
            break;

        case 17:                           // 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno.
            let sumaNotas2;
            let notasSumadasMedia =[]
            for (key in students){
                sumaNotas2 = students[key].examScores.reduce((sum,n)=> sum + n,0);
                notasSumadasMedia[key] = sumaNotas2/ students[key].examScores.length;
                console.log(notasSumadasMedia[key])
            }
            let primeraNota2 = notasSumadasMedia[0];
            let total2 = 0;
            for (key in notasSumadasMedia){
            
                if (notasSumadasMedia[key] > primeraNota2){
                    primeraNota2 = notasSumadasMedia[key];
                    total2 = key;
                } 
            }
            console.table(students);
            console.log('El alumno con mejores notas media es :',students[total2].name);
            console.log('La nota media es: ',primeraNota2)
            break;

        case 18:                           // 18- Añadir un punto extra a cada nota existente de todos los alumnos.
/*           console.table(students);
            for (key in students){
                students[key].examScores.map((n)=> n +1);
            }
            console.table(students);
*/
            break;
        default:
            break;
    }

    
} 
while (opcionSel < 19 && opcionSel > 0);



