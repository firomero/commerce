# AngularJS ES6 Starter Kit

This repo contains `webpack`, `AngularJS`, `ES6`, `Jade` and `Bootstrap 4`starter kit.

### Prerequisites
Node 8.11.3

### Steps to run project
1. Clone Project.
2. Do `npm install` to install all dependencies.
3. Finally `npm start` to run project.

For building project use `npm build`

### Enable Debug with VS Code
Folks, if you want to enable debugging with VSCode then you need to create `launch.json` file and add below two tasks in that file.

```
{
   "type":"node",
   "request":"launch",
   "name":"Debug",
   "program":"${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server",
   "args":[
      "--progress",
      "--debug"
   ]
},
{
   "name":"Launch Chrome against localhost, with sourcemaps",
   "type":"chrome",
   "request":"launch",
   "url":"http://localhost:3000",
   "sourceMaps":true,
   "webRoot":"${workspaceRoot}"
}
```

After adding these tasks, you need to run first debug task and then launch chrome task.
