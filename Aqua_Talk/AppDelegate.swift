//
//  AppDelegate.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/06/28.
//

import UIKit
import GoogleSignIn
import Alamofire

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    static var loginToken: Bool = false
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        GIDSignIn.sharedInstance()?.clientID = "330599781263-7rnge85asous8jrt3a45dji96368hh2l.apps.googleusercontent.com"
        GIDSignIn.sharedInstance()?.delegate = self
       
        return true
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        return (GIDSignIn.sharedInstance()?.handle(url))!
    }
    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        // Called when a new scene session is being created.
        // Use this method to select a configuration to create the new scene with.
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }

    func application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>) {
        // Called when the user discards a scene session.
        // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
        // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
    }

}

extension AppDelegate: GIDSignInDelegate {
    public static var user: GIDGoogleUser!
    func sign(_ signIn: GIDSignIn!, didSignInFor user: GIDGoogleUser!, withError error: Error!) {
        if let error = error {
            if(error as NSError).code == GIDSignInErrorCode.hasNoAuthInKeychain.rawValue {
                print("not signed in before or signed out")
            } else {
                print(error.localizedDescription)
            }
        }

        // singleton 객체 - user가 로그인을 하면, AppDelegate.user로 다른곳에서 사용 가능
        AppDelegate.user = user
        print(user!.profile.email!)
        let loginParameter = [
            "email": user!.profile.email!,
            "userid": user!.userID!,
            "username": user!.profile.name!,
            "gtoken": user!.authentication.accessToken!
        ]
        AppDelegate.loginToken = true
//        self.window = UIWindow(frame: UIScreen.main.bounds)
//        let stroyboard = UIStoryboard(name: "Main", bundle: nil)
//        let loginViewController = stroyboard.instantiateViewController(withIdentifier: "LoginViewController") as! LoginViewController
//
////                    let loginStyoryboard = UIStoryboard(name: "Main", bundle: nil)
//        guard let homeVC = loginViewController.storyboard?.instantiateViewController(identifier: "TabBarController") else {
//            print("error")
//            return
//        }
//        print("2")
//        loginViewController.navigationController?.pushViewController(homeVC, animated: true)
//        print("3")
        
        //======================
//        Alamofire.request("http://192.168.25.3:3000/api/login/info", method: .post, parameters: loginParameter)
//                    .validate(statusCode: 200..<300)
//            .responseJSON { (response) in switch response.result {
//            case .success(let jsonvalue):
//                do{
//                    let data = try JSONSerialization.data(withJSONObject: jsonvalue, options: .prettyPrinted)
//                    let value = AppDelegate.parseGUserInfo(data)
//                    print(value)
//                    //======================
//                    let vc = self.window?.rootViewController
////                    let loginStyoryboard = UIStoryboard(name: "Main", bundle: nil)
//                    guard let homeVC = vc?.storyboard?.instantiateViewController(identifier: "TabBarController") else {
//                        return
//                    }
//                    print("2")
//                    vc?.navigationController?.pushViewController(homeVC, animated: true)
//                    //======================
//                }
//                catch let error{
//                    print("-->parsing error: \(error.localizedDescription)")
//                }
//            case .failure(let error):
//                print("===========\(error.localizedDescription)")
//            }
//        }
        return
    }
    
    
    static func parseGUserInfo(_ data: Data) -> testResonse {
            let decoder = JSONDecoder()
            do {
                let response = try decoder.decode(testResonse.self, from: data)
                let user = response
                print("******\(user)")
                return user
            }catch let error {
                print("-->parsing error: \(error.localizedDescription)")
                return testResonse();
            }
        }

}

struct testResonse: Codable {
    let email: String
    let userid: String
    let username: String
    let token: String
    init(){
        email = ""
        userid = ""
        username = ""
        token = ""
    }
    enum CodingKeys: String, CodingKey {
        case email
        case userid
        case username
        case token
    }
}

