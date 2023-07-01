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
                sh 'docker build  --no-cache -t mustafaabdelbadea/nodejs_rds_redis:$BUILD_NUMBER  .  '
                sh 'docker images'
            }
        }
      
    }
}
