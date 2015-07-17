(function (angular) {

    angular.module('app').directive('slideUpdown', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {

                var classprefix   = 'slideupdown';
                var $wrapper      = element.wrap("<div class='" + classprefix + "-wrapper'></div>").parent();
                var isOpen        = false;

                var slideDown = function () {
                    isOpen = true;
                    $wrapper.addClass(classprefix + "-sliding");
                    $timeout(function () {
                        $wrapper.css("height", element[0].offsetHeight + "px");
                    }, 0);
                }

                var slideUp = function () {
                    // Makes sure of no jumpiness on initial load
                    if (!isOpen) {
                        return;
                    }
                    isOpen = false;
                    $wrapper.css("height", element[0].offsetHeight + "px");
                    $timeout(function () {
                        $wrapper.addClass(classprefix + "-sliding");
                        $timeout(function () {
                            $wrapper.css("height", "0px");
                        });
                    });
                }

                scope.$watch(attr.slideUpdown, function (value) {
                    if (value) {
                        slideDown();
                    }
                    else {
                        slideUp();
                    }
                });

                $wrapper.on("webkitTransitionEnd transitionend oTransitionEnd", function () {
                    $wrapper.removeClass(classprefix + "-sliding");
                    if (isOpen) {
                        $timeout(function () {
                            $wrapper.css("height", "auto");
                        });
                    }
                });

            }
        };
    }]);

})(window.angular);
