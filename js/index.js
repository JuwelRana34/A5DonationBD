const DonationBtn = document.getElementById("Donation");
const HistoryBtn = document.getElementById("History");
const showDonationHistory = document.getElementById("showDonationHistory");

const boxContants = document.getElementById("box-contants");
const myBalance = parseInt(document.getElementById("myBalance").innerText);

// common function

function getInputValue(id) {
  return parseInt(document.getElementById(id).value);
}

NoakhalifInput.addEventListener("input", function () {
  NoakhalifBtn.removeAttribute("disabled");
});

function modalopen() {
  const Modal = document.getElementById("my_modal_1");
  Modal.showModal();
}
function modalClose() {
  const Modal = document.getElementById("my_modal_2");
  Modal.showModal();
}

// common function end

// two button functionnality
HistoryBtn.addEventListener("click", function () {
  boxContants.classList.add("hidden");
  HistoryBtn.classList.add("bg-[#B4F461]");
  HistoryBtn.classList.remove("hover:bg-[#B4F461]");
  DonationBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.remove("hidden");
  showDonationHistory.classList.remove("hidden");
});
DonationBtn.addEventListener("click", function () {
  boxContants.classList.remove("hidden");
  HistoryBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.add("bg-[#B4F461]");
  showDonationHistory.classList.add("hidden");
});

// donation functionality
// boxContants.addEventListener('click',function(e){
//     const parent = e.target.parentElement
//     // const input = parseFloat(parent.querySelector("input").value)
//     const input2 =getInputValue( parent.querySelector("input").getAttribute("id"))
//     // const getValue= input2)

//     let donateAmountBtn =  parent.querySelector("button").getElementsByTagName('p')[0].innerText

//    let number  = Number(donateAmountBtn)

//      const totalDonation = number  + input2

//      parent.querySelector("button").getElementsByTagName('p')[0].innerText = totalDonation

//     // console.log( donateAmountBtn  );
// })

// card1
var NoakhaliFundCollectionTotal = 0;
document.getElementById("NoakhalifBtn").addEventListener("click", function () {
  let NoakhalifInput = getInputValue("NoakhalifInput");

  if (NoakhalifInput > 0 && !isNaN(NoakhalifInput)) {
    NoakhaliFundCollectionTotal += NoakhalifInput;

    document.getElementById("NoakhalifDonatioamount").innerText =
      NoakhaliFundCollectionTotal;
    let remingnMyBlance = myBalance - NoakhalifInput;
    if (remingnMyBlance < 0) {
       return alert(`account balance is low`)
    }else{
         document.getElementById("myBalance").innerText = remingnMyBlance;

    }
   
    modalopen();
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="border rounded-lg p-3 ">
            <h1 class="font-semibold">${NoakhalifInput} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
            <p>Date: ${new Date()}</p>
            </div>`;

    showDonationHistory.appendChild(div);

    document.getElementById("NoakhalifInput").value = "";
  } else {
    modalClose();
  }
});
