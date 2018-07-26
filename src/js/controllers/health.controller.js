export default ['$scope', '$window', 'apiService', ($scope, $window, apiService) => {
    $scope.articles = [];
    $scope.mainArticles = [];
    $scope.snapshots = [];
    $scope.links = [];

    apiService.getList('health').then(data => {
        $scope.articles = data.articles;
        $scope.mainArticles = data.articles.slice(0, 3);
        $scope.snapshots = data.articles.slice(3, 9);
        $scope.links = data.articles.slice(9, 10);
    });

    $scope.sendGaClick = function (index, category) {
        $window.ga('send', 'event', category, 'click', 'health', index);
    }
}];
