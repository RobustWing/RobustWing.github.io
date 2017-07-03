define(['text!./app.html', 'components/Header/Header'], 

    function (tmpl, header) {


    var app = {
      template: tmpl,
      data: function() {
        return {
            defaultActive: '1',
        }
      },
      components: {
        systemHeader: header
      },
      methods: {
        
      }
    };

    return app;
});
