const { default: axios } = require("axios");
const User = require("../models/User");

//READ (OBTENCIÓN DE USUARIOS)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    //console.log('Solicitado por el usuario con id ' + req.user.userId)
    res.status(200).json(users);
  } catch (error) {
    console.log("Error al obtener usuarios - " + error.message);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

exports.getJPHUsers= async(req, res)=>{
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.status(200).json(data);
    }catch(error){
        res.status(502).json({message:"Error al obtener usuarios de JPH"});
    }
}