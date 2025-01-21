@Library('ene-global') _

def productCode = GetProductCode()

def containers = [
  [containerName: 'node', imageUrl: 'art.pmideep.com/dockerhub/node:latest', commands: ['cat']],
  [containerName: 'java', imageUrl: 'art.pmideep.com/dockerhub/openjdk:24-slim', commands: ['cat']],
 ]

pipeline {
    agent {
        kubernetes {
            yaml PodTemplateGeneration (containers: containers, envName: "dev", accName: "$productCode-dev-aws", productCode: productCode, isKaniko: true)
        }
    }
    
    environment {
        DOCKER_IMAGE = "art.pmideep.com/$productCode-docker-dev/influencers-ui:latest"
        SONAR_HOME   = tool name: 'SonarQube'
    }
    
    stages {
        stage('Npm install') {
            steps {
                container('node') {
                    echo 'Unit tests'
                    sh  """
                        cd influencers-ui
                        npm install
                        """
                }
            }
        }
        stage('Build') {
            steps {
                container('kaniko') {
                echo 'Building..'
                    KanikoBuild(dockerfilePath: "Dockerfile", destination: ["$DOCKER_IMAGE"], cleanup: true, pushImage: true)
                }
            }
        }
    }
}