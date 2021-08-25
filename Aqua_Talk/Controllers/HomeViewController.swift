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
    func numberOfSections(in tableView: UITableView) -> Int {
        return 2
    }

//    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
//        if section == 1 {
//            return "친구 \(userViewModel.friendsCount)"
//        }
//        return ""
//    }
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        if section == 0 {
            return UIView(frame: CGRect(x:0, y:0, width: 0, height: 0))
        }
        let view = UIView(frame: CGRect(x:0, y:0, width: tableView.frame.width, height: tableView.frame.height))
        view.backgroundColor = .red
        let label = UILabel(frame: CGRect(x: 30, y: 0, width: view.frame.width, height: 30))
        label.font = UIFont.boldSystemFont(ofSize: 12)
        label.text = "친구 \(userViewModel.friendsCount)"
        label.textColor = .systemGray
        
        view.addSubview(label)
        return view
    }
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        if section == 0 {
            return 0
        }
        return 30
    }
    func tableView(_ tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return section == 1 ? 0 : 1
    }
}

extension HomeViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if section == 0 {
            return 1
        }
        return userViewModel.friendsCount
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if indexPath.section == 1 {
            guard let cell = tableView.dequeueReusableCell(withIdentifier: "friendCell", for: indexPath) as? FriendsTableViewCell else {
                return UITableViewCell()
            }
            let friendInfo = userViewModel.friendInfo(at: indexPath.row)
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
