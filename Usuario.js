const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class Usuario extends Model {​​​​}​​​​
Usuario.ini({​​​​
    nombre:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    primerApellido:{​​​​//Aqui se colocará el Apellido Materno
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    segundoApellido:{//Segundo apellido​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    contraseña:{​​​​
        type: DataTypes.CHAR,
        allowNull:True
    }​​​​,
    Email:{​​​​
        type: DataTypes.CHAR,
        allowNull:True
    }​​​​,
    Edad:{
        type: DataTypes.INT,
        allowNull:True
    }
}​​​​,{​​​​
sequelize, 
modelName:'Usuario'
}​​​​);