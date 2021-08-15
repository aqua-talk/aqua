module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id :{
            /* column 속성들 */
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            primaryKey:true
            /* 여기까지 */
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        displayName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        googleId: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
}

