/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

 (function() {
  'use strict';

  angular
    .module('horizon.dashboard.project.queues')
    .factory('horizon.dashboard.project.queues.batch-actions.service', batchActions);

  batchActions.$inject = [
    'horizon.dashboard.project.queues.actions.createService',
    'horizon.framework.util.i18n.gettext'
  ];

  /**
   * @ngdoc factory
   * @name horizon.dashboard.project.queues.batch-actions.service
   * @description A list of table batch actions.
   */
  function batchActions(createService, gettext) {

    var service = {
      initScope: initScope,
      actions: actions
    };

    return service;

    ///////////////

    function initScope(scope) {
      angular.forEach([createService], setActionScope);
      function setActionScope(action) {
        action.initScope(scope.$new());
      }
    }

    function actions() {
      return [{
        service: createService,
        template: {
          type: 'create',
          text: gettext('Create Queue')
        }
      }];
    }
  }

})();