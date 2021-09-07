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
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "showDetail" {
            guard let vc = segue.destination as? DetailViewController else {
                return
            }
            let indexPath = sender as? IndexPath
            vc.modalPresentationStyle = .fullScreen
//            vc.modalTransitionStyle = .coverVertical
            vc.section = indexPath?.section
            vc.row = indexPath?.row
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let nibName = UINib(nibName: "FriendsTableViewCell", bundle: nil)
        tableView.register(nibName, forCellReuseIdentifier: "friendCell")
        
    }
    @IBAction func searchButton(_ sender: Any) {
        guard let VC = self.storyboard?.instantiateViewController(identifier: "SearchViewController") else {
            return
        }
        self.navigationController?.pushViewController(VC, animated: false)
        
    }
    
}


extension HomeViewController: UITableViewDelegate {
    func numberOfSections(in tableView: UITableView) -> Int {
        return 2
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        if section == 0 {
            return UIView(frame: CGRect(x: 0, y: 0, width: 0, height: 0))
        }
        let dummyViewHeight = CGFloat(30)
        self.tableView.tableHeaderView = UIView(frame: CGRect(x: 0, y: 0, width: self.tableView.bounds.size.width, height: dummyViewHeight))
        self.tableView.contentInset = UIEdgeInsets(top: -dummyViewHeight, left: 0, bottom: 0, right: 0)
        
        let view = UIView(frame: CGRect(x:0, y:0, width: tableView.frame.width, height: tableView.frame.height))
        
        view.backgroundColor = .clear
        let label = UILabel(frame: CGRect(x: 30, y: 0, width: view.frame.width, height: 30))
        label.font = UIFont.boldSystemFont(ofSize: 12)
        label.text = "친구 \(userViewModel.friendsCount)"
        label.textColor = .systemGray
        
        
        view.addSubview(label)
        return view
    }
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return section == 0 ? 0 : 30
    }
    func tableView(_ tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return section == 1 ? 0 : 1
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "showDetail", sender: indexPath)
    }
}

extension HomeViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return section == 0 ? 1 : userViewModel.friendsCount
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if indexPath.section == 1 {
            guard let cell = tableView.dequeueReusableCell(withIdentifier: "friendCell", for: indexPath) as? FriendsTableViewCell else {
                return UITableViewCell()
            }
            let friendInfo = userViewModel.friendInfo(at: indexPath.row)
            cell.update(info: friendInfo)
            tableView.rowHeight = 60
            return cell
        }
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath) as? MyTableViewCell else {
            return UITableViewCell()
        }
        cell.update(info: userViewModel.userInfo)
        tableView.rowHeight = 80
        return cell
    }
    
    
}
