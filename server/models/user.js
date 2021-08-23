const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('user',{
        email:{
            type: Sequelize.STRING(100),
            allowNull: false,
            primaryKey: true,
        },
        userid:{
            type: Sequelize.STRING(100  ),
            allowNull: false,
        },
        username:{
            type: Sequelize.STRING(100),
            allowNull: false, // 카카오 로그인은 비번 필요없으니,,
        },
        gtoken :{ // 뭐로 로그인 했는지 : 카카오, 로컬,,
            type: Sequelize.STRING(1000),
            allowNull: false,
            
        },
       

    },{
        timestamps:true,
        paranoid : true, // 삭제일 (복구용)
    })
})