//
//  SingUpViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/07/10.
//

import UIKit

class SingUpViewController: UIViewController {
    @IBOutlet var emailTextField: UITextField!
    @IBOutlet var nameTextField: UITextField!
    @IBOutlet var passwordTextField: UITextField!
    @IBOutlet var passwordCheckTextField: UITextField!
    
    var verification = false
    let regularExpression = RegularExpression()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        
    }
    
    @IBAction func close(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    @IBAction func idVerification(_ sender: Any) {
    }
    @IBAction func createUser(_ sender: Any) {
        if !verification {
            let alert = UIAlertController(title: "중복확인", message: "이메일 중복확인을 해주세요.", preferredStyle: .alert)
            let ok = UIAlertAction(title: "확인", style: .default, handler: nil)
            alert.addAction(ok)
            self.present(alert, animated: true, completion: nil)
        }
        else if nameTextField.text!.count < 2 {
            let alert = UIAlertController(title: "이름", message: "이름을 2글자 이상 적어 주세요.", preferredStyle: .alert)
            let ok = UIAlertAction(title: "확인", style: .default, handler: nil)
            alert.addAction(ok)
            self.present(alert, animated: true, completion: nil)
        }
        else if !regularExpression.isValidEmail(email: emailTextField.text) {
            let alert = UIAlertController(title: "이메일", message: "이메일 형식에 맞게 입력하세요", preferredStyle: .alert)
            let ok = UIAlertAction(title: "확인", style: .default, handler: nil)
            alert.addAction(ok)
            self.present(alert, animated: true, completion: nil)
        }
        else if !regularExpression.isValidPassword(password: passwordTextField.text) {
            let alert = UIAlertController(title: "비밀번호", message: "8자 이상, 특수문자 포함, 숫자를 포함해야 합니다.", preferredStyle: .alert)
            let ok = UIAlertAction(title: "확인", style: .default, handler: nil)
            alert.addAction(ok)
            self.present(alert, animated: true, completion: nil)
        }
        else if passwordTextField.text != passwordCheckTextField.text {
            let alert = UIAlertController(title: "비밀번호", message: "비밀번호를 확인해 주세요.", preferredStyle: .alert)
            let ok = UIAlertAction(title: "확인", style: .default, handler: nil)
            alert.addAction(ok)
            self.present(alert, animated: true, completion: nil)
        }
    }
}
