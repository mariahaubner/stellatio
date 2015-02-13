/**
 * Stellatio
 * @module friends.config
 */
angular.module('feed.config', [])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $stateProvider
            .state('feed', {
                url: '/feed',
                templateUrl: 'app/section/feed/view/feed.tpl.html'
            })
    });
