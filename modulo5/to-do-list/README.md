ESTRUTURA DE DADOS 

### Usuários 
id
name
nickname
e-mail 

### Tarefas
id
title
description
deadline 
status: "to_do" || "doing" || "done"
author 
assignees 

ENDPOINTS 

### Criar usuário
Método: PUT
Path: /user
Body:
name 
nickname
email 

### Pegar Usuário pelo id 
Método: GET
path: /user/:id
Body de Resposta: (retorna um erro se não encontrar)
id
nickname

### EDITAR USUÁRIO 
Método: POST
path: /user/edit/:id
body:
name 
nickname
email 

### CRIAR TAREFA 
Método: PUT
path: /task
Body:
title
description
deadline
authorid

### Pegar tarefa pelo ID
Método: Get 
path: /task/:id
Body de Resposta (retorna erro se não encontrar)
id
title
description
deadline
status
authorid
authorNickname