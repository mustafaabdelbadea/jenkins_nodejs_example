pipeline {
    agent any
    
    stages {
        stage('Cloning our Git') {
            steps {
                 git branch: 'k8s_task', url: 'https://github.com/mustafaabdelbadea/jenkins_nodejs_example'
            }
        }   

        stage('Build image') {
            steps {
                sh 'docker build  --no-cache -t 35.226.215.215:8081/nodejs:$BUILD_NUMBER  .  '
            }
        }
         
        stage('Push image') {
            steps {
                  withCredentials([usernamePassword(credentialsId: 'nexus', passwordVariable: 'MYPASS', usernameVariable: 'MYUSER')]) {
                        sh 'docker login --username $MYUSER --password $MYPASS'
                        sh 'docker push 35.226.215.215:8081/nodejs:$BUILD_NUMBER'
                    }
            }
        }
      
    }
}
