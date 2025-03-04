### TAREAS OBLIGATORIAS DIARIAS
<<<<<<< Updated upstream
- Generar una ramaa 
- Generar al menos 10 commits con diferentes mensajes
-  hacer un pull request de esos 10 commits hacia la rama main
- Se toma el screenshot con Inicio + Shift Izquierdo + S

- Aprender que es gitignore y gitkeep
=======
- Generar al menos 10 commits con diferentes mensajes
- Aprender que es gitignore y gitkeep
- Generar una ramaa al menos por repositorio al día y hacer un pull request de esos 10 commits hacia la rama main
>>>>>>> Stashed changes


Al final del día necesito ver un reporte de todo lo ejecutad

o hasta las 8 de la noche como limite

## Como crear un rama
- git checkout -b 2025-02-11
- git push (debe dar error)
- git push --set-upstream origin 2025-02-11
- git checkout main

## Guardar cambios temporalmente
- git pull (si sale error ejecuta lo siguiente)
- git stash
- git pull
- git stash apply
- git add -A
- git commit -m "changes"
- git push
- prueba para hacer un cambio