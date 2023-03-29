module.exports=(sequelize, DataTypes)=>{
    const Curso=sequelize.define('Curso', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true
    });

    return Curso;
}