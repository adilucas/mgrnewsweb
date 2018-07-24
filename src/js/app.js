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
import healthCtrl from './controllers/health.controller';
import scienceCtrl from './controllers/science.controller';
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
app.controller('healthCtrl', healthCtrl);
app.controller('scienceCtrl', scienceCtrl);

app.directive('dynamicCtrl', dynamicControllerDir);
app.directive('slider', sliderDir);
