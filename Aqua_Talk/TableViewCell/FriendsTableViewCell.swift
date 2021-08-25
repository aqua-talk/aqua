//
//  FriendsTableViewCell.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/08.
//

import UIKit

class FriendsTableViewCell: UITableViewCell {

    
    @IBOutlet weak var profileImage: UIImageView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var statusMessage: UILabel!
    
    func update(info: FriendInfo) {
//        profileImage.setImageUrl(info.profile!)
        profileImage.image = UIImage(named: "defaultImage.jpeg")
        profileImage.layer.cornerRadius = 20
        nameLabel.text = info.name
//        statusMessage.text = info.statusMessage
        statusMessage.text = ""
        if statusMessage.text == ""{
            nameLabel.translatesAutoresizingMaskIntoConstraints = false
//            NSLayoutConstraint(item: nameLabel, attribute: .centerY, relatedBy: .equal, toItem: profileImage, attribute: .centerY, multiplier: 1, constant: 0).isActive = true
            NSLayoutConstraint(item: nameLabel,
                               attribute: .centerY,
                               relatedBy: .equal,
                               toItem: profileImage,
                               attribute: .centerY,
                               multiplier: 1.0,
                               constant: 0.0).isActive = true
        }
    }
    override func awakeFromNib() {
        
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
}
