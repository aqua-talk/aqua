//
//  LogoViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/21.
//

import UIKit
import GoogleSignIn

class LogoViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        GIDSignIn.sharedInstance()?.restorePreviousSignIn() // 자동로그인
        if AppDelegate.loginToken {
            guard let homeVC = self.storyboard?.instantiateViewController(withIdentifier: "TabBarController") else {
                return
            }
            self.navigationController?.pushViewController(homeVC, animated: true)
        }else {
            guard let homeVC = self.storyboard?.instantiateViewController(withIdentifier: "LoginViewController") else {
                return
            }
            self.navigationController?.pushViewController(homeVC, animated: true)
        }
    }
    


}
