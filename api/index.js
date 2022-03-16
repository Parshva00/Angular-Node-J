const express =require("express");
var cors = require('cors');
//const { param } = require("express/lib/request");
const app =express();

app.use(cors({
    origin: '*'
}));
app.use(express.json()) // => req.body

const userRouter = require ('./routes/user_routes');
userRouter(app);
// app.get("/todos", async(req, res) => { 
//     try {
//         await client.connect();
//         const todo =await client.query("SELECT * FROM public.USER ");
//         res.json(todo.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.get("/todos/:id", async(req, res) => {
//     const {id} = req.params; 
//     try {
//         await client.connect();
//         const todo =await client.query("SELECT * FROM public.USER where user_id=$1", [id] );
//         res.json(todo.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.post("/todos", async (req, res) => {
//     try {
//         await client.connect();
//         const {user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze} = req.body;
//         const newTodo =await client.query("INSERT INTO public.user (user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze]);
  
//         res.json(newTodo);
//     } catch(err) {
//         console.error(err.message);
//     }
//    client.end(); 
// });

// app.put("/todos/:id", async (req, res) => {
//     try {
//         await client.connect();
//         const {id} = req.params;
//         const { user_organization_name , user_email, user_first_name, user_last_name} = req.body;

//         const UpdateTodo = await client.query("UPDATE public.user SET user_organization_name = $2,  user_email=$3, user_first_name=$4, user_last_name=$5 where user_id =$1", [id,user_organization_name,user_email,user_first_name,user_last_name]);
        
//         res.json(UpdateTodo.rows[0]);
//     } catch(err) {
//         console.error(err.message);
//     }
//     client.end();
// });

// app.delete("/todos/:id",async(req, res) =>{
//     try {
//         await client.connect();
//         const { id } = req.params;
//         const deleteTodo = await client.query("DELETE FROM public.user WHERE user_id =$1", [id]);
   
//         res.json("Deleted")
//     } catch(err) {
//         console.error(err.message);
//     }
//     client.end();    
// });
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
    
app.get('/', (req, res) => {
        res.send("hello genZ");
    });


// const Joi = require('joi'); 
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
//     {id:1 , name : 'course1'},
//     {id:2 , name : 'course2'},
//     {id:3 , name : 'course3'}

// ]
// app.get('/', (req, res) => {
//         res.send("hello genZ");
//     });

// app.get('/api/courses', (req,res) =>{
//     res.send(courses);
// });

// app.post('/api/courses', (req, res) => {

//     const {error} = validateCourse(req.body);
// if(error) {
//     res.status(400).send(error.details[0].message);
//     return; 
//     }

//     const course = {
//         id: courses.length + 1,
//         name : req.body.name
//     };
// courses.push(course);
// res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt (req.params.id));
//     if(!course) 
//     {
//         res.status(404).send('the course with the given id was not found');
//     return;
// }

// const {error} = validateCourse(req.body);
// if(error) {
//     res.status(400).send(error.details[0].message);
//     return; 
//     }
// //update course
// course.name = req.body.name;
// //return the updated course
// res.send(course);
// });

// app.delete('/api/courses/:id', (req, res) => {
//     //Look up the course
//     // Not existing, return 404
//     const course = courses.find(c => c.id === parseInt (req.params.id));
//     if(!course) return res.status(404).send('the course with the given id was not found');

//     // Delete
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     // Return the same course
//     res.send(course);
// })

// function validateCourse(course) {
//     const schema = {
//         name : Joi.string().min(3).required()
//     };
// return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt (req.params.id));
//     if(!course) return res.status(404).send('the course with the given id was not found');
//     res.send(course);
// });

// const port = process.env.PORT  || 3000;
// app.listen(port, () => console.log(`listening on port ${port}...`))