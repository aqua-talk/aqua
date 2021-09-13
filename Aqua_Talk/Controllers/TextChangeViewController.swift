//
//  TextChangeViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/09/06.
//

import UIKit

class TextChangeViewController: UIViewController {
    @IBOutlet weak var textChangeView: UIView!
    @IBOutlet weak var textView: UITextView!
    @IBOutlet weak var textLength: UILabel!
    @IBOutlet weak var updateButton: UIBarButtonItem!
    @IBOutlet weak var textDeleteButton: UIButton!
    
    var count: Int?
    var text: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setSize()
        textChangeView.labelAddBottomBorderWithColor(color: UIColor.gray, width: CGFloat(1))
        textView.isScrollEnabled = false
        textView.text = text
        textDeleteButton.isHidden = textView.text!.count == 0 ? true : false
        textLength.text = "\(textView.text!.count)/\(count!)"
        
    }
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(true)
        self.textView.becomeFirstResponder() //포커스 잡아주는거임
    }

    @IBAction func textDelete(_ sender: Any) {
        textView.text = ""
        textDeleteButton.isHidden = true
        setSize()
        textLength.text = "\(textView.text!.count)/\(count!)"
    }
    @IBAction func updateText(_ sender: Any) {
        
    }
    @IBAction func cancel(_ sender: Any) {
        dismiss(animated: false, completion: nil)
    }
    
    private func setSize(){
        let size = CGSize(width: textView.bounds.width, height: .infinity)
        let estimatedSize = textView.sizeThatFits(size)
        textView.constraints.forEach { (constraint) in
            if constraint.firstAttribute == .height {
                constraint.constant = estimatedSize.height
            }
        }
    }
}

extension TextChangeViewController: UITextViewDelegate {
    func textViewDidChange(_ textView: UITextView) {
        setSize()
        if textView.text!.count > count! {
            textView.deleteBackward()
        }
        textDeleteButton.isHidden = textView.text!.count == 0 ? true : false
        textLength.text = "\(textView.text!.count)/\(count!)"
    }
}



