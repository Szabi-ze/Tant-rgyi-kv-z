const kvizKerdes = [
    {
        subject: "Történelem",
        question: "Ki szentesítette az 1848-as áprilisi törvényeket?",
        answer: ["I. Ferenc","V. Ferdinánd","Ferenc József","I. Lipót"],
        correct: 1
    },
    {
        subject: "Magyar nyelv",
        question: "Melyik történelmi korszak NEM jelenik meg a mű színeiben?",
        answer: ["Ókori Athén","Középkori Prága","Római Birodalom","Amerikai vadnyugat"],
        correct: 3
    },
    {
        subject: "Matematika",
        question: "Mennyi a sin 30° értéke?",
        answer: ["1","√3/2","0","1/2"],
        correct: 3
    },
    {
        subject: "Történelem",
        question: "Melyik reform NEM szerepelt az áprilisi törvények között?",
        answer: ["A jobbágyság eltörlése","A közteherviselés bevezetése","Általános választójog mindenkinek","A felelős magyar kormány létrehozása"],
        correct: 2
    },
    {
        subject: "Matematika",
        question: "Melyik egyenlőség helyes?",
        answer: ["cos 0° = 0","sin 90° = 1","tan 45° = 0","cos 60° = √3/2"],
        correct: 1
    },
    {
        subject: "Magyar nyelv",
        question: "Ki írta Az ember tragédiáját?",
        answer: ["Arany János","Madách Imre","Vörösmarty Mihály","Katona József"],
        correct: 1
    },
    {
        subject: "Magyar nyelv",
        question: "Hány színből áll Az ember tragédiája?",
        answer: ["8","10","15","20"],
        correct: 2
    },
    {
        subject: "Történelem",
        question: "Mi volt az áprilisi törvények egyik fő célja?",
        answer: ["A Habsburg-ház megerősítése","A polgári átalakulás megteremtése","A három részre szakadt ország újraegyesítése","Az ország teljes függetlenségének kikiáltása"],
        correct: 1
    },
    {
        subject: "Magyar nyelv",
        question: "Ki mondja: „Mondottam, ember: küzdj és bízva bízzál!”?",
        answer: ["Ádám","Éva","Lucifer","Az Úr"],
        correct: 3
    },
    {
        subject: "Matematika",
        question: "Mennyi a tan 45° értéke?",
        answer: ["1","0","√3","-1"],
        correct: 0
    },



]
var szam = 1;
var pont = 0;
console.log(kvizKerdes.length)
function kotkezo() {
    // Ellenorzes 
    let doboz = document.getElementsByTagName("input")
    let tbody = document.getElementById("bodyt");
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    
    let bepipalt = 0

    for (let index = 0; index < doboz.length-1; index++) {
        if (doboz[index].checked){
            bepipalt = index+1
        }
    }
    

    if(doboz[kvizKerdes[szam-1].correct].checked){
        pont++;
        td1.innerText = kvizKerdes[szam-1].question
        td2.innerText = "Helyes válasz"
        td3.innerText = kvizKerdes[szam-1].answer[bepipalt-1]
    } else{
        td1.innerText = kvizKerdes[szam-1].question
        td2.innerText = "Helytelen válasz"
        td3.innerText = kvizKerdes[szam-1].answer[bepipalt-1]
        if(kvizKerdes[szam-1].answer[bepipalt-1] == undefined){
            td3.innerText = "Nem adott meg választ"
        }
    }

    if(kvizKerdes[szam-1].subject == "Matematika"){
        tr.className = "matek"
    } else if(kvizKerdes[szam-1].subject == "Magyar nyelv"){
        tr.className = "magyar"
    } else {
        tr.className = "tori"
    }

    tr.append(td1)
    tr.append(td3)
    tr.append(td2)
    tbody.append(tr)


    document.getElementById("valasz1").checked = false
    document.getElementById("valasz2").checked = false
    document.getElementById("valasz3").checked = false
    document.getElementById("valasz4").checked = false

 
    if (szam < kvizKerdes.length) {
        document.getElementById("kerdesfo").innerText = kvizKerdes[szam].question;

        document.getElementById("kerdes1").innerText = kvizKerdes[szam].answer[0];
        document.getElementById("kerdes2").innerText = kvizKerdes[szam].answer[1];
        document.getElementById("kerdes3").innerText = kvizKerdes[szam].answer[2];
        document.getElementById("kerdes4").innerText = kvizKerdes[szam].answer[3];
        
        szam++;
        document.getElementById("hanyadik").innerText = szam + "/10"
    } else{
        document.getElementById("gomb").setAttribute("value", "Eredmények")
        document.getElementById("gomb").setAttribute("onclick", "eredmeny()")
    }
}
document.getElementById("kerdes1").innerText = kvizKerdes[0].answer[0];
document.getElementById("kerdes2").innerText = kvizKerdes[0].answer[1];
document.getElementById("kerdes3").innerText = kvizKerdes[0].answer[2];
document.getElementById("kerdes4").innerText = kvizKerdes[0].answer[3];       
document.getElementById("kerdesfo").innerText = kvizKerdes[0].question;




function eredmeny() {
    alert(pont)
}