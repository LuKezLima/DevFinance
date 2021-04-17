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
}]




const transactionsActions = {
    incomes() {
        // SOMAR AS ENTRADAS DE DINHEIRO
    },

    expenses() {
        // SOMAR AS SAIDAS DE DINHEIRO
    },

    total() {
        // ENTRADAS - SAIDAS
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
        const html = `
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="/assets/minus.svg" alt="remover transação" />
        </td>
        `
        return html
    }
}


DOM.addTransaction(transactionsValues[2])