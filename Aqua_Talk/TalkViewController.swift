//
//  TalkViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/05.
//

import UIKit

class TalkViewController: UIViewController {
    let userViewModel = UserViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

}


extension TalkViewController: UITableViewDelegate {
    
}
extension TalkViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "myViewCell", for: indexPath) as? MyViewCell else {
            return UITableViewCell()
        }
        cell.update(info: userViewModel.userInfo)
        return cell
    }
    
    
}
