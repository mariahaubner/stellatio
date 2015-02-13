/**
 * Stellatio
 * @module service.friends
 */
angular.module('service.feed', [])
    .factory('feedService', [
        '$http',
        function ($http) {

            var parseFeed = function (url) {
                return $http.jsonp(
                    '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q='
                    + encodeURIComponent(url)
                );
            };

            return {
                parse: parseFeed
            };
        }
    ]);