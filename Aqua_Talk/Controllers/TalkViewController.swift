//
//  TalkViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/05.
//

import UIKit

class TalkViewController: UIViewController {
//    let userViewModel = UserViewModel()
    
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.register(MyTableViewCell.self, forCellReuseIdentifier: "myTableViewCell")
        tableView.register(FriendsTableViewCell.self, forCellReuseIdentifier: "friendsTableViewCell")
        // Do any additional setup after loading the view.
    }

}


extension TalkViewController: UITableViewDelegate {
    
}
extension TalkViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1//userViewModel.friendsCount+1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if indexPath.row > 1 {
            guard let cell = tableView.dequeueReusableCell(withIdentifier: "friendsTableViewCell", for: indexPath) as? FriendsTableViewCell else {
                return UITableViewCell()
            }
//            let friendInfo = userViewModel.friendInfo(at: indexPath.row-1)
//            cell.update(info: friendInfo)
            return cell
        }
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "myTableViewCell", for: indexPath) as? MyTableViewCell else {
            return UITableViewCell()
        }
//        cell.update(info: userViewModel.userInfo)
        return cell
    }
    
    
}
