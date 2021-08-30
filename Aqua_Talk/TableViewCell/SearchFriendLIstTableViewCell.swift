//
//  SearchFriendLIstTableViewCell.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/30.
//

import UIKit

class SearchFriendLIstTableViewCell: UITableViewCell {

    @IBOutlet weak var profileImage: UIImageView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var addButton: UIButton!
    
    func update(info: FriendInfo) {
        profileImage.setImageUrl(info.profile!)
        profileImage.layer.cornerRadius = 20
        nameLabel.text = info.name
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    @IBAction func addFriend(_ sender: Any) {
    }
    
}
