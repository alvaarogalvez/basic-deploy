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

7. clonamos nuestro repo de github en nuestro vps

git clone https://github.com/alvaarogalvez/basic-deploy

8. actualizamlos el vps y descargamos las dependencias

```bash
apt update
apt install nodejs npm -y
npm install -g pm2
```
9. instalamos dependecias de npm y probamos a lanzar la app

```bash
cd <repo>
npm install
node server.js
curl <ip>:3000
```


10. usamos pm2 para lanzar la app en segundo plano

```bash
pm2 start server.js --name <nombre>
```

11. comenzamos a crear el deploy.
creamos la carpeta .github y dentro otra carpeta llamada workflows,
 por ultimo dentro, creamos deploy.yml

12. 

