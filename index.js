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

$(`.project_name`).text("my project");
$(`.project_content`).text('this is my project design 1');
var project_count =1;
$('.next').click(function(){
    console.log('click');
   
    if(project_count ==3){
        project_count =0;
        }
        project_count++;
        $('.actual_img').attr('src','./img/design_'+project_count+'.jpg')
        if(project_count ==1){
            $('.project_name').text("my project");
            $('.project_content').text('this is my project design')
        }else if(project_count ==2){
            $('.project_name').text("my project 2");
            $('.project_content').text('this is my project design 2')
        }else if(project_count ==3){
            $('.project_name').text("my project 3");
            $('.project_content').text('this is my project design 3')
        }
})

})