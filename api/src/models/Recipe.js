const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
   
    image:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    summary:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore:{
    // (health score) puntaje de salud
    type: DataTypes.INTEGER,
    allowNull: false,

    },
    steps:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdInDb:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true,
    }
  },{
    timestamps: false
})
};
