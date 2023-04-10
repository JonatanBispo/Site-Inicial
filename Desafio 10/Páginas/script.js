function trocar(){
    var largura = window.innerWidth
    document.documentElement.clientWidth
    document.body.clientWidth;

    video = document.getElementById('video')


    alert(largura)


    if (largura >= 1200){
        video.setAttribute ('width', '800');
        video.setAttribute ('height', '400');
        
    }
    if(largura < 1200){
        video.setAttribute ('width', '500');
        video.setAttribute ('height', '412');

        
    }
    if (largura < 600){
        video.setAttribute ('width', '330');
        video.setAttribute ('height', '300');
    }

    
}