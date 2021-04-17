// MODO DE ABRIR E FECHAR MODAL COM OBJETO E METÓDOS
const Modal = {
    open(){
       document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

console.log("Hello world")

function openCloseModal() {
    document.querySelector('.modal-overlay').classList.toggle("active") // TOGGLE REMOVE E ADICIONA A CLASSE "ACTIVE"
}


const transactionsValues = [{
    id: 1,
    description: "Luz",
    amount: -50000,
    date: '23/01/2021'
}, {
    id: 2,
    description: "CriaçãoWebsite",
    amount: 500000,
    date: '23/01/2021'

},
{
    id: 3,
    description: "Internet",
    amount: -20000,
    date: '23/01/2021'
},
{
    id: 4,
    description: "App",
    amount: 20000,
    date: '21/01/2021'
}]


const transactionsActions = {
    all: transactionsValues,


    add(transaction){
        transactionsActions.all.push(transaction)

        App.reload()
    },


    incomes() {
        let income = 0
        transactionsActions.all.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount
            }  
            
        } )

        return income
    },

    expenses() {
        let expense = 0
        transactionsActions.all.forEach(transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }  
            
        } )

        return expense
    },

    total() {
        return transactionsActions.incomes() + transactionsActions.expenses()
    }

}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){   
        const tr = document.createElement('tr') // CRIANDO O ELEMENTO TR
        tr.innerHTML = DOM.innerHTMLTransaction(transaction) // INSERINDO DENTRO DA TAG TR O HTML

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "Income" : "expense"  
       
        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="/assets/minus.svg" alt="remover transação" />
        </td>
        `
        return html
    },

    updateBalance(){
        document.getElementById('incomedisplay').innerHTML = Utils.formatCurrency(transactionsActions.incomes())

        document.getElementById('expensedisplay').innerHTML = Utils.formatCurrency(transactionsActions.expenses())

        document.getElementById('totaldisplay').innerHTML = Utils.formatCurrency(transactionsActions.total())
    
    },

    clearTransactions(){
        DOM.transactionsContainer.innerHTML = ""
    }
}


const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g,"")

        value = Number(value) / 100

        value = Number(value).toLocaleString ("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        
        return signal + value
    }
}


const App = {
    init(){
        transactionsActions.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance()
        

    },
    reload(){
        DOM.clearTransactions()
        App.init()

    }
}


App.init()


transactionsActions.add({
    id: 23,
    description: "alo",
    amount: 200,
    date: "12/12/2001"
})

