pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        sh 'echo "Building project (e.g. npm install, mvn package)"'
      }
    }
    stage('Docker Build') {
      steps {
        sh 'docker build -t myapp:latest .'
      }
    }
  }
}
