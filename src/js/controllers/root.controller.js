export default ['$scope', $scope => {
    $scope.BEST_SECT = {
        displayTitle: 'World',
        codename: 'general',
        icon: 'star',
    };
    $scope.SMALL_SECT = {
        displayTitle: 'Entertainment',
        codename: 'entertainment',
    };
    $scope.SECTIONS = [{
            displayTitle: 'Sports',
            codename: 'sports',
            icon: 'basketball',
        }, {
            displayTitle: 'Business',
            codename: 'business',
            icon: 'currency-usd'
        }, {
            displayTitle: 'Science',
            codename: 'science',
            icon: 'chemical-weapon',
        }, {
            displayTitle: 'Technology & IT',
            codename: 'technology',
            icon: 'laptop',
        }, {
            displayTitle: 'Health',
            codename: 'health',
            icon: 'pharmacy',
        },
    ];
}];
