// Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)
// SELECT * FROM empleados e order by nombres ;

//• Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.
// SELECT e.nombres,p.puesto,l.localidad  FROM puestos p
//  JOIN empleados e 
// ON p.id =e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id  = l.id 
// WHERE p.puesto='soporte';

// • Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
//SELECT * FROM empleados WHERE nombres like '%o'

// • Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
// SELECT e.nombres, p.puesto, e.sueldo  FROM puestos p
// JOIN empleados e 
// ON p.id = e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id = l.id 
// WHERE l.localidad = 'carlospaz'


// • Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.
// SELECT e.nombres,e.sueldo,l.localidad  FROM puestos p
// JOIN empleados e 
// ON p.id =e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id  = l.id 
// WHERE e.sueldo between 10000 AND 130000; 

// • Visualizar los departamentos con más de 5 empleados

// SELECT  
// d.denominacion ,e.puesto_id
// FROM puestos p
//  JOIN empleados e 
// ON p.id = e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id = l.id 
// GROUP BY
// e.puesto_id,d.denominacion  
// HAVING 
//  e.puesto_id >5


//• Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.

// SELECT e.nombres  FROM puestos p
// JOIN empleados e 
// ON p.id =e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id  = l.id 
// WHERE l.localidad='cordoba' AND p.puesto IN('programador','soporte'); 

// • Calcula el sueldo medio de todos los empleados.
// SELECT AVG(sueldo) FROM puestos p
// JOIN empleados e 
// ON p.id =e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id  = l.id 

// • ¿Cuál es el máximo sueldo de los empleados del departamento 10?
// SELECT max(sueldo)  FROM puestos p
// JOIN empleados e 
// ON p.id =e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id  = l.id 
// WHERE d.id =10

// Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.
// SELECT min(sueldo)  FROM puestos p
// JOIN empleados e 
// ON p.id =e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id  = l.id 
// WHERE d.denominacion='soporte' 


// Para cada puesto obtener la suma de sueldos.
// SELECT p.puesto, sum(e.sueldo)  FROM puestos p
//  JOIN empleados e 
// ON p.id = e.puesto_id  
// JOIN departamentos d 
// ON e.departamento_id = d.id 
// JOIN localidades l 
// ON d.localidad_id = l.id 
// GROUP BY
// p.puesto 