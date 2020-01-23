USE earthquakes; -- seleccionar tabla

SELECT COUNT(*) FROM earthquake;
SELECT COUNT(earthquake_id) FROM earthquake; -- mejor consultar nombre del campo es mas eficiente
SELECT  occurred_on,place, magnitude FROM earthquake; -- seleccion para istas de usuario

SELECT MIN(occurred_on) FROM earthquake;
SELECT MAX(occurred_on) FROM earthquake;
SELECT MAX(magnitude) FROM earthquake;  -- magnitud maxima
SELECT AVG(magnitude) FROM earthquake; -- media
SELECT SUM(magnitude) FROM earthquake; -- suma

SELECT MAX(magnitude) FROM earthquake;

SELECT * FROM earthquake WHERE earthquake_id =1;

SELECT 
    place, depth, magnitude
FROM
    earthquake
WHERE
    occurred_on >= '2001-01-01';
    
SELECT 
    *
FROM
    earthquake
WHERE									-- condicion
    occurred_on >= '2010-01-01'
        AND occurred_on < '2011-01-01'
ORDER BY magnitude DESC					-- ordenado desc
LIMIT 1									-- limita a tuplas
;

SELECT COUNT(earthquake_id)				-- contamos el numero de terremotos
 
FROM
    earthquake
WHERE									-- condicion
    occurred_on >= '2010-01-01'
        AND occurred_on < '2011-01-01'
;

SELECT DISTINCT
    (magnitude)
FROM
    earthquake
ORDER BY magnitude ASC
;

SELECT DISTINCT
    (magnitude)
FROM
    earthquake
ORDER BY magnitude ASC
;

SELECT COUNT(earthquake_id) FROM earthquake
WHERE cause = "nuclear explosion"
;

SELECT COUNT(earthquake_id) FROM earthquake
WHERE cause = "explosion"
;

SELECT * FROM earthquake
WHERE cause = "explosion"
;

SELECT COUNT(earthquake_id) FROM earthquake
WHERE cause = "nuclear explosion" OR cause = "explosion" 
;

SELECT 
    COUNT(earthquake_id)
FROM
    earthquake
WHERE
    cause LIKE '%explosion%'
;

SELECT 
    COUNT(earthquake_id), cause  -- permite separar la consulta por las causas
FROM
    earthquake
GROUP BY cause
;

SELECT 
    COUNT(earthquake_id), magnitude  -- permite separar la consulta por las causas
FROM
    earthquake
GROUP BY magnitude
ORDER BY magnitude
;
SELECT 
    COUNT(earthquake_id) AS amount, magnitude
FROM
    earthquake
GROUP BY magnitude
ORDER BY magnitude DESC
;

SELECT 
    place, magnitude, occurred_on
FROM
    earthquake
WHERE
    cause = 'nuclear explosion'
ORDER BY occurred_on DESC
LIMIT 1;

SELECT 
    place, magnitude, occurred_on
FROM
    earthquake

ORDER BY magnitude DESC
LIMIT 10;

SELECT 
    place, magnitude, latitude,longitude, occurred_on
FROM
    earthquake

ORDER BY occurred_on ASC
LIMIT 10;

SELECT 
    *
FROM
    earthquake
WHERE place LIKE "%japan%"
;

SELECT 
    *
FROM
    earthquake
WHERE place LIKE "%japan%"
ORDER BY magnitude DESC
;

SELECT 
    *
FROM
    earthquake
WHERE place LIKE "%Honshu%"
ORDER BY magnitude DESC
;