export default () => {
    return {
        restrict: 'EA',
        scope: {
            slides: '='
        },
        controller: ['$scope', '$window', '$interval', ($scope, $window, $interval) => {
            $scope.slideIndex = 0;
            $scope.maxSlides = 5;
            $scope.currentSlide = i => {
                return i === $scope.slideIndex;
            };
            $scope.nextSlide = () => {
                $scope.slideIndex = ($scope.slideIndex + 1 > $scope.maxSlides-1) ? 0 : $scope.slideIndex+1;
            }
            $scope.prevSlide = () => {
                $scope.slideIndex = ($scope.slideIndex - 1 < 0) ? $scope.maxSlides-1 : $scope.slideIndex-1;
            }

            $scope.sendGaClick = function (index, category) {
                $window.ga('send', 'event', category, 'click', 'general', index);
            }

            $interval(() => {
                $scope.nextSlide();
            }, 3000);
        }],
        templateUrl: 'templates/slider.html',
        link: (scope, el, attrs) => {
            attrs.$observe('slides', val => {
                scope.slides = val;
            })
        }
    };
}
