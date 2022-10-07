const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasics = document.getElementById('basics');
const getprof = document.getElementById('professional');
const getmst = document.getElementById('master');

getchecklabel.addEventListener('click',function(){
    // console.log('i amm owrking');

    if(getcheckbox.checked){
        // result is before click
        // console.log('yes');
        
        [getbasics.textContent,getprof.textContent,getmst.textContent] = [10,20,30];
    }else{
        // console.log('no');

        getbasics.textContent = 120;
        getprof.textContent = 240;
        getmst.textContent = 360;
    }
});