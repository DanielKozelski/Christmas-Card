const countdown = document.querySelector('.countdown');
const launchDate = new Date('Dec 24, 2019 00:00:01').getTime();

const interval = setInterval(()=>{
    console.log('tick')
    const now= new Date().getTime();
    const distance = launchDate - now;
    console.log(distance)

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor(distance %(1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor(distance %(1000*60*60)/(1000*60));
    const seconds = Math.floor(distance %(1000*60)/(1000));
    console.log(days, 'days');
    console.log(hours, 'hours');
    console.log(minutes,'minutes');
    console.log(seconds,'seconds');

    //Template liretals//
    countdown.innerHTML = `
        <div><span>${days} päeva</div></span/>
        <div><span>${hours} tundi</div></span/>
        <div><span>${minutes} minutit</div></span/>
        <div><span>${seconds} sekundid</div></span/>
    `;
    
    if(distance < 0){
        clearInterval(interval);
        countdown.style.color='#fff';
        countdown.innerHTML = "Ilusaid ja Rahulikke Jõule!"
    }

},1000);