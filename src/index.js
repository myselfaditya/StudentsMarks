const express=require("express");
const mongoose=require("mongoose")
const route=require("./routes/route")

const app=express();

app.use(express.json());
mongoose.connect("mongodb+srv://iamaditya:gbCsJkKLQc8U2oyp@cluster0.brptf5o.mongodb.net/StudentTask?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(()=> console.log("mongodb is connect"))
    .catch((error)=>console.log(error.message))

app.use("/",route)

app.listen(3000,()=>{
console.log("Express app running on "+3000)
})