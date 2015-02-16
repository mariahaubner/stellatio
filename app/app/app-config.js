/**
 * Stellatio
 * @module application.config
 */
angular.module('application.config', [
    'ui.router',
    'feed'
])

    .constant('NAV_ITEMS', [
        {title: 'Home', state: 'home', sref: 'home', icon: 'glyphicon-home'},
        {title: 'News Feed', state: 'feed', sref: 'feed', icon: 'glyphicon-list'},
        {title: 'About', state: 'about', sref: 'about', icon: 'glyphicon-info-sign'},
        {title: 'Contact', state: 'contact', sref: 'contact', icon: 'glyphicon-earphone'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/view/home.tpl.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/view/about.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/view/contact.tpl.html'
            });
    });