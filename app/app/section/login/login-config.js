/**
 * Stellatio
 * @module friends.config
 */
angular.module('login.config', [])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/section/login/view/login.tpl.html',
                controller: 'LoginCtrl'
            })
    });
