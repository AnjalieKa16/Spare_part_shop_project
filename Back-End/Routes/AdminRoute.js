import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import multer from 'multer'
import path from 'path'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: "Auth route is working!" });
});

router.post('/adminlogin',(req,res) => {
    const sql = "SELECT * FROM admin WHERE username = ? AND password = ?"
    con.query(sql,[req.body.username,req.body.password],(err,result) => {
        if(err)return res.json({loginStatus:false,Error:"Query Error"})
        if(result.length > 0){
            const email = result[0].email;
            const token = jwt.sign(
                {role:"admin",email:email},
                "jwt_secret_key", 
                {expiresIn:"1d"}
            )
            res.cookie("token",token)
            return res.json({loginStatus:true})
        } else {
            return res.json({loginStatus:false,Error:"Invalid Username or Password"})
        }
      
    })

})

//image upload
const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null,'public/images');
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage:storage
})

// Add Employee Route
router.post('/AddEmployee', upload.single('image'),(req, res) => {
    const { id, name, email,contact_no, address, username, password } = req.body;
    const image = req.file ? req.file.filename : null;

    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if (err) {
            console.error("Hashing Error:", err);
            return res.json({ status: false, Error: "Hashing Error" });
        }

        const values = [
            id,
            name,
            email,
            contact_no,
            address,
            username,
            hash,
            image
           /* req.body.id,
            req.body.name, 
            req.body.email, 
            req.body.contact_no,
            req.body.address, 
            req.body.username, 
            hash, 
            req.file.filename*/
        ];
        const sql = "INSERT INTO employee (id, name, email,contact_no, address, username, password, image) VALUES (?, ?, ?, ?, ?, ?, ?,?)";

        con.query(sql, values, (err, result) => {
            if (err) {
                console.error("Query Error:", err);
                return res.json({ status: false, Error: "Query Error" });
            }
            return res.json({ status: true, Message: "Employee Added Successfully" });
        });
    });
});


// Get all employees
router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
      if (err) return res.json({ status: false, error: err.message });
      return res.json({ status: true, Result: result });
    });
  });
  
  // Get employee by ID
  router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ status: false, error: err.message });
      return res.json({ status: true, Result: result[0]}); // Return the first result
    });
  });


  // Edit Employee Route
  router.put('/EditEmployee/:id', upload.single('image'),(req,res) => {
    const id =req.params.id;

    const { name, email, contact_no, address, username } = req.body;
    const image = req.file ? req.file.filename : req.body.image;

  const sql = "UPDATE employee SET name = ?, email = ?, contact_no = ?, address = ?, username = ?, image = ? WHERE id = ?";
  const values = [name, email, contact_no, address, username, image, id];
   
        
    con.query(sql,[...values,id],(err,result) => {
        if(err)return res.json({status:false,error:"Query Error"})
        return res.json({status:true,message:"Employee Updated Successfully"})
    })
        
})     

router.delete('/delete_employee/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "delete from employee where id = ?"
    con.query(sql,[id],(err,result)=>{
        if(err)return res.json({status:false,Error:"Query Error"+err})
            return res.json({status:true,Result:result})
    })
})

router.get('/employee_count',(req,res ) => {
    const sql ="select count(id) as employee_count from employee"
    con.query(sql,(err,result) => {
        if(err)return res.json({status:false,error:err})
        return res.json({status:true,Result:result})
    })

})

//avoid duplicate employee id
/*
const checkSql = "SELECT * FROM employee WHERE id = ?";
con.query(checkSql, [id], (err, result) => {
    if (err) return res.json({ status: false, error: "Query Error" });
    if (result.length > 0) {
        return res.json({ status: false, error: "Employee with this ID already exists." });
    }

    // Proceed with insertion
});*/

// Add Category Route
router.post('/auth/AddCategory',upload.none(), (req, res) => {
    console.log(req.body); // Debugging
    const {category_id, category_name } = req.body;
  
    // Validate input
    if (!category_id || !category_name) {
      return res.json({ status: false, error: "Both category_id and category_name are required." });
    }
  
    const sql = "INSERT INTO product_category (category_id, category_name) VALUES (?, ?)";
    con.query(sql, [category_id, category_name], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.json({ status: false, error: "Category ID already exists." });
        }
        return res.json({ status: false, error: err.message });
      }
      return res.json({ status: true, message: "Category added successfully." });
    });
  });

//Get all employee

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM product_category";
    con.query(sql, (err, result) => {
      if (err) return res.json({ status: false, error: err.message });
      return res.json({ status: true, Result: result });
    });
    });
    
// Get category by ID
router.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM product_category WHERE category_id = ?";
    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ status: false, error: err.message });
      return res.json({ status: true, Result: result[0]}); // Return the first result
    });
  });

  

// Edit Category Route  
router.put('/EditCategory/:id', (req,res) => {
    const id = req.params.id;
    const { category_id, category_name } = req.body;

    const sql = "UPDATE product_category SET category_id = ?, category_name = ? WHERE category_id = ?";
    const values = [category_id, category_name, id];

    con.query(sql, values, (err,result) => {
        if(err)return res.json({status:false,error:"Query Error"})
        return res.json({status:true,message:"Category Updated Successfully"})
    })
        
})

// DELETE Category Route
router.delete('/delete_category/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "delete from product_category where category_id = ?"
    con.query(sql,[id],(err,result)=>{
        if(err)return res.json({status:false,Error:"Query Error"+err})
            return res.json({status:true,Result:result})
    })
})


export {router as adminRouter}