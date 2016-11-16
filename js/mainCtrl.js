angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getData method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

  $scope.getMessages = function() {
    messageService.getMessages().then(function(response) {
      $scope.messages = response.data;
    });
  }

  //The postMessage function will take whatever the user typed in 
  //(hint: look at the html and see what ng-model correlates to on the input box), 
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function() {
    messageService.postMessage($scope.message).then(function(response) {
        $scope.getMessages();
        $scope.message = '';
    });
  }


  //Das Cookie Methods
  $scope.getCookies = function() {
    messageService.getCookies().then(function(response){
      $scope.cookies = response.data.cookies;
    })
  }

  $scope.postCookie = function() {
      messageService.postCookie($scope.cookie).then(function(response) {
        $scope.getCookies();
        $scope.newCookie = '';
    });
  }

  $scope.getMessages();
  $scope.getCookies();

  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getMessages();
    $scope.getCookies();
  }, 1500)

})

/*{"cookies":
  {
    "Tasty Chocolate Chip Cookie":4,
    "Delicious Butter Pecan Cookie":3,
    "Delectable Fortune Cookie":27,
    "Delicious Macaroon Cookie":4,
    "Delectable Chocolate Chip Cookie":3,
    "Flavorful Butter Pecan Cookie":6,
    "Tasty Macaroon Cookie":34
  }
}*/