/**
 * Stellatio
 * @module friends
 */
angular.module('feed', [
    'feed.config'
])

    .controller("FeedCtrl", [
        '$scope',
        'feedService',
        function ($scope, feedService) {
            $scope.loadButonText = "Load";

            $scope.loadFeed = function (e) {
                feedService.parse($scope.feedSrc).then(function (res) {
                    $scope.loadButonText = angular.element(e.target).text();
                    $scope.feeds = res.data.responseData.feed.entries;
                });
            }
        }
    ]);