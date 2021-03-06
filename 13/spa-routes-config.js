
app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.caseInsensetiveMatch = true;

    $routeProvider
        .when('/',{
            templateUrl: 'views/spa/home.html',
            // controller: 'homeController',
            caseInsensetiveMatch: true
        })
        .when('/feature',{
            templateUrl: 'views/spa/feature.html'
        })
        .when('/services',{
            templateUrl: 'views/spa/service.html'
        })
        .when('/team',{
            templateUrl: 'views/spa/team.html'
        })
        .when('/pricing',{
            templateUrl: 'views/spa/pricing.html'
        })
        .when('/portfolios',{
            templateUrl: 'views/spa/portfolio.html'
        })
        .when('/testimonial', {
            templateUrl: 'views/spa/testimonial.html'
        })
        .when('/blog', {
            templateUrl: 'views/spa/blog.html'
        })
        .when('/blog/:postId', {
            templateUrl: 'views/spa/post.html'
        })
        .when('/contact', {
            templateUrl: 'views/spa/contact.html'
        })
        .otherwise({
            template: "<h1>404 ---- Page not found</h1>"
            // redirectTo:"/"
        })
});