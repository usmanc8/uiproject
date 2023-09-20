// pipeline{
//     agent{
//         label "Windows_Agent"
//     }
//     stages{
//         stage("Cleanup Workspace"){
//             steps {
//                 CleanWs()
//             }
//         }
    
//         stage("Checkout from SCM"){
//             steps {
//                 git branch: 'main', credentialsId: 'github', url: "https://github.com/usmanc8/uiproject"
//             }
//         }
//     }
// }


pipeline{
    agent{
        label "Windows_Agent"
    }
    stages{
        stage("Cleanup Workspace"){
            steps {
                CleanWs()
            }
        }
    
        stage("Checkout from SCM"){
            steps {
                echo "Hello world"
            }
        }
    }
}