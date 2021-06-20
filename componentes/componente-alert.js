const { V4MAPPED } = require("node:dns")

angular.module('app').component('alertParaUsuario',{
    templateUrl: 'componentes/alert.html',
    bindings:{
        msg: '-',
        tipo: '='

    },
    controllerAs: 'vm',
    controller: function(){
        vm =this
        vm.tipoClasse = undefined

        vm.$onInit = function(){
            console.log(vm.tipo)    
        }
        if(vm.tipo==  'SUCESSO'){
            vm.tipoClasse = 'alert alert-success'    
        }else if(vm.tipoClasse == 'erro' )    
            vm.tipoClasse = 'alert alert-secondary'

        }

    

})