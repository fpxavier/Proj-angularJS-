angular.module('app').controller('CadastroController',CadastroController);
CadastroController.$inject=['$location', 'CursoService', '$routeParams'];

        function CadastroController($location, CursoService, $routeParams){
        vm = this;
        vm.teste='Cadastro'
        vm.paciente= {}
        vm.idPac = undefined
        vm.textoBotao = 'cadastrar'

        if($routeParams.idPac){
            vm.idPac = $routeParams.idPac
            buscarId(vm.idPac)
            vm.textoBotao = 'Editar'
        }
        vm.navegar=function(rota){
            $location.path(rota) 
        }   

        vm.cadastrar=function(){
            if(vm.textoBotao == 'cadastrar'){
                CursoService.exec_POST(vm.paciente).then(function(resposta){
                    if(resposta){
                        vm.pacientes = resposta
                    }
                })
            }else if(vm.textoBotao == 'Editar'){
                CursoService.exec_PUT(vm.paciente).then(function(resposta){
                    if(resposta){
                        vm.pacientes = resposta
                    }    
                })
            } 

            vm.navegar('/')
        }
        function buscarId(id){
            CursoService.exec_GET_ID(id).then(function(resposta){
                if(resposta){
                    vm.paciente = resposta
                }
            })
        
         vm.limpar=function(){
            vm.paciente ={}
        
        }
    }   
}
