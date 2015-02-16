/**
 * Stellatio
 * @module friends
 */
angular.module('feed', [
    'feed.config'
])

    .controller("FeedCtrl", [
        'feedService',
        '$state',
        function (feedService, $state) {
            var vm = this;

            vm.loadFeed = function (event, feedSrc) {
                feedService.parse(feedSrc).then(function (res) {
                    vm.feeds = res.data.responseData.feed.entries;
                });
            };
        }

    ])

    .controller("FeedNavCtrl", [
        function () {
            var vm = this;

            var getFeedItems = function() {
                var feeds = [
                    {
                        "id": 1,
                        "name": "Wikipedia",
                        "url": "http://de.wikipedia.org/w/api.php?action=featuredfeed&feed=featured&feedformat=atom"
                    },
                    {
                        "id": 2,
                        "name": "FAZ",
                        "url": "http://www.faz.net/rss/aktuell/"
                    },
                    {
                        "id": 3,
                        "name": "Fefe",
                        "url": "http://blog.fefe.de/rss.xml?html"
                    },
                    {
                        "id": 4,
                        "name": "Focus",
                        "url": "http://rss.focus.de/fol/XML/rss_folnews.xml"
                    },
                    {
                        "id": 5,
                        "name": "Heise",
                        "url": "http://heise.de.feedsportal.com/c/35207/f/653902/index.rss"
                    },
                    {
                        "id": 7,
                        "name": "Postillion",
                        "url": "http://feeds.feedburner.com/blogspot/rkEL"
                    },
                    {
                        "id": 8,
                        "name": "Spiegel",
                        "url": "http://www.spiegel.de/schlagzeilen/index.rss"
                    },
                    {
                        "id": 9,
                        "name": "Stern",
                        "url": "http://www.stern.de/feed/standard/all/"
                    },
                    {
                        "id": 6,
                        "name": "Süddeutsche",
                        "url": "http://suche.sueddeutsche.de/?output=rss"
                    }
                ];

                return feeds;
            };

            vm.navItems = getFeedItems();
        }
    ]);