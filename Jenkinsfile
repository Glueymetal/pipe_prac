pipeline{
    agent any
    stages{
        stage('Checkout')
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
                bat 'docker rm --force test'
                bat 'docker run -d -p 3006:3000 --name=test pipeline-image'
            }
        }

    }
}