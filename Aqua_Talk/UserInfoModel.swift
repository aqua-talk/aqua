//
//  UserInfoModel.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/11.
//

import UIKit

//struct UserInfo: Codable {
//    let email: String
//    var name: String
////    var password: String
//    var statusMessage: String?
//    var profile: String?
//    var firends: [FriendInfo]?
//    let token: String
//    
//    
//    init(){
//        email="test@emai.com"
//        name = "김정국"
////        password = "testPassword"
//        statusMessage = "test~~~~~"
//        profile = "image"
//        token = "token"
//        firends = [
//            FriendInfo(),
//            FriendInfo(),
//            FriendInfo()
//        ]
//    }
//    mutating func update(name: String,/* password: String,*/ statusMessage: String, profile: String, friends: [FriendInfo]){
//        self.name = name
////        self.password = password
//        self.statusMessage = statusMessage
//        self.profile = profile
//        self.firends = friends
//    }
//    
//    enum CodingKeys: String, CodingKey{
//        case email
//        case name
////        case password
//        case statusMessage
//        case profile
//        case firends
//        case token
//    }
//}
struct LoginResponse: Codable{
    let user: UserInfo
    
    init(){
        user = UserInfo()
    }
    enum CodingKeys: String, CodingKey{
        case user = "user_info"
    }
}
struct UserInfo: Codable {
    let email: String
//    let userid: String
    let name: String
    let statusMessage: String
    let profile: String
    let token: String
    let friends: [FriendInfo]?
    init(){
        email = ""
//        userid = ""
        name = ""
        statusMessage = ""
        profile = ""
        token = ""
        friends = []
    }
    enum CodingKeys: String, CodingKey {
        case email
//        case userid
        case name = "username"
        case statusMessage
        case profile
        case token = "gtoken"
        case friends = "friend_list"
    }
}
struct FriendInfo: Equatable, Codable {
    let email: String
    var name: String
    var statusMessage: String?
    var profile: String?
    
    init(){
        email = "friend@email.com"
        name = "김친구"
        statusMessage = "상태 메시지"
        profile = "fiendimage"
    }
    
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
    
//    func createFriend(email: String, name: String, statusMessage: String, profile: UIImage) -> FriendInfo{
//        return FriendInfo(email: email, name: name, statusMessage: statusMessage, profile: profile)
//    }
//    func loadUser(_ email: String, _ password: String){
//        URLSessionAPI.loginUserInfo(email, password) { userInfo in
//            print("--------->\(userInfo)")
//            guard userInfo.count != 0 else {
//                print("not value")
//                return
//            }
//            self.user = userInfo[0]
//        }
//        // 서버에서 받아온 정보를 넣어주면됨 대기
//    }
    func googleUserLoad(userInfo: UserInfo){
        user = userInfo
    }
//    func updateUser(_ userInfo: UserInfo){
//
//    }
//    func addFriend(_ friend: FriendInfo) {
//        friends.append(friend)
//        saveFriend()
//    }
//    func deleteFriend(_ friend: FriendInfo) {
//        friends = friends.filter { $0.email != friend.email }
//        saveFriend()
//    }
//    func updateFriend(_ friend: FriendInfo) {
//
//        //여기 서버에서 받아와서 업데이트임 이부분
//        guard let index = friends.firstIndex(of: friend) else {
//            return
//        }
//        friends[index].update(name: friend.name, statusMessage: friend.statusMessage ?? "", profile: friend.profile ?? "")
//        saveFriend()
//    }
//    func saveFriend(){
//        //친구검색해서 추가하면 서버에 등록시켜줘야함
//    }
}



