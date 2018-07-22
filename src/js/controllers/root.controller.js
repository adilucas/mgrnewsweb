export default ['$scope', $scope => {
    $scope.BEST_SECT = {
        displayTitle: 'World',
        codename: 'general',
    };
    $scope.SECTIONS = [{
            displayTitle: 'Sport',
            codename: 'sports',
        }, {
            displayTitle: 'Business',
            codename: 'business',
        }, {
            displayTitle: 'Entertainment',
            codename: 'entertainment',
        }, {
            displayTitle: 'Technology & IT',
            codename: 'technology'
        }
        // 'health',
        // 'science',
    ];
}];
