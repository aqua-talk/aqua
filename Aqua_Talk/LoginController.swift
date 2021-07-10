//
//  ViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/06/28.
//

import UIKit

class LoginController: UIViewController {

    @IBOutlet var emailTextField: UITextField!
    @IBOutlet var passwordTextField: UITextField!
    @IBOutlet var errorLabel: UILabel!
    @IBOutlet var loginButton: UIButton!
    @IBOutlet var singupLabel: UILabel!
    
    let loginStyoryboard = UIStoryboard(name: "Main", bundle: nil)
    
    var errorHeight: NSLayoutConstraint!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        loginButton.isEnabled = false
        errorHeight = errorLabel.heightAnchor.constraint(equalToConstant: 0)
        errorHeight.isActive = true
        passwordTextField.addTarget(self, action: #selector(passwordLength), for: .editingChanged)
        let tab: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(moveToSingup))
        singupLabel.isUserInteractionEnabled = true
        singupLabel.addGestureRecognizer(tab)
    }


    @IBAction func loginButton(_ sender: UIButton) {
        let emailText = emailTextField.text
        let passwordText = passwordTextField.text
        
        if !isValidEmail(email: emailText) {
            errorLabel.text = "이메일 형식을 확인하세요."
            errorHeight.isActive = false
            return
        }
        if !isValidPassword(password: passwordText) {
            errorLabel.text = "비밀번호를 확인하세요."
            errorHeight.isActive = false
            return
        }
        errorHeight.isActive = true
    }
    @objc func moveToSingup(){
        print("asdfasdfasdf")
        let singUpVC = loginStyoryboard.instantiateViewController(identifier: "SingUpVC")
        self.show(singUpVC, sender: self)
    }
    
    @objc func passwordLength() {
        if passwordTextField.text!.count >= 4 {
            loginButton.backgroundColor = UIColor.darkGray
            loginButton.setTitleColor(UIColor.white, for: .normal)
            loginButton.isEnabled = true
        }else {
            loginButton.isEnabled = false
        }
    }
    
    func isValidEmail(email: String?) -> Bool {
        let emailPattern = #"^\S+@\S+\.\S+$"#
        let result = email?.range(
            of: emailPattern,
            options: .regularExpression
        )

        return result != nil
    }
    
    func isValidPassword(password: String?) -> Bool {
        let passwordPattern =
            // At least 8 characters 8자 이상
            #"(?=.{8,})"# +
            // At least one capital letter 하나 이상의 대문자
//            #"(?=.*[A-Z])"# +
            // At least one lowercase letter 하나 이상의 소문자
            #"(?=.*[a-z])"# +
            // At least one digit 한 자리 이상
            #"(?=.*\d)"# +
            // At least one special character 하나 이상의 특수 문자
            #"(?=.*[ !@#$%^&*?._-])"#
        
        let result = password?.range(
            of: passwordPattern,
            options: .regularExpression
        )

        return result != nil
    }
}

