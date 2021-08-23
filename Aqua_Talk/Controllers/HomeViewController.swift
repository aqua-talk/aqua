//
//  TalkViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/05.
//

import UIKit

class HomeViewController: UIViewController {
    let userViewModel = UserViewModel()
    
    
    
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let nibName = UINib(nibName: "FriendsTableViewCell", bundle: nil)
        tableView.register(nibName, forCellReuseIdentifier: "friendCell")
        
    }

}


extension HomeViewController: UITableViewDelegate {
    
}
extension HomeViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//        print(userViewModel.friendsCount+1)
        return userViewModel.friendsCount+1
//        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
//        print(indexPath.row)
        if indexPath.row > 0 {
            print("여기는??")
            guard let cell = tableView.dequeueReusableCell(withIdentifier: "friendCell", for: indexPath) as? FriendsTableViewCell else {
                return UITableViewCell()
            }
            let friendInfo = userViewModel.friendInfo(at: indexPath.row-1)
            cell.update(info: friendInfo)
            return cell
        }
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath) as? MyTableViewCell else {
            return UITableViewCell()
        }
        cell.update(info: userViewModel.userInfo)
        return cell
    }
    
    
}
