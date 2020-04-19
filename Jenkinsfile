pipeline  {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/pokharnaneu/Cryptocurrency-Dashboard.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'mocha'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}