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

    function generateTags(obj){

	    Object.keys(obj).forEach(function (key) {
	        var temp = $scope.results[key];

	        temp.key = key;

	        temp.team = false;

	        var name = key;

	        if (key.indexOf('team-') > -1) {
	            temp.team = true;
	            var temp2 = key.replace('room:team-','');
	            for (var i = teamsData.length - 1; i >= 0; i--) {
	                if (teamsData[i]._id == temp2) {
	                    name = teamsData[i].name;
	                    break;
	                }
	            };
	        }

	        //temp.name = name.replace('room:','');

	        //temp.total = temp.answers.sum();
	        //temp.max = temp.answers.maximum();
	        //temp.min = temp.answers.minimum();

	        $scope.tags.push(temp);
	    });

	    mapUserTags($scope.results.userTags);
    }

    function parseData(questions, votes){
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
    
    $scope.tags = [];
    $scope.results = resultsFactory;


	$scope.chartObject = {};
    $scope.chartObject.type = "PieChart";

    var mapUserTags = function(obj) {
	    $scope.results.userTags = $.map(obj, function(value, index) {
		    return [value];
		});
	};

    $scope.triggerChart = function(){
    	googleChartApiPromise.then(parseData($scope.results.answers, $scope.results.userTags[$scope.type]['answers']));
    }

    iamatService.getTeams().success(function(data){
    	$scope.results.teams = data;
    	generateTags($scope.results.teams);
    }).error(function(){
    	console.log('ERROR CARGANDO TEAMS');
    });  

  });
