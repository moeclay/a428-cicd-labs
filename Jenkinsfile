pipeline {
    agent {
        docker {
            image 'node:16-buster-slim' 
            args '-p 3001:3001' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm --version'
                sh 'echo "berhasil, yeayy"'
            }
        }
    }
}