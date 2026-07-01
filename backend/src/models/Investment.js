const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Investment = sequelize.define('Investment', {
    investor_id: { type: DataTypes.INTEGER, allowNull: false },
    loan_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(15, 2), allowNull: false }
}, { tableName: 'investments' });

module.exports = Investment;
