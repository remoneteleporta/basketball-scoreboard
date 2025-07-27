let hmpoint = 0
let gspoint = 0
let hmscore = document.getElementById("homescore")
let gstscore = document.getElementById("guestscore")

function home1point(){
    hmpoint = hmpoint + 1
    hmscore.textContent = hmpoint
    updateLead();
}

function home2point(){
    hmpoint = hmpoint + 2
    hmscore.textContent = hmpoint
    updateLead();
}

function home3point(){
    hmpoint = hmpoint + 3
    hmscore.textContent = hmpoint
    updateLead();
}

function guest1point(){
    gspoint = gspoint + 1
    gstscore.textContent = gspoint
    updateLead();
}

function guest2point(){
    gspoint = gspoint + 2
    gstscore.textContent = gspoint
    updateLead();
}

function guest3point(){
    gspoint = gspoint + 3
    gstscore.textContent = gspoint
    updateLead();
}

document.getElementById("leadMessage").textContent

function updateLead()
{
if (hmpoint > gspoint) {
      leadMessage.textContent = "Home Leads";
    } else if (gspoint > hmpoint) {
      leadMessage.textContent = "Guest Leads";
    } else {
      leadMessage.textContent = "Tied";
    }
}

function resetall()
{
    hmpoint = 0
    gspoint = 0
    hmscore.textContent = hmpoint
    gstscore.textContent = gspoint
    leadMessage.textContent = "Game On"
}