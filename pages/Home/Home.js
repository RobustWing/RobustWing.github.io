define(['text!./template.html'], function(tmpl) {
	return {
		template: tmpl,
		data() {
	      return {
	        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
	      };
	    },
	    methods: {
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
	      }
	    }
	}
})