//
//  ViewModels.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/29.
//

import UIKit

class UserViewModel {
//    enum Section: Int, CaseIterable {
//        case my
//        case friendList
//
//        var title: String {
//            switch self {
//            case .my: return ""
//            default: return "친구"
//            }
//        }
//    }
    private let manager = AquaManager.shared
    
    var userInfo: UserInfo {
        return manager.user!
    }
    var friends: [FriendInfo] {
        return manager.friends
    }
    var friendsCount: Int {
        return manager.friends.count
    }
//    var numOfSection: Int {
//        return Section.allCases.count
//    }
    func addFriend(_ friend: FriendInfo) {
        manager.addFriend(friend)
    }
    
    func deleteFriend(_ friend: FriendInfo) {
        manager.deleteFriend(friend)
    }
    
    func updateUser(_ user: UserInfo) {
        manager.updateUser(user)//구현안해놨음
    }
    func loadTasks(_ email:String, _ password: String) {
        manager.loadUser(email, password)
    }
}

class TalkViewModel {
    
}

class MypageViewModel {
    
}
