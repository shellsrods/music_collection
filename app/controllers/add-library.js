import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        add () {
            this.store.createRecord('library', this.get('model').getRecords());
            alert("Saved");
        }
    }
});
