//
//  DetailViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/27.
//

import UIKit

class DetailViewController: UIViewController {
    @IBOutlet weak var profileImage: UIImageView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var statusMessage: UILabel!
    
    let userViewModel = UserViewModel()
    var section: Int?
    var row: Int?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        profileImage.layer.cornerRadius = 40
        updateUI()
    }
    
    func updateUI(){
        if section == 0{
            
            profileImage.setImageUrl(userViewModel.userInfo.profile) //****************
//            profileImage.image = UIImage(named: "luffy.jpg")//여기 지워야함 *****************
            nameLabel.text = userViewModel.userInfo.name
            statusMessage.text = userViewModel.userInfo.statusMessage
        }else {
            profileImage.setImageUrl(userViewModel.userInfo.friends![row!].profile!)
//            profileImage.image = UIImage(named: "defaultImage.jpeg")//여기 지워야함 *****************
            nameLabel.text = userViewModel.userInfo.friends?[row!].name
            statusMessage.text = userViewModel.userInfo.friends![row!].statusMessage
        }
    }
    @IBAction func close(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func talkButton(_ sender: Any) {
    }
}
