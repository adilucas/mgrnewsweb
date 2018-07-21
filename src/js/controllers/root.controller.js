export default ['$scope', $scope => {
    $scope.BEST_SECT = {
        displayTitle: 'Świat',
        codename: 'general',
    };
    $scope.SECTIONS = [{
            displayTitle: 'Sport',
            codename: 'sports',
        }, {
            displayTitle: 'Biznes',
            codename: 'business',
        }, {
            displayTitle: 'Rozrywka',
            codename: 'entertainment',
        }, {
            displayTitle: 'Technologia',
            codename: 'technology'
        }
        // 'health',
        // 'science',
    ];
}];
