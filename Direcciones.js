const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class Direcciones extends Model {​​​​}​​​​
Direcciones.ini({​​​​
    ID_Direcciones:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    Linea1:{​​​​
        type: DataTypes.CHAR,
        allowNull:True
    }​​​​,
    Linea2:{​​​​
        type: DataTypes.CHAR,
        allowNull:True
    }​​​​,
    Ciudad:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    Estado:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    Pais:{
        type: DataTypes.STRING,
        allowNull:True
    },
    Telefono:{
        type: DataTypes.INT,
        allowNull:True
    },
    CP:{
        type: DataTypes.INT,
        allowNull:True
    },
    ID_Usuario:{
        type: DataTypes.INT,
        allowNull:True
    }
}​​​​,{​​​​
sequelize, 
modelName:'Direcciones'
}​​​​);