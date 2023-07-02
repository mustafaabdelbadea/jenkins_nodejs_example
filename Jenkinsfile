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
                sh 'docker build  --no-cache -t 10.97.253.249:8082/nodejs:$BUILD_NUMBER  .  '
            }
        }
         
        stage('Push image') {
            steps {
                  withCredentials([usernamePassword(credentialsId: 'nexus', passwordVariable: 'MYPASS', usernameVariable: 'MYUSER')]) {
                        sh "echo ${MYPASS} | docker login -u ${MYUSER} --password-stdin 10.97.253.249:8082"
                        sh 'docker push 10.97.253.249:8082/nodejs:$BUILD_NUMBER'
                    }
            }
        }
      
    }
}
