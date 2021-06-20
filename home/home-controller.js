angular.module('app').controller("HomeController", HomeController);
HomeController.$inject=['$location','CursoService'];

    function HomeController($location, CursoService){
        vm = this;
        vm.teste= 'Home'
        vm.pacientes= ''
        vm.erro = false

        vm.init = function(){
            vm.listarPacientes()
        }
        vm.navegar = function(rota, id){
            $location.path(rota + '/' +id) 
        }

        vm.listarPacientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if(resposta){
                    vm.pacientes=resposta
                }else{
                    vm.erro = true
                }
            })

        }
        vm.editar = function(id){
            vm.navegar('Cadastro', id)
                }       
        

        vm.excluir = function(id){
            CursoService.exec_DEL(id).then(function(resposta){
                if(resposta){
                    //mensagem de resposta

                }       
            })

        }
    }
    
 