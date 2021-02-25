const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class Usuario extends Model {​​​​}​​​​
Usuario.ini({​​​​
    nombre:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    primerApellido:{​​​​//Aqui se pondra el Apellido Materno
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    segundoApellido:{​​​​
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