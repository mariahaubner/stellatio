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
                abstract: true,
                url: '/feed',
                template: '<x-ui-view></x-ui-view>'
            })

            .state('feed.show', {
                url: '',
                templateUrl: 'app/section/feed/view/feed.tpl.html',
                controller: 'FeedCtrl'
            })
    });
