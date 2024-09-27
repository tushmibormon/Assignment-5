
const BtnBlog = document.getElementById('btn-blog')
BtnBlog.addEventListener('click', function(){
    window.location.href = "./home.html"
})

const DonationBtn = document.getElementById('donate-btn')

DonationBtn.addEventListener('click', function(){

    // DonationBt.classList.add("bg-lime-300")
    DonationBtn.classList.add("bg-lime-300");
    const cardSection = document.getElementById('donate-section')
    cardSection.classList.remove("hidden")

    const historySection = document.getElementById('history-section')
    historySection.classList.add("hidden")
})



const HistoryBtn = document.getElementById('history-btn')
HistoryBtn.addEventListener('click', function(){
    const cardSection = document.getElementById('donate-section')
    cardSection.classList.add("hidden")

    // HistoryBtn.classList.add("bg-lime-300")
    HistoryBtn.classList.remove("bg-lime-300");

    const historySection = document.getElementById('history-section')
    historySection.classList.remove("hidden")
})


const BtnMoney = document.getElementById('btn-money')
BtnMoney.addEventListener('click', function(event){
    event.preventDefault();

    const inputId = parseFloat(document.getElementById('input-id').value);
    const addBalance = parseFloat(document.getElementById('add-balance').innerText);
    const balance = parseFloat(document.getElementById('balance').innerText);

    if (!isNaN(inputId) && inputId > 0 && inputId < balance) {
        let total = balance - inputId;
        let Amount = addBalance + inputId;

        document.getElementById('add-balance').innerText = Amount.toFixed(2);
        document.getElementById('balance').innerText = total.toFixed(2);
        alert("successful");
    }
    else{
        alert("invalid number");
    }
})



