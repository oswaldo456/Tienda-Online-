const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class Productos extends Model {​​​​}​​​​
Productos.ini({​​​​
    ID_Productos:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    Titulo:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    Imagen:{​​​​
        type: DataTypes.BLOB,
        allowNull:True
    }​​​​,
    Imagenes:{​​​​
        type: DataTypes.BLOB,
        allowNull:True
    }​​​​,
    Descripcion:{​​​​
        type: DataTypes.STRING,
        allowNull:True
    }​​​​,
    Precio:{
        type: DataTypes.FLOAT,
        allowNull:True
    },
    Cantidad:{
        type: DataTypes.INT,
        allowNull:True
    },
    BreveDescripcion:{
        type: DataTypes.STRING,
        allowNull:True
    }
}​​​​,{​​​​
sequelize, 
modelName:'Productos'
}​​​​);
