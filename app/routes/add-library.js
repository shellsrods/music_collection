import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model() {
        const Library = EmberObject.extend({
            id: null,
            artist: '',
            name: '',
            genre: '',
            cover: '',
            yearOfRelease: '',
            link: '',

            getRecords(){
                return {
                    "id": Math.round(Math.random() * 100),
                    "artist": this.artist,
                    "name": this.name,
                    "genre": this.genre,
                    "cover": this.cover,
                    "yearOfRelease": this.yearOfRelease,
                    "link": this.link
                };
            }
        });
        return Library.create();
    },
    setupController : function(controller, model){
        controller.set("model", model);
    }
});
