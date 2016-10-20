(function(){
  'use strict';
  angular.module('MenuApp')
  .component('items', 
  {
    templateUrl: 'src/components/templates/items.template.html',
    bindings: {
      items: '<',
      category: '<'
    }
  });

})();
