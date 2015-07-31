/**
 * Stellatio
 * @module friends
 */
angular.module('login', [
        'login.config'
    ])

    .controller("LoginCtrl", [
        '$scope',
        function($scope) {
            'use strict';

            $scope.heading = 'Login';
        }
    ]);