/**
 * Stellatio
 * @module friends.config
 */
angular.module('feed.config', [
    'service.feed'
])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $stateProvider
            .state('feed', {
                url: '/feed',
                templateUrl: 'app/section/feed/view/feed.tpl.html',
                controller: 'FeedCtrl'
            })
    });
