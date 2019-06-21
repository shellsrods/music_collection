import DS from 'ember-data';

export default DS.Model.extend({
    artist: DS.attr(),
    name: DS.attr(),
    genre: DS.attr(),
    cover: DS.attr(),
    yearOfRelease: DS.attr(),
    link: DS.attr()
});
