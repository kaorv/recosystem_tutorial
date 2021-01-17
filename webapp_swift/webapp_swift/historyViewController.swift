//
//  historyViewController.swift
//  webapp_swift
//
//  Created by 中野薫 on 2021/01/04.
//

import UIKit

class historyViewController: UIViewController {

    @IBOutlet weak var detail: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let stringUrl = "http://'macのIPアドレス':8000/detail.php"
        let url = URL(string: stringUrl.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!)!
        let req = URLRequest(url: url)
        let task = URLSession.shared.dataTask(
            with: req,
            completionHandler: {
                (data, res, err) in //クロージャ
                if data != nil {
                    var text = NSString(data: data!, encoding: String.Encoding.utf8.rawValue)
                    print(text!)
                    DispatchQueue.main.async(execute: {
                        self.detail.text = text as String?
                    })
                }else{
                    DispatchQueue.main.async(execute: {
                        print("no data!")
                    })
                }
            }
        )
        task.resume()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "back" {
            let backVC = segue.destination as! ViewController
        }
    }
    
    @IBAction func back(_ sender: Any) {
        performSegue(withIdentifier: "back", sender: nil);
    }


}
