//
//  UserInfoModel.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/11.
//

import UIKit
struct FriendInfo: Equatable {
    let email: String
    var name: String
    var statusMessage: String?
    var profile: UIImage?
    
    mutating func update(name: String, statusMessage: String, profile: UIImage){
        self.name = name
        self.statusMessage = statusMessage
        self.profile = profile
    }
    
    static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.email == rhs.email
    }
}
class FriendsManager {
    static let shared = FriendsManager()
    
    var friends: [FriendInfo] = []
    
    func createFriend(email: String, name: String, statusMessage: String, profile: UIImage) -> FriendInfo{
        return FriendInfo(email: email, name: name, statusMessage: statusMessage, profile: profile)
    }
    func addFriend(_ friend: FriendInfo) {
        friends.append(friend)
        saveFriend()
    }
    func deleteFriend(_ friend: FriendInfo) {
        friends = friends.filter { $0.email != friend.email }
        saveFriend()
    }
    func updateFriend(_ friend: FriendInfo) {
        guard let index = friends.firstIndex(of: friend) else {
            return
        }
        friends[index].update(name: friend.name, statusMessage: friend.statusMessage ?? "", profile: friend.profile ?? UIImage())//여기 나중에 디폴트 이미지 구해서 ?? 뒤에 넣어줘야함
        saveFriend()
    }
    func saveFriend(){
        
    }
}


struct UserInfo {
    let email: String
    var name: String
    var password: String
    var statusMessage: String?
    var profile: UIImage?
    var firends: [FriendInfo]?
    
    mutating func update(name: String, password: String, statusMessage: String, profile: UIImage, friends: [FriendInfo]){
        self.name = name
        self.password = password
        self.statusMessage = statusMessage
        self.profile = profile
        self.firends = friends
    }
    

}
