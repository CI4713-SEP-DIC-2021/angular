export const PROJECTS = [
    {
      "date_created": "Fri, 19 Nov 2021 02:13:21 GMT", 
      "description": "Editar proyecto de prueba", 
      "id": 1, 
      "status": "active", 
      "user_id": 1
    }, 
    {
      "date_created": "Fri, 19 Nov 2021 02:42:58 GMT", 
      "description": "Nuevo proyecto editado", 
      "id": 2, 
      "status": "paused", 
      "user_id": 1
    }, 
    {
      "date_created": "Fri, 19 Nov 2021 22:52:24 GMT", 
      "description": "Tercer proyecto", 
      "id": 3, 
      "status": "active", 
      "user_id": 1
    }
];
  

export const LOGGERS = [
    {
    "date": "Fri, 19 Nov 2021 02:31:03 GMT", 
    "event": "Inicio de Sesion", 
    "id": 1, 
    "loged_module": "Usuario", 
    "user": "admin"
    }, 
    {
    "date": "Fri, 19 Nov 2021 02:42:58 GMT", 
    "event": "Agregar Proyecto", 
    "id": 2, 
    "loged_module": "Proyecto", 
    "user": "admin"
    }, 
    {
    "date": "Fri, 19 Nov 2021 02:43:04 GMT", 
    "event": "Agregar Proyecto", 
    "id": 3, 
    "loged_module": "Proyecto", 
    "user": "admin"
    }, 
    {
    "date": "Fri, 19 Nov 2021 02:43:06 GMT", 
    "event": "Pausar Proyecto", 
    "id": 4, 
    "loged_module": "Proyecto", 
    "user": "admin"
    }
];

export const STORIES = [
    {
      "date_created": "Fri, 19 Nov 2021 20:19:14 GMT", 
      "description": "Historia de prueba", 
      "done": true, 
      "epic": false, 
      "id": 8, 
      "parent_id": null, 
      "priority": "low", 
      "project_id": 1
    }, 
    {
      "date_created": "Fri, 19 Nov 2021 20:27:43 GMT", 
      "description": "Historia 4", 
      "done": false, 
      "epic": true, 
      "id": 9, 
      "parent_id": null, 
      "priority": "medium", 
      "project_id": 1
    }, 
    {
      "date_created": "Fri, 19 Nov 2021 20:27:59 GMT", 
      "description": "Historia 3", 
      "done": false, 
      "epic": false, 
      "id": 10, 
      "parent_id": 9, 
      "priority": "low", 
      "project_id": 1
    }, 
    {
      "date_created": "Fri, 19 Nov 2021 20:28:25 GMT", 
      "description": "Historiaaa", 
      "done": false, 
      "epic": true, 
      "id": 11, 
      "parent_id": null, 
      "priority": "high", 
      "project_id": 1
    }
];
  