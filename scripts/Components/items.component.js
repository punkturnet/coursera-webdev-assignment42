(function(){
  'use strict';
  angular.module('MenuApp')
  .component('items', 
  {
    templateUrl: 'scripts/components/templates/items.template.html',
    bindings: {
      items: '<',
      category: '<'
    }
  });

})();
