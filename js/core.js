'use strict';
(function() {
    if (location.href.includes('localhost')) {
        document.head.querySelector('base').href = '';
    }
})();