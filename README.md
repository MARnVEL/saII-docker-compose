
# Docker Compose (servers + balancer)
>
> This repo was created to address some practical questions about Docker Compose posed by the class 'Upgrade Seminar III' of the **Formosa Polytechnic Institute** .
> *Este repositorio fue creado para abordar algunas preguntas prácticas sobre Docker Compose planteadas por la clase 'Seminario de Actualización III' del **Instituto Politécnico Formosa***.

## Tecnologías utilizadas

<div align="center" style="display: flex">
      <span>
         <a href="https://es.javascript.info/" target="_blank">
               <img width="100" style="margin: 10" title='JavaScript' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'>
         </a>
      </span>
      <span>
         <a href="https://www.docker.com/" target="_blank" title='Docker'>
               <img width="100" style="margin: 50" title='Docker' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Docker_logo.svg/1920px-Docker_logo.svg.png'>
         </a>
      </span>
      </br>
      <span>
         <a href="https://nginx.org/" target="_blank" title='Nginx'>
               <img width="100" style="margin: 50" title='Nginx' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/1920px-Nginx_logo.svg.png'>
         </a>
      </span>
</div>

# Introducción

> Este proyecto se trata de la "orquestación" de distintos contenedores con Docker Compose.
> *Son simples servidores hechos con **JavaScript*** y **NodeJS**.
> Cada servidor se ejecuta en un contenedor independiente.
> Los contenedores que alojan los servidores se crean a partir de imágenes de **PHP:Apache-bullseye**. Luego en estos contenedores hacemos las instalaciones correspondientes (a través de los Dockerfile's) para poder ejecutar servidores desarrollados con **NodeJS**.
> El contenedor que aloja el balanceador se crea a partir de una imagen de **NGINX**.

# Características

**SO: Windows 10**.

# Requerimientos

* Tener instalado **Dokcer Desktop**
* Tener instalado **Git**

# Usos

## Para utilizar este proyecto,  abrimos un CLI y nos dirigimos al directorio del sistema donde deseamos guardarlo. Ejecutamos el siguiente comando

```bash
git clone https://github.com/MARnVEL/saIII-docker-compose
```

## Iniciar la aplicación Docker Desktop

### Con una terminal localizarse en el directorio del proyecto y ejecutar

```bash
docker-compose up
```
