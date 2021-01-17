//
//  ViewController.swift
//  webapp_swift
//
//  Created by 中野薫 on 2021/01/04.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "history" {
            let listVC = segue.destination as! historyViewController
        }
    }

    @IBAction func history(_ sender: Any) {
        performSegue(withIdentifier: "history", sender: nil);
    }
    
}

