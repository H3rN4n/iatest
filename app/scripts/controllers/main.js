'use strict';

/**
 * @ngdoc function
 * @name iamatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iamatApp
 */
angular.module('iamatApp')
  .controller('MainCtrl', function ($scope, iamatService ,resultsFactory,googleChartApiPromise) {
    
    $scope.results = resultsFactory;

    function getFirst(obj){
    	for (first in obj) break;
    	return first
    }

    

    function buildDataTable(){
        $scope.chartObject.data = new google.visualization.DataTable();
        // Continue building the data table.
    }

    function parseData(questions, votes){
    	console.log('votes')
    	console.log(votes);
		$scope.chartObject.data = {"cols": [
		    {id: "t", label: "Topping", type: "string"},
		    {id: "s", label: "Slices", type: "number"}
		], "rows": [
		    {c: [
		        {v: questions[0]['text']},
		        {v: votes[0]},
		    ]},
		    {c: [
		        {v: questions[1]['text']},
		        {v: votes[1]}
		    ]},
		    {c: [
		        {v: questions[2]['text']},
		        {v: votes[2]},
		    ]}
		]};	
    }

    iamatService.getTeams().success(function(data){
    	$scope.results.teams = data;
    	console.log(data);
    }).error(function(){
    	console.log('ERROR CARGANDO TEAMS');
    });

   
	$scope.chartObject = {};
    $scope.chartObject.type = "PieChart";

    $scope.triggerChart = function(){
    	console.log('trigger');
    	googleChartApiPromise.then(parseData($scope.results.answers, $scope.results.userTags[$scope.type]['answers']));
    }

    

  });
