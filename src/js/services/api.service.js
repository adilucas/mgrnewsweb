const HTTP = new WeakMap();

class ApiService {

    constructor($http) {
        HTTP.set(this, $http);
    }

    getList(category) {
        return HTTP.get(this).get(`https://mgrnewsapi.herokuapp.com/headlines/${category}`).then(result => result.data);
    }

    static bootstrapService($http) {
        return new ApiService($http);
    }

}

ApiService.bootstrapService.$inject = ['$http'];

export default ApiService;
