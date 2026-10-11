pipeline{
    agent any
    stages{
        stage('Chechout')
        {
            steps{
                checkout scm
            }
        }

        stage('Build')
        {
            steps{
                bat 'docker build -t pipeline-image .'
            }
        }

        stage('Deploy')
        {
            steps{
                bat 'docker rm --force pipeline-image'
                bat 'docker run -d -p 3006:3000 --name=test pipeline-image'
            }
        }

    }
}