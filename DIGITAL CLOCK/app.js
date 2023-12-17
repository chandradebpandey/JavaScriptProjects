window.onload  = () => {
    function digiClock() {
        

        const date = new Date();
        

        let hours = date.getHours(); // 0 to 23
        let minutes = date.getMinutes(); // 0 to 59
        let seconds = date.getSeconds(); // 0 to 59

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#clock-hour').innerText = hours;
        document.querySelector('#clock-minute').innerText = minutes;
        document.querySelector('#clock-second').innerText = seconds;

        setTimeout(digiClock,1000);
    }
    digiClock();
}