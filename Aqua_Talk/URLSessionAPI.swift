//
//  URLSesseionAPI.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/31.
//

import UIKit

class URLSessionAPI {
    
    static func createUser(_ email: String, _ name: String, _ password: String) {
        let parameter = [
            "email": "\(email)",
            "name": "\(name)",
            "password": "\(password)",
            "statusMessage": "",
            "profile": "",
            "friends": ""
        ]
        
        guard let url = URL(string: "보낼주소 미정") else {return}
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: parameter, options: [])
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
                
            if let error = error {
                print("Error took place \(error)")
                return
            }
     
            // Convert HTTP Response Data to a String
            if let data = data, let dataString = String(data: data, encoding: .utf8) {
                print("Response data string:\n \(dataString)")
                }
        }
        task.resume()


    
    }
    static func loginUserInfo(_ email: String, _ password: String ,completion: @escaping ([UserInfo]) -> Void) {
        let session = URLSession(configuration: .default)
        
        var urlComponents = URLComponents(string: "http://18.119.30.174:3000/")!
//        let emailQuery = URLQueryItem(name: "email(미정임)", value: email)
//        let passwordQuery = URLQueryItem(name: "password(미정)", value: password)
//        
//        urlComponents.queryItems?.append(emailQuery)
//        urlComponents.queryItems?.append(passwordQuery)
        let requestURL = urlComponents.url!
        
        let dataTask = session.dataTask(with: requestURL) { data, response, error in
            let successRange = 200..<300
            
            guard error == nil, let statusCode = (response as? HTTPURLResponse)?.statusCode, successRange.contains(statusCode) else {
                completion([])
                return
            }
            guard let resultData = data else {
                completion([])
                return
            }
            let userInfo = URLSessionAPI.parseUserInfo(resultData)
            completion(userInfo)
        }
        dataTask.resume()
    }
    
    static func emailVerification(_ email: String, completion: @escaping ([Email]) -> Void) {
        let session = URLSession(configuration: .default)
        
        var urlComponents = URLComponents(string: "여기에 서버 url주소")!
        let emailQuery = URLQueryItem(name: "email(미정임)", value: email)
        
        urlComponents.queryItems?.append(emailQuery)
        
        let requestURL = urlComponents.url!
        
        let dataTask = session.dataTask(with: requestURL) { data, response, error in
            let successRange = 200..<300
            
            guard error == nil, let statusCode = (response as? HTTPURLResponse)?.statusCode, successRange.contains(statusCode) else {
                completion([])
                return
            }
            guard let resultData = data else {
                completion([])
                return
            }
            let emails = URLSessionAPI.parseEmails(resultData)
            completion(emails)
        }
        dataTask.resume()
    }
    static func searchFriend(_ name: String, completion: @escaping ([FriendInfo]) -> Void) {
        let session = URLSession(configuration: .default)
        
        var urlComponents = URLComponents(string: "http://18.119.30.174:3000")!
        let nameQuery = URLQueryItem(name: "email(미정임)", value: name)
        
        urlComponents.queryItems?.append(nameQuery)
        
        let requestURL = urlComponents.url!
        
        let dataTask = session.dataTask(with: requestURL) { data, response, error in
            let successRange = 200..<300
            
            guard error == nil, let statusCode = (response as? HTTPURLResponse)?.statusCode, successRange.contains(statusCode) else {
                completion([])
                return
            }
            guard let resultData = data else {
                completion([])
                return
            }
            let friends = URLSessionAPI.parseFriends(resultData)
            completion(friends)
        }
        dataTask.resume()
    }
    static func parseUserInfo(_ data: Data) -> [UserInfo] {
        let decoder = JSONDecoder()
        
        do {
            let response = try decoder.decode(UserInfoResponse.self, from: data)
            let user = response.user
            print("******\(user)")
            return user
        }catch let error {
            print("-->parsing error: \(error.localizedDescription)")
            return []
        }
    }
    
    static func parseEmails(_ data: Data) -> [Email] {
        let decoder = JSONDecoder()
        
        do {
            let response = try decoder.decode(Response.self, from: data)
            let emails = response.emails
            return emails
        }catch let error {
            print("-->parsing error: \(error.localizedDescription)")
            return []
        }
    }
    static func parseFriends(_ data: Data) -> [FriendInfo] {
        let decoder = JSONDecoder()
        
        do {
            let response = try decoder.decode(FriendInfoResponse.self, from: data)
            let friends = response.friends
            return friends
        }catch let error {
            print("-->parsing error: \(error.localizedDescription)")
            return []
        }
    }

}

struct UserInfoResponse: Codable {
    let resultCount: Int
    let user: [UserInfo]
    
    enum CodingKeys: String, CodingKey {
        case resultCount
        case user
    }
}
struct FriendInfoResponse: Codable {
    let resultCount: Int
    let friends: [FriendInfo]
    
    enum CodingKeys: String, CodingKey {
        case resultCount
        case friends
    }
}

struct Response: Codable {
    let resultCount: Int
    let emails: [Email]
    
    enum CodingKeys: String, CodingKey{
        case resultCount
        case emails = "results"
    }
}
struct Email: Codable {
    let isValue: String
    
    enum CodingKeys: String, CodingKey {
        case isValue = "아직 미정"
    }
}
