let fromCurrency = document.querySelector('.fromCurrency')
let fromValue = document.querySelector('.outfromCurr')
let toCurrency = document.querySelector('#tocurrency')
let toValue = document.querySelector('#tovalue')
let from, to, v1, v2;

fromCurrency.addEventListener('change', event => {
    from = event.target.value
})

toCurrency.addEventListener('change', event => {
    to = event.target.value
    if(v1){
        compute(from, to)
    }
})

fromValue.addEventListener('keyup', event => {
    v1 = event.target.value
    if(to){
        compute(from, to, event.target.id)
    }
});

toValue.addEventListener('keyup', event => {
    v2 = event.target.value
    compute(to, from, event.target.id)
})


async function compute(f, t, id){
    const data = await fetch(`https://v6.exchangerate-api.com/v6/deaafa70caff2ba84c03dc2b/pair/${f}/${t}`)
    const rate = await data.json()
    if(id){
        fromValue.value = (rate.conversion_rate * v2).toFixed(2)
    }else{
        toValue.value = (rate.conversion_rate * v1).toFixed(2)
    }
}
