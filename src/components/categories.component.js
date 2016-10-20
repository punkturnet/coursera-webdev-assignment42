(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categories',
  {
    templateUrl: 'src/components/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });

})();
