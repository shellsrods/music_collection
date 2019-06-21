import Route from '@ember/routing/route';

export default Route.extend({
    model(data) {
        //return this.store.findRecord('library', param.id);
        return data;
    },
    setupController : function(controller, model){
        console.log("model", model);
        controller.set("model", model);
    }
});
