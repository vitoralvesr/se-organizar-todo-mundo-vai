'use strict';

angular.module('leadBlogApp.filters', [])
.filter('pagination', function()
{
	return function(input, start){
		start = +start;
		return input.slice(start);
	};
});