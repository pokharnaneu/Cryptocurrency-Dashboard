pipeline  {
  agent any
    
  tools {nodejs "Node-Build"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/pokharnaneu/Cryptocurrency-Dashboard.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'         
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}