import angular from 'angular';

/** Services */
import ApiService from './services/api.service';
/** Controllers */
import rootCtrl from './controllers/root.controller';
import generalCtrl from './controllers/general.controller';
import sportsCtrl from './controllers/sports.controller';
import businessCtrl from './controllers/business.controller';
import entertainmentCtrl from './controllers/entertainment.controller';
import technologyCtrl from './controllers/technology.controller';
/** Directives */
import dynamicControllerDir from './directives/dynamic-controller.directive';
import sliderDir from './directives/slider.directive';

/** App */
const app = angular.module('mgrnews', []);

app.factory('apiService', ApiService.bootstrapService);

app.controller('rootCtrl', rootCtrl);
app.controller('generalCtrl', generalCtrl);
app.controller('sportsCtrl', sportsCtrl);
app.controller('businessCtrl', businessCtrl);
app.controller('entertainmentCtrl', entertainmentCtrl);
app.controller('technologyCtrl', technologyCtrl);

app.directive('dynamicCtrl', dynamicControllerDir);
app.directive('slider', sliderDir);
