
var pool = require('../database');

exports.getAllUsers= ( async(req, res) => { 
    try {
       
        const todo =await pool.query("SELECT * FROM public.USER ");
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

exports.getUserById=( async(req, res) => {
    const {id} = req.params; 
    try {
        const todo =await pool.query("SELECT * FROM public.USER where user_id=$1", [id] );
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
});


exports.addUser  =(async (req, res) => {
    try {
        console.log(req);
        const {user_name,user_password,user_first_name, user_last_name, user_organization_name, user_email, user_created_by} = req.body;
        const newTodo =await pool.query("INSERT INTO public.user (user_name,user_password,user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *", [user_name,user_password,user_first_name, user_last_name, user_organization_name, user_email, user_created_by, false, false, false]);
  
        res.json(newTodo);
    } catch(err) {
        console.error(err.message);
    }
});


exports.editUser =( async (req, res) => {
    try {
        const {id} = req.params;
        const { user_name,user_password,user_first_name, user_last_name, user_organization_name , user_email, user_created_by} = req.body;

        const UpdateTodo = await pool.query("UPDATE public.user SET user_name=$1,user_password=$2,user_first_name=$3, user_last_name=$4, user_organization_name = $5,  user_email=$6, user_created_by=$7 where user_id =$1", [id,user_name,user_password,user_first_name,user_last_name, user_organization_name,user_email, user_created_by ]);
        
        res.json(UpdateTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});

exports.deleteUser=(async(req, res) =>{
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM public.user WHERE user_id =$1", [id]);
   
        res.json("Deleted")
    } catch(err) {
        console.error(err.message);
    }
});

exports.selectUserbyname=( async(req, res) => {
    const {user_name,user_password} = req.body; 
    try {
        const todo =await pool.query("SELECT * FROM public.USER where user_name=$1 and user_password=$2", [user_name,user_password] );
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
});