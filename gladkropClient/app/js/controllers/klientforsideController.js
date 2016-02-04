module.exports = function ($scope, $http) {

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */

    /*  $http.get('http://www.gladkrop.dk/rest/sassbooking').
     success(function(data) {
     $scope.bookings = data;
     });
     */

    var bookinglist = [
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
        },
        {
            "@attributes": {
                "id": "18695072"
            },
            "resource_name": "Lille Rum",
            "start": "2015-09-19 14:30:00",
            "finish": "2015-09-19 15:30:00",
            "created_by": "hans.f@gmail.com",
            "updated_by": {},
            "full_name": "Hans Fischer Sundstrup",
            "phone": "25598955",
            "deleted": "false",
            "created_on": "2015-09-18 20:33:06",
            "updated_on": "2015-09-18 20:33:06",
            "schedule": "Reservering"
        }
    ];

    $scope.bookings= function () {
      for (var i = 0; i < bookinglist.length; i++) {
          var start = new Date(toDate(bookinglist[i].start));
          var slut = new Date(toDate(bookinglist[i].finish));
          bookinglist[i].start = start;
          bookinglist[i].finish = slut;
      }

        return bookinglist;
    };

    function toDate(datoString) {
        if (!datoString) {
            var stringSplit = datoString.split(' ');
            var datoSplit = stringSplit[0].split('-');
            var timesplit = stringSplit[1].split(':');
            var dato = new Date(datoSplit[0], datoSplit[1], datoSplit[2], timesplit[0], timesplit[1], timesplit[2]);
            return dato;
        } else {
            return datoString;
        }

    }

    $scope.klienter = [
        {
            "klient_id": "1",
            "navn": "Hans Fischer Sundstrup",
            "tlf": [
                {
                    "id": "1",
                    "tlf": "34343434",
                    "tlf_primaer": "J",
                    "tlf_beskrivelse": "Mobil",
                    "klient_id": "1"
                },
                {
                    "id": "2",
                    "tlf": "56565656",
                    "tlf_primaer": "N",
                    "tlf_beskrivelse": "Arbejde",
                    "klient_id": "1"
                }
            ],
            "email": [
                {
                    "id": "2",
                    "klient_id": "1",
                    "email_navn": "kddere12sksjksdk",
                    "email_primaer": "N",
                    "email_beskrivelse": "Privat"
                },
                {
                    "id": "1",
                    "klient_id": "1",
                    "email_navn": "mddjdd\u00e6jddk@ddsd.dk",
                    "email_primaer": "J",
                    "email_beskrivelse": "Arbejde"
                }
            ]
        },
        {
            "klient_id": "2",
            "navn": "Jane Sundstrup",
            "tlf": [],
            "email": []
        }
    ];

};