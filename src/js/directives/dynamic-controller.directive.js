export default ['$compile', '$parse', ($compile, $parse) => {
    return {
        restrict: 'A',
        terminal: true,
        priority: 100000,
        link: (scope, el) => {
            let name = $parse(el.attr('dynamic-ctrl'))(scope);
            el.removeAttr('dynamic-ctrl');
            el.attr('ng-controller', name);
            $compile(el)(scope);
        }
    };
}];
