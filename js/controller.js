var bpapp = angular.module('bptrackerApp', []);

bpapp.controller('bptrackerCtrl', function ($scope, $http) {
	$scope.loading = true
	$scope.message = 'Loading Blueprints'
	$http.get('js/items.txt')
		.then(function(json_item_object_list) {
			sort_by_workbench_level(json_item_object_list.data)
			$scope.loading = false
		}, function (error) {
			$scope.error = true
			$scope.message = 'There was an error loading blueprints.'
			$scope.loading = false
		});

	function sort_by_workbench_level(json_item_object_list) {
		workbench_level_1 = [];
		workbench_level_2 = [];
		workbench_level_3 = [];

		for (var i = 0; i < json_item_object_list.length; i++) {
			if (json_item_object_list[i].workbenchLevelRequired == 1) {
				workbench_level_1.push(json_item_object_list[i]);
			} else if (json_item_object_list[i].workbenchLevelRequired == 2) {
				workbench_level_2.push(json_item_object_list[i]);
			} else if (json_item_object_list[i].workbenchLevelRequired == 3) {
				workbench_level_3.push(json_item_object_list[i]);
			}
		}

		$scope.workbench_level_1 = workbench_level_1;
		$scope.workbench_level_2 = workbench_level_2;
		$scope.workbench_level_3 = workbench_level_3;
	}
});