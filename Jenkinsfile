pipeline{
    agent any

    environment{
        TAG =  "${env.BUILD_NUMBER}"
    }

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
                bat 'docker build -t pipeline-image:%TAG% .'
            }
        }

        stage('Test')
        {
            steps{
                bat 'docker run --rm pipeline-image:%TAG% npm test'
            }
        }

        stage('Deploy')
        {
            steps{
                bat 'docker rm --force test'
                bat 'docker run -d -p 3006:3000 --name=test pipeline-image:%TAG%'
            }
        }

        stage('Health Check')
        {
            steps{
            retry(10){
                sleep 2
                bat 'curl.exe -f -s http://localhost:3006/status'
            }
            }
        }
    }

    post{
        success{
            echo "Deployed version ${env.TAG}"
        }

        failure{
            echo "Build ${env.BUILD_NUMBER} failed"
        }
    }
}