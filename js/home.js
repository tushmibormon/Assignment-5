
const BtnBlog = document.getElementById('btn-blog')
BtnBlog.addEventListener('click', function(){
    window.location.href = "./home.html"
})

const DonationBtn = document.getElementById('donate-btn')

DonationBtn.addEventListener('click', function(){

    DonationBtn.classList.add("bg-lime-300");

    const cardSection = document.getElementById('donate-section')
    cardSection.classList.remove("hidden")

    const historySection = document.getElementById('history-section')
    historySection.classList.add("hidden")

    // DonationBtn.classList.add("bg-lime-300");
})



const HistoryBtn = document.getElementById('history-btn')
HistoryBtn.addEventListener('click', function(){
    const cardSection = document.getElementById('donate-section')
    cardSection.classList.add("hidden")

    HistoryBtn.classList.add("bg-lime-300");

    const historySection = document.getElementById('history-section')
    historySection.classList.remove("hidden")
})


const BtnMoney = document.getElementById('btn-money')
BtnMoney.addEventListener('click', function(event){
    event.preventDefault();

    const inputId = parseFloat(document.getElementById('input-id').value);
    const addBalance = parseFloat(document.getElementById('add-balance').innerText);
    const balance = parseFloat(document.getElementById('balance').innerText);

    const historyOne = document.getElementById('history-id1')

    if (!isNaN(inputId) && inputId > 0 && inputId < balance) {
        let total = balance - inputId;
        let Amount = addBalance + inputId;

        document.getElementById('add-balance').innerText = Amount.toFixed(2);
        document.getElementById('balance').innerText = total.toFixed(2);
        historyOne.innerHTML = ` 
        <p class="text-xs text-gray-500">${inputId}  Taka is Donated for Donate for Flood at Noakhali, Bangladesh.
      </p>
        <p class="text-xs text-gray-500">Data: ${new Date()}</p>
        
    
    `;
        document.getElementById('input-id').value = "";
        alert("successful");
    }
    else{
        alert("invalid number");
    }
})


const BtnMoney2 = document.getElementById('btn-money2')
BtnMoney2.addEventListener('click', function(event){
    event.preventDefault();

    const inputId2 = parseFloat(document.getElementById('input-id2').value);
    const addBalance2 = parseFloat(document.getElementById('add-balance2').innerText);
    const balance2 = parseFloat(document.getElementById('balance').innerText);

    const historyOne = document.getElementById('history-id2')

    if (!isNaN(inputId2) && inputId2 > 0 && inputId2 < balance2) {
        let total2 = balance2 - inputId2;
        let Amount2 = addBalance2 + inputId2;

        document.getElementById('add-balance2').innerText = Amount2.toFixed(2);
        document.getElementById('balance').innerText = total2.toFixed(2);
        historyOne.innerHTML = ` 
        <p class="text-xs text-gray-500">${inputId2}  Taka is Donated for Donate for Flood at Noakhali, Bangladesh.
      </p>
        <p class="text-xs text-gray-500">Data: ${new Date()}</p>
        
    
    `;
        document.getElementById('input-id2').value = "";
        alert("successful");
    }
    else{
        alert("invalid number");
    }
})

const BtnMoney3 = document.getElementById('btn-money3')
BtnMoney3.addEventListener('click', function(event){
    event.preventDefault();

    const inputId3 = parseFloat(document.getElementById('input-id3').value);
    const addBalance3 = parseFloat(document.getElementById('add-balance3').innerText);
    const balance3 = parseFloat(document.getElementById('balance').innerText);

    const historyOne = document.getElementById('history-id3')

    if (!isNaN(inputId3) && inputId3 > 0 && inputId3 < balance3) {
        let total3 = balance3 - inputId3;
        let Amount3 = addBalance3 + inputId3;

        document.getElementById('add-balance3').innerText = Amount3.toFixed(2);
        document.getElementById('balance').innerText = total3.toFixed(2);
        historyOne.innerHTML = ` 
        <p class="text-xs text-gray-500">${inputId3}  Taka is Donated for Donate for Flood at Noakhali, Bangladesh.
      </p>
        <p class="text-xs text-gray-500">Data: ${new Date()}</p>
        
    
    `;
        document.getElementById('input-id3').value = "";
        alert("successful");
    }
    else{
        alert("invalid number");
    }
})



