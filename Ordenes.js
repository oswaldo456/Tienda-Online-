const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class Ordenes extends Model {​​​​}​​​​
Ordenes.ini({​​​​
    ID_Ordenes:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    ID_Usuarios:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​
}​​​​,{​​​​
sequelize, 
modelName:'Ordenes'
}​​​​);//hola (Max)
