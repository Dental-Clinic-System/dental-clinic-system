# DENTAL BACK END

> ### `Code structure`

The main code will be inside ```./dental-backend/index.ts```.
Added to that there is also 2 main folders, which are ```models``` and ```resolvers```.

Inside ```models``` you can find all schemas, for example: ```appointment_schema.ts, clinic_schema.ts etc...``` 

Same as that ```mutations, typedefs, queries.tsx``` will include all the mutations, typeDefs and queries.

> ### `How to start backend`

You can start the backend server simply by
```zsh
nodemon index.ts
```
you have to have nodemon globally.

If server has started successfully, there will be ```console.log``` that says 
```zsh
🚀  Server ready at http://localhost:4000/
MongoDB database connection established successfully
```

you can communicate directly to server with ```http://localhost:4000/```





