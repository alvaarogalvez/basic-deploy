1. creamos el repo local

```bash
git init
git add .
git commit -m "build"

```
subimos el repo a github

```bash
gh repo create
gh repo list
``````

3. creamos una app para desplegar seria crear el server.js


npm i express
npm install express


```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hola mundo");

});

app.listen(3000, () => {
    console.log("server is runnning on port 3000");


});
```
4. añadimos node_modules al .gitignore
5. testeamos si la app funciona


```bash
node server.js
curl localhost:3000
```


6. lanzamos nuestros vps y creamos los secretos de github

```
SSH_HOST=ip
SSH_USER=usuario
SSH_PASSWORD=contraseña
```

