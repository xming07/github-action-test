// Uses Declarative syntax to run commands inside a container.
def k8s_yaml = "k8s.yml"
pipeline {
    agent {
        kubernetes {
            yamlFile k8s_yaml
        }
    }
    stages {
        stage('Main') {
            container('jnlp'){

                steps {
                    sh 'hostname'
                }
            }
        }
    }
}