let modal = {
    id: "exampleModal",
    obj: null,
    img: null,
    title: null,

    init: function(){
        if(!this.obj){
            this.obj = new bootstrap.Modal(document.getElementById(this.id), {
                keyboard: false
              });
        }

    },

    click: function(context){
        this.init();
        let link = $(context);
        let modal = $("#" + this.id);

        this.img = link.find("img");
        modal.find(".modal-body").html(this.img);

        this.title = link.parent().parent().find("h2").text();
        modal.find(".modal-title").text(this.title);

        this.obj.show();    

    }
}