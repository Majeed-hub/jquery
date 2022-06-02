$(document).ready(function(){
    let toggle = false;
    $('button').on("click",function(){
        // $("#element").toggle("slow",function(){
            
        // });
        $("#element").animate({width : 'toggle'});
        if(!toggle){
            $("button").text("show");
            toggle=true;
        }else{
            $("button").text("hide");
            toggle = false;

        }
        
    })
    
})