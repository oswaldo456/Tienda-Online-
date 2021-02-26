const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class Categorias extends Model {​​​​}​​​​
Categorias.ini({​​​​
    ID_Categorias:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    Titulo:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​
    //agregue algo
}​​​​,{​​​​
sequelize, 
modelName:'Categorias'
}​​​​);