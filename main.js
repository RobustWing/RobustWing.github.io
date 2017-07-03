define(function(require){

  var vueRouter = require('vueRouter');
    Vue.use(vueRouter)
    var router = require('router');
    
    var $ = require("jquery");

  var app = require("pages/App/App")
    var babel = require('lib/polyfill.min');

  window.vm = new Vue({
    el: '#app',
    data: function() {
        return {
          test: 'aaa',
          loading: true
        }
    },
    router: router,
    // render: h => h(App)
    components: {
      App: app
    }
  })
  
});
