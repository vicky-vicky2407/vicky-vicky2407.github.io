$(document).ready(function(){
    var count=0;
    developer_animation();
    function developer_animation(){
        setTimeout(function(){
            count++;
            if(count==1){
                title="G";
            }else if(count==2){
                title="Ga";
            }else if(count==3){
                title="Gam";
            }else if(count==4){
                title="Game";
            }else if(count==5){
                title="Gamer";
            }
            if(count!=6){
                $(`.title`).text(`I'm a ${title}`);
                developer_animation();
            }else if(count==10){
                count=0;
                setTimeout(function(){
                    designer_animation();
                },1000);
            }
        },100);
    }

function designer_animation(){
   setTimeout(function (){
count++;
if(count ==1){
    title="D";
}else if (count ==2){
    title ="De";
}else if (count ==3){
    title ="Des";
}else if (count ==4){
    title ="Desi";
}else if (count ==5){
    title ="Desig";
}else if (count ==6){
    title ="Design";
}else if (count ==7){
    title ="Designe";
}else if (count ==8){
    title=  "Designer";
}
if (count !=10){
    $(`.title`).text(`I'm a ${title}`);
    designer_animation();
}else if (count ==10){
    count =0;
    setTimeout(function(){
        developer_animation();
    },1000);
}
   } ,100);
}
})
