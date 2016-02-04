module.exports = function($scope, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.menu = [
        {
            link : '/klientforside',
            title: 'Forside',
            icon: 'dashboard'
        },
        {
            link : '',
            title: 'Bookinger',
            icon: 'group'
        },
        {
            link : '',
            title: 'Klienter',
            icon: 'message'
        }
    ];

    $scope.admin = [
        {
            link : '',
            title: 'Regnskabforside',
            icon: 'delete'
        },
        {
            link : '',
            title: 'Bogføring',
            icon: 'settings'
        },
        {
            link : '',
            title: 'Momsregnskab',
            icon: 'settings'
        },
        {
            link : '',
            title: 'Kontoplan',
            icon: 'settings'
        },
        {
            link : '',
            title: 'Årsregnskabføring',
            icon: 'settings'
        }
    ];

    $scope.bookings = {
        "booking": [
            {
                "@attributes": {
                    "id": "18695067"
                },
                "resource_name": "Lille Rum",
                "start": "2015-09-23 12:00:00",
                "finish": "2015-09-23 13:00:00",
                "created_by": "hans.f@gmail.com",
                "updated_by": {},
                "full_name": "Hans Fischer Sundstrup",
                "phone": "25598955",
                "deleted": "false",
                "created_on": "2015-09-18 20:33:00",
                "updated_on": "2015-09-18 20:33:00",
                "schedule": "Reservering"
            },
            {
                "@attributes": {
                    "id": "18695071"
                },
                "resource_name": "Lille Rum",
                "start": "2015-09-24 14:30:00",
                "finish": "2015-09-24 15:30:00",
                "created_by": "hans.f@gmail.com",
                "updated_by": {},
                "full_name": "Hans Fischer Sundstrup",
                "phone": "25598955",
                "deleted": "false",
                "created_on": "2015-09-18 20:33:06",
                "updated_on": "2015-09-18 20:33:06",
                "schedule": "Reservering"
            }
        ]
    };
};


