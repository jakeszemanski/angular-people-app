(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope)  {
    $scope.people = [
    {name: "test", bio: "test bio", bioVisible: true},
    {name: "test2", bio: "test bio 2", bioVisible: false}
    ];

    $scope.displayBio = function(boolean) {
      if (boolean.bioVisible === true) {
        boolean.bioVisible = false;
      } else {
        boolean.bioVisible = true;
      }
    };

    $scope.isVisible = function(bioBolean) {
      if (bioBolean.bioVisible === true) {
        return (bioBolean.bio);
      }
    };
    $scope.addBio = function(inputName, inputBio) {
      var newPerson = {name: inputName, bio: inputBio, bioVisible: true};
      
      }
    }

  });
}());

