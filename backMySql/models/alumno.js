module.exports=(sequelize, DataTypes)=>{
    const Alumno=sequelize.define('Alumno', {
        dni:{
            type: DataTypes.INTEGER,
            primaryKey: true, 
            unique: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true
    });

    return Alumno;
}