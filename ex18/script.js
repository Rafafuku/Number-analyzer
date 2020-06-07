var a = []
var soma = 0 

function adicionar() {
    var num = window.document.getElementById('num')
    var sel = window.document.getElementById('sel')
    var n = Number(num.value) 
    
    if (n < 1 || n > 100) {

        window.alert(`Preencha com numreos entre 1 a 100`)

    } else if (a.indexOf(n) >= 0) {
        window.alert('Número repetido!')
    } else {
        
        var res = window.document.getElementById('res')
        var opt = window.document.createElement(`option`)
        opt.value = `${n}`
        opt.text = `Valor ${n} adicionado`
        //sel.appendChild(opt)
        sel.add(opt, sel.options[`${n}`])
             
        a.push(n)
        a.sort(function(a, b) {
            return a - b 
        }) 
        for (c = 0; c < 1; c++) {
                soma += n
                
        }
        num.value = ''
        num.focus()
        res.innerHTML = ''
        
        }
            
    } 

function finalizar() {
    if (a.length == 0) {
        res.innerHTML = 'Faltam dados!'
    } else {

    sel.innerHTML = ''
    res.innerHTML = `
    <p> Ao todo temos ${a.length} números cadastrados.</p>
    <p> O maior valor informado foi ${a[a.length - 1]}.</p>
    <p> O menor valor informado foi ${a[0]}.</p>
    <p> Somando todos os valores, temos ${soma}.</p>
    <p> A média dos valores digitados é ${soma/a.length}</p>`
    }
    
    a = []
    soma = 0
}


 
