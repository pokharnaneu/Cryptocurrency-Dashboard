pipeline  {
  agent any
    
  tools {nodejs "Node-Build"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/pokharnaneu/Cryptocurrency-Dashboard.git'
      }
    }
     
    stage('Install dependencies') {
      steps {
        sh 'npm install'         
      }
    }   
            
    
  }
}