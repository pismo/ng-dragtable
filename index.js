(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular', 'dragtable'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'), require('dragtable'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.angular);
    }
}(this, function (angular) {

    return angular
        .module('dragtable', [])
        .directive('dragtable', function () {
            return {
                restrict: 'A',
                link: function ($scope, element) {
                    element.dragtable({
                        clickDelay: 100,
                        persistState: function () {
                            var ths = element.find('thead tr th');
                            var columns = ths.map(function(idx, el) {
                                return el.getAttribute('property-name');
                            });

                            $scope.$emit('dragtable:end', columns);
                        }
                    });
                }
            };
        });

}));
