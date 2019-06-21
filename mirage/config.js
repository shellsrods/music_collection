export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.namespace = '/api';
  this.get('/libraries', function() {
    return {
      data: [
        {
          id:1,
          type: "libraries",
          attributes:{
            "artist": "artist1",
            "name":"name1",
            "genre": "genre1",
            "cover": "/images/1.jpeg",
            "year-of-release": 2018,
            "link": "http://jskkd.sadsajkk.com"
          }
        },
        {
          id:2,
          type: "libraries",
          attributes:{
            "artist": "artist2",
            "name":"name2",
            "genre": "genre2",
            "cover": "/images/2.jpeg",
            "year-of-release": 2018,
            "link": "http://dfdsfkkd.sxcxajkk.com"
          }
        },
        {
          id:3,
          type: "libraries",
          attributes:{
            "artist": "artist3",
            "name":"name3",
            "genre": "genre3",
            "cover": "/images/3.jpeg",
            "year-of-release": 2019,
            "link": "http://jsdddd.sadsaceeek.com"
          }
        }
      ]
    };
  })
}
