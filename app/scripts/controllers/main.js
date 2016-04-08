'use strict';

/**
 * @ngdoc function
 * @name iamatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iamatApp
 */
angular.module('iamatApp')
  .controller('MainCtrl', function (iamatService ,resultsFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log(resultsFactory);

    iamatService.getTeams().success(function(data){
    	console.log(data);
    }).error(function(){
    	console.log('ERROR CARGANDO TEAMS');
    });

  });
