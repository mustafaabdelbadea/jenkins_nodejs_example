pipeline {
    agent {
        label 'slave'
    }
    
    parameters {
        string(name: 'RDS_HOSTNAME', defaultValue: '', description: 'RDS Connection String')
        string(name: 'RDS_USERNAME', defaultValue: '', description: 'RDS User Name')
        password(name: 'RDS_PASSWORD', defaultValue: '', description: 'RDS Password')
        string(name: 'RDS_PORT', defaultValue: '', description: 'RDS Port')
        string(name: 'REDIS_HOSTNAME', defaultValue: '', description: 'Redis Connection String')
        string(name: 'REDIS_PORT', defaultValue: '', description: 'Redis Port')
    }
    
    stages {
        stage('Cloning our Git') {
            steps {
                 git branch: 'rds_redis', credentialsId: 'Github-auth-devops', url: 'https://github.com/mustafaabdelbadea/jenkins_nodejs_example'
            }
        }   

        stage('Build image') {
            steps {
                sh 'printenv'
                sh 'docker build  --no-cache --build-arg RDS_USERNAME=$RDS_USERNAME --build-arg RDS_HOSTNAME=Mustaa -t mustafaabdelbadea/nodejs_rds_redis:$BUILD_NUMBER  .  '
                sh 'docker images'
            }
        }
    
        stage('push') {
            steps {
                        withCredentials([usernamePassword(credentialsId: 'Docker-auth', passwordVariable: 'MYPASS', usernameVariable: 'MYUSER')]) {
                        sh 'docker login --username $MYUSER --password $MYPASS'
                        sh 'docker push mustafaabdelbadea/nodejs_rds_redis:$BUILD_NUMBER'
                    }
            }
        }
    }
}