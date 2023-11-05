This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Exercise

Queremos crear una aplicación con NextJS con Typescript (strict) que tenga las siguientes funcionalidades:

1. Un buscador de repositorios de Github
   El primer punto de entrada de la aplicación es un buscador que se conecta a la Api de Github y este tiene que devolver los resultados paginados. https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories

2. Listar los resultados de la búsqueda
   El listado de la búsqueda tiene que mostrar los siguientes campos:
   Nombre del Owner
   Nombre del Repo y su descripción
   La imagen del Avatar del Owner
   Fecha de creación y última actualización
   Los Topics del Repo
   El lenguaje del Repo
   El número de las estrellas que tiene el Repo.
   Este listado debería ser paginado, es decir que podemos tener X resultados por página y el usuario pueda cambiar de página.

3. Cada Item debe ser clicable
   Al hacer click en un Item de la lista se debe abrir en una pestaña nueva la URL del Repo en el Github.

A tener en cuenta
Se pueden utilizar las librerías y el gestor de estados que más convenga sin ninguna limitación, con el objetivo de cumplir los requisitos mencionados.
El diseño UI/UX es libre y se valorará para esta prueba. Es preferible utilizar MUI.
También se valorará el Testing.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
