//
//  TextChangeViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/09/06.
//

import UIKit

class TextChangeViewController: UIViewController, UITextFieldDelegate {

    @IBOutlet weak var textField: UITextField!
    @IBOutlet weak var textLength: UILabel!
    @IBOutlet weak var updateButton: UIBarButtonItem!
    @IBOutlet weak var textDeleteButton: UIButton!
    
    var count: Int?
    var name: String?
    var message: String?
    override func viewDidLoad() {
        super.viewDidLoad()
        self.textField.delegate = self
        textField.borderStyle = .none
        textField.textFielAaddBottomBorderWithColor(color: UIColor.gray, width: CGFloat(1))
    }
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(true)
        self.textField.becomeFirstResponder()
    }
    
    @IBAction func textFieldChanged(_ sender: Any) {
        if textField.text!.count > count! {
            textField.deleteBackward()
        }
        textLength.text = "\(textField.text!.count)/\(count)"
    }

    @IBAction func textDelete(_ sender: Any) {
        textField.text = ""
        textLength.text = "\(textField.text!.count)/\(count)"
    }
    @IBAction func updateText(_ sender: Any) {
        
    }
    @IBAction func cancel(_ sender: Any) {
        dismiss(animated: false, completion: nil)
    }
    
}

extension UITextField {
    func textFielAaddBottomBorderWithColor(color: UIColor, width: CGFloat) {
        let border = CALayer()
        border.backgroundColor = color.cgColor
        border.frame = CGRect(x: 0, y: self.frame.size.height - width, width: self.frame.size.width, height: width)
        self.layer.addSublayer(border)
      }
}
