/**
 * Created by gaoliangliang on 2017/5/23.
 */
var tk = tk||{};
String.prototype.toJson = function() {
    return JSON.parse(this);
};

tk.ajax=function(options){

    options = $.extend(true,{
        timeout:120000,
        dataType:'',
        responseType:'json',
        data:{},
        succ:null,
        failure:null,
        success:function(result){

            var realResult = result;
            if(result!='' && options.responseType==='json'){
                try{
                    if(result.toJson){
                        realResult = result.toJson();
                    }
                }catch(e){
                    if(console){
                        console.log(e);
                    }
                }
            }

            if(options.succ){
                options.succ(realResult);
            }

        },
        error:function(XMLHttpRequest, status, errorThrown){
            var responseText=XMLHttpRequest.responseText;
            if(responseText) {
                try {
                    var jsonResult = responseText.toJson();
                    if (jsonResult && jsonResult.code === "-99" && XMLHttpRequest.status === 403) {
                        window.location.href = contextPath + "/";
                    }
                } catch(e) {
                    if(console){
                        console.log(e);
                    }
                }
            }

            if(options.failure){
                options.failure(XMLHttpRequest,status,errorThrown);
            }
        }
    },options);

    $.ajax(options);
}