function action(power) {
    if(power === "@") {
        fetch('http://airpurifiernst.herokuapp.com/getdata/$')
    }else fetch('http://airpurifiernst.herokuapp.com/getdata/@')
}

setInterval(() => {
    fetch('https://airpurifiernst.herokuapp.com/list')
        .then(response => response.json())
        .then(data => {
            const [{ power, cod, co2, humidity, temperature }] = data
            const html = `
            <div class="container">

                <div class="top">

                    <div class="concentration-of-dust">
                        <div>
                            <span>PM2.5</span>
                            <h1>${ power === '@'? cod : '-'}</h1>
                            <span>&#181;g/m3</span>
                        </div>
                    </div>

                    <ul class="list">
                        <li class="item">
                            <span class="material-symbols-outlined temperature">
                                sunny_snowing
                            </span>
                            <h2>${power === '@'? temperature + '&#176;C' : '-'}</h2>
                            <span>temperature</span>
                        </li>
                        <li class="item">
                            <span class="material-symbols-outlined concentration-of-co2">
                                thermostat
                            </span>
                            <h2>${power === '@'? co2 + 'ppm' : '-'}</h2>
                            <span>concentration-of-co2</span>
                        </li>
                        <li class="item">
                            <span class="material-symbols-outlined humidity">
                                humidity_mid
                            </span>
                            <h2>${power === '@'? humidity + '%' : '-'}</h2>
                            <span>humidity</span>
                        </li>
                    </ul>
                </div>

                <div class="controllers">
                    <div class="${power === '@'? 'power active' : 'power'}" onClick="action('${power}')">
                        <span class="material-symbols-outlined">
                            power_settings_new
                        </span>
                    </div>
                    <div class="auto">
                    <ul class="auto_list">
                        
                        <li class="auto_item auto_item--main">
                            <span class="mode mode-30">70</span>
                        </li>
                    </ul>
                    <span class="material-symbols-outlined">
                        alarm
                    </span>
                </div>
                </div>

            </div>`
            
            const app = document.getElementById('app')
            app.innerHTML = html
        })

}, 1000);