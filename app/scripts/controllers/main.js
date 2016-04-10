'use strict';

/**
 * @ngdoc function
 * @name iamatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iamatApp
 */
angular.module('iamatApp')
  .controller('MainCtrl', function ($scope, iamatService, iamatFactory, resultsFactory, googleChartApiPromise) {

    Array.prototype.maximum = function () {
      return this.reduce(function (max, aValue) {
        return Math.max(max, aValue);
      }, this[ 0 ]);
    };
    Array.prototype.minimum = function () {
      return this.reduce(function (min, aValue) {
        return Math.min(min, aValue);
      }, this[ 0 ]);
    };
    Array.prototype.sum = function () {
      return this.reduce(function (total, aValue) {
        return total + Number(aValue);
      });
    };

    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };

    function parseData(questions, votes) {
      return {
        "type": 'PieChart',
        "data": {
          "cols": [
            { id: "t", label: "Topping", type: "string" },
            { id: "s", label: "Slices", type: "number" }
          ], "rows": [
            {
              c: [
                { v: questions[ 0 ][ 'text' ] },
                { v: votes[ 0 ] },
              ]
            },
            {
              c: [
                { v: questions[ 1 ][ 'text' ] },
                { v: votes[ 1 ] }
              ]
            },
            {
              c: [
                { v: questions[ 2 ][ 'text' ] },
                { v: votes[ 2 ] },
              ]
            }
          ]
        }
      };
    };

    function showPollResults2(data) {
      console.log(data);
      var table = $("<table/>");

      var header = $("<tr/>").append($("<th/>").text(" "));
      var votesRow = $("<tr/>").append($("<td/>").text("Total"));
      var globalRow = $("<tr/>").append($("<td/>").text("Todos"));

      var total = 0;
      var correct = -1;
      var mostVoted = -1;
      var maxVotes = 0;

      var maxArr = [], minArr = [], maxArrVal = [], minArrVal = [];

      data.answers.forEach(function (anAnswer, index) {
        total += anAnswer.count;
        if (maxVotes < anAnswer.count) {
          maxVotes = anAnswer.count;
        }
        maxArr.push([]);
        minArr.push([]);
        maxArrVal.push(0);
        minArrVal.push(100);
      });

      data.answers.forEach(function (anAnswer, index) {
        header.append($("<th/>").text(anAnswer.text));
        votesRow.append($("<td/>").text(anAnswer.count));
        if (total == 0) {
          globalRow.append($("<td/>").text(0));
        } else {
          globalRow.append($("<td/>").text((anAnswer.count / total * 100).toFixed(1) + "%"));
          if (anAnswer.correct) {
            correct = index;
            votesRow.find("td").last().addClass("CorrectCol");
            globalRow.find("td").last().addClass("CorrectCol");
          }
          if (maxVotes == anAnswer.count) {
            mostVoted = index;
            votesRow.find("td").last().addClass("MostVotedCol");
            globalRow.find("td").last().addClass("MostVotedCol");
          }
        }
      });

      header.append($("<th/>").text("Total"));
      votesRow.append($("<td/>").text(total));
      globalRow.append($("<td/>").text(total));

      table.append(header);
      table.append(votesRow);
      table.append(globalRow);
      console.log(data.userTags);
      Object.keys(data.userTags).forEach(function (key) {

        var temp = data.userTags[ key ];

        temp.key = key;

        temp.team = false;

        var name = key;

        if (key.indexOf("team-") > -1) {
          temp.team = true;
          var temp2 = key.replace("room:team-", "");
          for (var i = $scope.teams.length - 1; i >= 0; i--) {
            if ($scope.teams[ i ]._id == temp2) {
              name = $scope.teams[ i ].name;
              break;
            }
          }
          ;
        }

        temp.name = name.replace("room:", "");

        temp.total = temp.answers.sum();
        temp.max = temp.answers.maximum();
        temp.min = temp.answers.minimum();
        temp.chartOptions = parseData($scope.results.answers, temp.answers);

        console.log(temp);
        $scope.tags.push(temp);
      });

      $scope.tags.sort(function (a, b) {
        if (a.team != b.team) {
          if (a.team) {
            return 1;
          } else {
            return -1;
          }
        }
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }).forEach(function (tag, tagindex) {
        var row = $("<tr/>")
          .attr("id", "tag-" + tagindex)
          .append($("<td/>").text(toTitleCase(tag.name.replace("_", " "))));

        tag.answers.forEach(function (anAnswer, index) {

          var percentage = (anAnswer / tag.total * 100).toFixed(1) * 1;

          if (maxArrVal[ index ] == percentage) {
            maxArr[ index ].push(tagindex);
          }

          if (maxArrVal[ index ] < percentage) {
            maxArrVal[ index ] = percentage;
            maxArr[ index ] = [ tagindex ];
          }

          if (minArrVal[ index ] == percentage) {
            minArr[ index ].push(tagindex);
          }

          if (minArrVal[ index ] > percentage) {
            minArrVal[ index ] = percentage;
            minArr[ index ] = [ tagindex ];
          }


          if (tag.total == 0) {
            row.append($("<td/>").text(0));
          } else {
            var temp = $("<td/>").text(percentage + "%");
            if (tag.max == anAnswer) {
              temp.addClass("RowMax");
            } else if (tag.min == anAnswer) {
              temp.addClass("RowMin");
            }
            if (index == correct) {
              temp.addClass("CorrectCol");
            }
            if (index == mostVoted) {
              temp.addClass("MostVotedCol");
            }

            row.append(temp);
          }
        });

        row.append($("<td/>").text(tag.total));

        table.append(row);
      });

      maxArr.forEach(function (rowindexes, cellindex) {
        rowindexes.forEach(function (rowindex) {
          table.find("#tag-" + rowindex + " td").eq(cellindex + 1).addClass("ColMax");
        });
      });

      minArr.forEach(function (rowindexes, cellindex) {
        rowindexes.forEach(function (rowindex) {
          table.find("#tag-" + rowindex + " td").eq(cellindex + 1).addClass("ColMin");
        });
      });


      $("#pollResultsPage .content").remove();

      $("#pollResultsPage")
        .addClass("background1")
        .append(
        $("<div/>")
          .addClass("content")
          .append(
          $("<h1/>")
            .addClass("title")
            .text(data.question),
          table
        )
      );

    };

    function init() {

      $scope.tags = [];
      $scope.teams = [];
      $scope.results = resultsFactory;
      $scope.chartObject = {};
      $scope.chartObject.type = "PieChart";

      /*$scope.triggerChart = function () {
       googleChartApiPromise.then(parseData($scope.results.answers, $scope.results.userTags[ $scope.type ][ 'answers' ]));
       }*/

      $scope.teams = iamatFactory;
      showPollResults2($scope.results);

      /*iamatService.getTeams().success(function (data) {
       $scope.teams = data;
       }).error(function () {
       console.log('ERROR CARGANDO TEAMS');
       //offline mode
       console.log('OFFLINE MODE');
       $scope.teams = iamatFactory;
       showPollResults2($scope.results);
       });*/
    }

    init();
  });
