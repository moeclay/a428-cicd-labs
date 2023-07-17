pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3001:3001'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
                sh 'echo "berhasil, yeayy"'
                sh 'npm install'
            }
        }
    }
}
