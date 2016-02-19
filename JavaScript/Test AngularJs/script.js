/**
	*  Module
	*
	* Description
	*/
(function () {
	
angular
	.module("contactList", [])
	.controller("MainController", function($scope){
		$scope.contacts = [{
			"name": "Riste Tegovski",
			"email": "riste@example.ex",
			"mobile": "071555999"
		}];
		$scope.addRow = function() {
			$scope.contacts.push({
				"name": $scope.name,
				"email": $scope.email,
				"mobile": $scope.mobile
			});
			$scope.name = "";
			$scope.email = "";
			$scope.mobile = "";
		};

		$scope.read = function(contact){
			$scope.display = contact;
		};
		$scope.close = function(display){
			$scope.display = "";
		};

		$scope.update = function(contact) {
			contact.edit = true;
			contact.show = false;
			

		};

		$scope.deleteRow = function(contactIndex){
             $scope.contacts.splice(contactIndex, 1);

        };
		
	});
})();