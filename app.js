const form=document.querySelector('#searchForm');
const res =document.querySelector('#tableresult');
var upd;

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
    const ctype =form.elements.coinType.value;

    fetchPrice(ctype);
});

const fetchPrice=async(cType)=>{
    const r = await axios.get(`https://api.cryptonator.com/api/ticker/${cType}`);
        const price =r.data.ticker.price;
        const volume =r.data.ticker.volume;
        const change =r.data.ticker.change;
        const base =r.data.ticker.base;
        const target =r.data.ticker.target;
        const time =r.data.timestamp;

        res.innerHTML =` <tr style="background-color:pink; color:blue; font-weight:700">
        <td>
            property
        </td>
        <td>Value</td>
    </tr>
    <tr>
        <td>
            ${base}
        </td>
        <td >${price} ${target}</td>
    </tr>
    <tr>
        <td>
            Volume
        </td>
        <td >${volume}</td>
    </tr>
    <tr>
        <td>
            Change
        </td>
        <td >${change}</td>
    </tr>
    <tr>
        <td>
            Last update
        </td>
        <td>${time}</td>
    </tr>`;
     upd =setTimeout(()=>fetchPrice(cType),1000);


}