pipeline{

    agent{
        label "Windows_Agent"
    }
    environment{
        APP_NAME = "uiproject"
        RELEASE = "1.0.0"
        DOCKER_USER = "usmanc8"
        DOCKER_PASS = 'dockerhub'
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD-NUMBER}"
    }

    stages{
        stage("Cleanup Workspace"){
            steps {
                CleanWs()
            }
        }
    
        stage("Checkout from SCM"){
            steps {
                git branch: 'main', credentialsId: 'github', url: "https://github.com/usmanc8/uiproject"
            }
        }
    
        stage("Build and Push Docker Image"){
            steps {
                script {
                    docker.withRegistry('',DOCKER_PASS) {
                        docker_image = docker.build "${IMAGE_NAME}"
                    }

                    docker.withRegistry('',DOCKER_PASS) {
                        docker_image.push("${IMAGE_TAG}")
                    }
                }
            }
        }
    }
}
