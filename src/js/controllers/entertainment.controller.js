export default ['$scope', 'apiService', ($scope, apiService) => {
    $scope.articles = [];
    $scope.mainArticles = [];
    $scope.snapshots = [];
    $scope.links = [];

    apiService.getList('entertainment').then(data => {
        $scope.articles = data.articles;
        $scope.mainArticles = data.articles.slice(0, 3);
        $scope.snapshots = data.articles.slice(3, 6);
        $scope.links = data.articles.slice(6, 10);
    });
}];
