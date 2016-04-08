'use strict';

/**
 * @ngdoc service
 * @name iamatApp.iamat
 * @description
 * # iamat
 * Service in the iamatApp.
 */
angular.module('iamatApp')
  .service('iamatService', function ($http) {

  	var atcode = 'dilema2015',
    	apiHost = 'https://api.iamat.com';

    return {
    	getTeams: function(){
    		return $http.get(apiHost + '/atcodes/' + atcode + '/teams/');
    	}
    };

  });
