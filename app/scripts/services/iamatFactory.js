'use strict';

/**
 * @ngdoc service
 * @name iamatApp.results
 * @description
 * # results
 * Service in the iamatApp.
 */
angular.module('iamatApp')
  .factory('iamatFactory', function () {
    var teams = [ {
      "logo": {
        "ext": "png",
        "filename": "54d8ff3fbb1ab4cf14000a5a",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54d8ff5cbb1ab4cf14000a7b",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Ciudad de Buenos Aires",
      "slug": "Acrónimo",
      "priority": 31,
      "rooms": [],
      "_id": "54d8feffbb1ab4cf14000a24",
      "amount": 15218
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e5073ec161867c571d1d16",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e51340c161867c571d5f28",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Buenos Aires",
      "slug": "PBA",
      "priority": 30,
      "rooms": [],
      "_id": "54efdb76695aa1792d031f6f",
      "amount": 5847
    }, {
      "logo": {
        "ext": "png",
        "filename": "54d90028bb1ab4cf14000b8f",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54d9004ebb1ab4cf14000bb4",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Santa Fe",
      "slug": "Acrónimo",
      "priority": 29,
      "rooms": [],
      "_id": "54d90006bb1ab4cf14000b68",
      "amount": 4140
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50719c161867c571d1c74",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e506dac161867c571d1bd9",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Mendoza",
      "slug": "Slug",
      "priority": 28,
      "rooms": [],
      "_id": "54e48b913a718e04031c082c",
      "amount": 1714
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50714c161867c571d1c66",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e506e7c161867c571d1c01",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Salta",
      "slug": "Acrónimo",
      "priority": 27,
      "rooms": [],
      "_id": "54e50898c161867c571d238b",
      "amount": 788
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506dac161867c571d1bda",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50708c161867c571d1c49",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Jujuy",
      "slug": "Acrónimo",
      "priority": 26,
      "rooms": [],
      "_id": "54e508d5c161867c571d24f7",
      "amount": 418
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50708c161867c571d1c4c",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50712c161867c571d1c62",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Tierra del Fuego",
      "slug": "Acrónimo",
      "priority": 25,
      "rooms": [],
      "_id": "54e508dfc161867c571d252f",
      "amount": 281
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50709c161867c571d1c4d",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50708c161867c571d1c4b",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Tucumán",
      "slug": "Acrónimo",
      "priority": 24,
      "rooms": [],
      "_id": "54e50a13c161867c571d2a8f",
      "amount": 1166
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e5071cc161867c571d1c7c",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50721c161867c571d1c90",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Formosa",
      "slug": "Acrónimo",
      "priority": 23,
      "rooms": [],
      "_id": "54e50a6fc161867c571d2bf5",
      "amount": 209
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506fcc161867c571d1c2b",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e5071ec161867c571d1c83",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "La Rioja",
      "slug": "Acrónimo",
      "priority": 22,
      "rooms": [],
      "_id": "54e50ac1c161867c571d2cf6",
      "amount": 292
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e5071ec161867c571d1c88",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50723c161867c571d1c9a",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Córdoba",
      "slug": "Acrónimo",
      "priority": 21,
      "rooms": [],
      "_id": "54e50ae3c161867c571d2d89",
      "amount": 3367
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506dbc161867c571d1bdc",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e506dcc161867c571d1bdd",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Santiago del Estero",
      "slug": "Acrónimo",
      "priority": 20,
      "rooms": [],
      "_id": "54e50b4fc161867c571d2f52",
      "amount": 360
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506fcc161867c571d1c2c",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e506e6c161867c571d1bfd",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Entre Ríos",
      "slug": "Acrónimo",
      "priority": 19,
      "rooms": [],
      "_id": "54e50b83c161867c571d30b8",
      "amount": 973
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50734c161867c571d1cff",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50714c161867c571d1c65",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "San Luis",
      "slug": "Acrónimo",
      "priority": 18,
      "rooms": [],
      "_id": "54e5106fc161867c571d4e35",
      "amount": 309
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50712c161867c571d1c64",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50726c161867c571d1ca7",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Chaco",
      "slug": "Acrónimo",
      "priority": 17,
      "rooms": [],
      "_id": "54e510e1c161867c571d51c1",
      "amount": 619
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50736c161867c571d1d07",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50729c161867c571d1cb2",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "La Pampa",
      "slug": "Acrónimo",
      "priority": 16,
      "rooms": [],
      "_id": "54e5114dc161867c571d5474",
      "amount": 259
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506f7c161867c571d1c24",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50732c161867c571d1cec",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Chubut",
      "slug": "Acrónimo",
      "priority": 15,
      "rooms": [],
      "_id": "54e511cac161867c571d572e",
      "amount": 471
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506f2c161867c571d1c1a",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50733c161867c571d1cf9",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "San Juan",
      "slug": "Acrónimo",
      "priority": 14,
      "rooms": [],
      "_id": "54e51211c161867c571d5898",
      "amount": 374
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506f2c161867c571d1c1b",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50736c161867c571d1d06",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Corrientes",
      "slug": "Acrónimo",
      "priority": 13,
      "rooms": [],
      "_id": "54e51242c161867c571d598e",
      "amount": 708
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e5072cc161867c571d1cc3",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e50739c161867c571d1d0e",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Neuquen",
      "slug": "Acrónimo",
      "priority": 12,
      "rooms": [],
      "_id": "54e51263c161867c571d5a60",
      "amount": 553
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506e8c161867c571d1c05",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e51434c161867c571d639d",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Santa Cruz",
      "slug": "Acrónimo",
      "priority": 11,
      "rooms": [],
      "_id": "54e51438c161867c571d63b0",
      "amount": 324
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e5072ec161867c571d1cde",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e516f3c161867c571d705c",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Catamarca",
      "slug": "Acrónimo",
      "priority": 10,
      "rooms": [],
      "_id": "54e514dcc161867c571d661f",
      "amount": 258
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e506f5c161867c571d1c23",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e5152ec161867c571d679e",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Río Negro",
      "slug": "Acrónimo",
      "priority": 9,
      "rooms": [],
      "_id": "54e51535c161867c571d67ae",
      "amount": 511
    }, {
      "logo": {
        "ext": "png",
        "filename": "54e50709c161867c571d1c4f",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54e515ddc161867c571d6aea",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Misiones",
      "slug": "Acrónimo",
      "priority": 8,
      "rooms": [],
      "_id": "54e515f3c161867c571d6b74",
      "amount": 347
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f728a7573805670f003101",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54f72ac9573805670f003494",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Chile",
      "slug": "Acrónimo",
      "priority": 7,
      "rooms": [],
      "_id": "54edd323ae68deec0505f63c",
      "amount": 22
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f72894573805670f0030e8",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54edd3d4ae68deec0505f7db",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Uruguay",
      "slug": "Acrónimo",
      "priority": 6,
      "rooms": [],
      "_id": "54edd3ccae68deec0505f7ba",
      "amount": 516
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f72872573805670f0030ac",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54f72882573805670f0030c9",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Estados Unidos",
      "slug": "Acrónimo",
      "priority": 5,
      "rooms": [],
      "_id": "54f08c37695aa1792d048a6a",
      "amount": 135
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f728d1573805670f003167",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54f728dc573805670f00317d",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Paraguay",
      "slug": "Acrónimo",
      "priority": 4,
      "rooms": [],
      "_id": "54f728c5573805670f00313c",
      "amount": 23
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f728f9573805670f0031ab",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54f72928573805670f00320b",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Bolivia",
      "slug": "Acrónimo",
      "priority": 3,
      "rooms": [],
      "_id": "54f728e7573805670f003191",
      "amount": 18
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f72955573805670f003264",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54f72aaf573805670f003461",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Brasil",
      "slug": "Acrónimo",
      "priority": 2,
      "rooms": [],
      "_id": "54f72948573805670f003248",
      "amount": 9
    }, {
      "logo": {
        "ext": "png",
        "filename": "54f72ae6573805670f0034cf",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "cover": {
        "ext": "jpeg",
        "filename": "54f72af3573805670f0034f1",
        "basePath": "http://static.iamat.com/media/",
        "formats": [ "small", "medium", "bigscreen", "original" ]
      },
      "primary_color": "#000000",
      "secundary_color": "#FFFFFF",
      "name": "Mejico",
      "slug": "Acrónimo",
      "priority": 1,
      "rooms": [],
      "_id": "54f72ada573805670f0034bb",
      "amount": 24
    } ];
    return teams;
  });
