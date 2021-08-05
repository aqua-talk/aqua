//
//  UserInfoModel.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/11.
//

import UIKit

struct UserInfo: Codable {
    let email: String
    var name: String
    var password: String
    var statusMessage: String?
    var profile: String?
    var firends: [FriendInfo]?
    
    mutating func update(name: String, password: String, statusMessage: String, profile: String, friends: [FriendInfo]){
        self.name = name
        self.password = password
        self.statusMessage = statusMessage
        self.profile = profile
        self.firends = friends
    }
    
    enum CodingKeys: String, CodingKey{
        case email
        case name
        case password
        case statusMessage
        case profile
        case firends
        
    }
}

struct FriendInfo: Equatable, Codable {
    let email: String
    var name: String
    var statusMessage: String?
    var profile: String?
    
    mutating func update(name: String, statusMessage: String, profile: String){
        self.name = name
        self.statusMessage = statusMessage
        self.profile = profile
    }
    
    enum CodingKeys: String, CodingKey {
        case email
        case name
        case statusMessage
        case profile
    }
    
    static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.email == rhs.email
    }
}


class AquaManager {
    static let shared = AquaManager()
    var user: UserInfo?
    var friends: [FriendInfo] = []
    
//    func createFriend(email: String, name: String, statusMessage: String, profile: UIImage) -> FriendInfo{
//        return FriendInfo(email: email, name: name, statusMessage: statusMessage, profile: profile)
//    }
    func loadUser(_ userInfo: UserInfo){
        // 서버에서 받아온 정보를 넣어주면됨 대기
    }
    func updateUser(_ userInfo: UserInfo){
        
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
        
        //여기 서버에서 받아와서 업데이트임 이부분
        guard let index = friends.firstIndex(of: friend) else {
            return
        }
        friends[index].update(name: friend.name, statusMessage: friend.statusMessage ?? "", profile: friend.profile ?? "")
        saveFriend()
    }
    func saveFriend(){
        //친구검색해서 추가하면 서버에 등록시켜줘야함
    }
}



