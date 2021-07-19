//
//  UserInfoModel.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/11.
//

import UIKit

struct UserInfo {
    let email: String
    let name: String
    let password: String
    var profile: UIImage?
    
    init(email: String, name: String, password: String){
        self.email = email
        self.name = name
        self.password = password
    }

}
