function gerar(){
    let numtxt = document.getElementById('numtxt')
    //let res = document.getElementById('res')
    let tab = document.getElementById('tabela')
    if (numtxt.value.length == 0){
        alert(`Insira um Número.`)
    } else {
        let num = Number(numtxt.value)
        let c = 1
        tab.innerHTML= ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}