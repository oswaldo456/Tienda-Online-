const {​​​​ Sequelize, DataTypes, Model }​​​​ = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');
class DetallesOrdenes extends Model {​​​​}​​​​
DetallesOrdenes.ini({​​​​
    ID_DetallesOrdenes:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    ID_Ordenes:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    ID_Productos:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    Cantidad:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    ID_Categorias:{​​​​
        type: DataTypes.INT,
        allowNull:True
    }​​​​,
    ID_Direcciones:{
        type: DataTypes.INT,
        allowNull:True
    }
}​​​​,{​​​​
sequelize, 
modelName:'DetallesOrdenes'
}​​​​);