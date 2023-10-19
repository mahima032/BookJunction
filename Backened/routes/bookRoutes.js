const router=require("express").Router();
const bookModel= require("../models/Booksmodel");
//post request
router.post("/add",async(req,res)=>{
    try {
        const data=req.body;
        const newBook=new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"Book added Successfully"});
        })
    } catch (error) {
        console.log(error)
    }
});
//get request
router.get("/getBooks",async(req,res)=>{
    let book;
    try {
        book=await bookModel.find();
        res.status(200).json({book})
    } catch (error) {
        console.log(error);
    }
})
//get request by id
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;

    try {
        book=await bookModel.findById(id);
        res.status(200).json({book})
    } catch (error) {
        console.log(error);
    }
})
//update book by id
router.put("/updateBook/:id",async(req,res)=>{
    const id=req.params.id;
    let book;
    const {bookname,description,author,image,price}=req.body;
    try {
      book=  await bookModel.findByIdAndUpdate(id,{bookname,description,author,image,price});
      await book.save().then(()=>res.json({message : "Data Updated"}))
    } catch (error) {
        console.log(error);
    }
})
//delete book by id
router.delete("/deleteBook/:id", async(req,res)=>{
    const id=req.params.id;
    try {
       await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"deleted successfully"})) 
    } catch (error) {
        console.log(error);
    }
})

module.exports=router;