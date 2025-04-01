function randomPassword() {
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    const ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let block1 = "";
    let block2 = "";
    let block3 = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block1 += ln[randomIndex];
    }
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block2 += ln[randomIndex];
    }
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block3 += ln[randomIndex];
    }

    const randomCode = block1+"-"+block2+"-"+block3;

    document.getElementById("myNumber").textContent = randomCode;
}

function hexKey() {
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    const ln = "0123456789ABCDEF";

    let block1 = "";
    let block2 = "";
    let block3 = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block1 += ln[randomIndex];
    }
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block2 += ln[randomIndex];
    }
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block3 += ln[randomIndex];
    }

    const randomCode = block1+"-"+block2+"-"+block3;

    document.getElementById("myNumber").textContent = randomCode;
}

function alphaKey() {
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    const ln = "0123456789ABCDEFGHKLMNPSTUVXYZ";

    const randomNumber = String(Math.floor(Math.random() * 8)+1);
    const randomIndex1 = Math.floor(Math.random() * letters.length);
    randomLetter = letters[randomIndex1];

    let block1 = "";
    let block2 = "";
    let block3 = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block1 += ln[randomIndex];
    }
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block2 += ln[randomIndex];
    }
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        block3 += ln[randomIndex];
    }

    const randomCode = block1+"-"+block2+"-"+block3;

    document.getElementById("myNumber").textContent = randomCode;
}

function code_2l5n() {
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    
    let randomLetters = "";
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomLetters += letters[randomIndex];
    }

    const randomNumbers = String(Math.floor(Math.random() * 100000)).padStart(5, '0');

    const randomCode = randomLetters + "-" + randomNumbers;

    document.getElementById("myNumber").textContent = randomCode;
}

function plk3() {
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    const ln = "0123456789ABCDEFGHKLMNPSTUVXYZ";

    const randomNumber = String(Math.floor(Math.random() * 8)+1);
    const randomIndex1 = Math.floor(Math.random() * letters.length);
    randomLetter = letters[randomIndex1];

    let randomSerial1 = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * ln.length);
        randomSerial1 += ln[randomIndex];
    }

    const randomNumber1 = String(Math.floor(Math.random() * 100)).padStart(2, '0');

    const randomCode = randomNumber + randomLetter + " " + randomSerial1 + randomNumber1;

    document.getElementById("myNumber").innerHTML = randomCode;
}

function code_3l4n() {
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    
    let randomLetters = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomLetters += letters[randomIndex];
    }

    const randomNumbers = String(Math.floor(Math.random() * 10000)).padStart(4, '0');

    const randomCode = randomLetters + randomNumbers;

    document.getElementById("myNumber").innerHTML = randomCode;
}
function vnCar(){
    const TT = ["", "", "", "", "", "", "", "", "", "", "", "CBG", "LSN", "", "QNN", "HPG", "HPG", "THB", "NMD", "PTH", "TNN", "YBA", "TQG", "HGG", "LCA", "LCH", "SLA", "DBN", "HBN", "HAN", "HAN", "HAN", "HAN", "HAN", "HDG", "NBN", "THA", "NGN", "HTN", "DGN", "HAN", "HCM", "", "DNG", "", "", "", "DLK", "DKN", "LDG", "HCM", "HCM", "HCM", "HCM", "HCM", "HCM", "HCM", "HCM", "HCM", "HCM", "DGN", "BDG", "LGA", "TGG", "VLG", "CTH", "DGT", "AGG", "KGG", "CMU", "TNN", "BTR", "BVT", "QBN", "QTR", "TTH", "QNG", "BDN", "PHY", "KHA", "", "GLA", "KTM", "STR", "TRV", "NTH", "BTH", "", "VPH", "HGY", "HNM", "", "QNM", "BPC", "BCL", "HUG", "", "BKN", "BGG", "BNN"];

    let ProvinceID = 0;
    let ProvinceName = "";
    do {
        ProvinceID = Math.floor(Math.random() * 100);
        ProvinceName = TT[ProvinceID];
    } while (ProvinceName=="");
    const letters = "ABCDEFGHKLMNPSTUVXYZ";
    
    let randomLetters = "";
    const randomIndex = Math.floor(Math.random() * letters.length);
    
    randomLetters += letters[randomIndex];
    
    const randomNumbers = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    const randomNumbers2 = String(Math.floor(Math.random() * 100)).padStart(2, '0');

    const randomCode = ProvinceID + randomLetters + "-" + randomNumbers + "."+randomNumbers2;;

    document.getElementById("myNumber").innerHTML = randomCode;
}
