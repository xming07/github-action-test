// Uses Declarative syntax to run commands inside a container.
def k8s_yaml = "k8s.yml"
pipeline {
    agent {
        kubernetes {
            yamlFile k8s_yaml
        }
    }
    environment {
        KUBERNETES_NAMESPACE = 'default'
    }
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }
    stages {
        stage('Main') {
            steps {
                container('jnlp') {
                    sh 'hostname'
                }
            }
        }
    }
}