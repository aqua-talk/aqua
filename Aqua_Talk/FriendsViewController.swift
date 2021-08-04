//
//  FriendsViewController.swift
//  Aqua_Talk
//
//  Created by Jeongguk Kim on 2021/08/04.
//

import UIKit

class FriendsViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        self.setLeftAlignedNavigationItemTitle(text: "BYOI", color: .white, margin: 120)
        // Do any additional setup after loading the view.
    }
    

}


extension UIViewController {
    func setLeftAlignedNavigationItemTitle(text: String,
                                               color: UIColor,
                                               margin left: CGFloat)
        {
            let titleLabel = UILabel()
            titleLabel.textColor = color
            titleLabel.textAlignment = .left
            titleLabel.translatesAutoresizingMaskIntoConstraints = false
            
            self.navigationItem.titleView = titleLabel
            
            guard let containerView = self.navigationItem.titleView?.superview else { return }
            
            // NOTE: This always seems to be 0. Huh??
            let leftBarItemWidth = self.navigationItem.leftBarButtonItems?.reduce(0, { $0 + $1.width })
            
            NSLayoutConstraint.activate([
                titleLabel.topAnchor.constraint(equalTo: containerView.topAnchor),
                titleLabel.bottomAnchor.constraint(equalTo: containerView.bottomAnchor),
                titleLabel.leftAnchor.constraint(equalTo: containerView.leftAnchor,
                                                 constant: (leftBarItemWidth ?? 0) + left),
                titleLabel.rightAnchor.constraint(equalTo: containerView.rightAnchor)
            ])
        }
}
