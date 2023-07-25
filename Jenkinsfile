pipeline {
  agent any
  
  tools {nodejs "node"}

  stages {
    stage('Build') {
      steps {
        git branch: 'react-app', url: 'https://github.com/moeclay/a428-cicd-labs.git'
        sh 'npm install'
      }
    }
    stage('Test') { 
      steps {
        sh './jenkins/scripts/test.sh' 
      }
    }
    stage('Manual Approval') {
      steps {
        input message: 'Lanjutkan ke tahap Deploy?'
        echo "Deploy dipersilahkan."
      }
    }
    stage('Deploy') { 
      steps {
        sh './jenkins/scripts/deliver.sh' 
        script {
            echo "Jeda 1 menit"
            sleep(time: 60, unit: 'SECONDS')
        }
        sh './jenkins/scripts/kill.sh' 
      }
    }
  }
}
