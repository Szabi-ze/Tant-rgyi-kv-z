const kvizKerdes = [
    {
        subject: "Történelem",
        question: "Ki szentesítette az 1848-as áprilisi törvényeket?",
        answer: ["I. Ferenc","V. Ferdinánd","Ferenc József","I. Lipót"],
        correct: 1
    },
        {
        subject: "Történelem",
        question: "Mi volt az áprilisi törvények egyik fő célja?",
        answer: ["A Habsburg-ház megerősítése","A polgári átalakulás megteremtése","A három részre szakadt ország újraegyesítése","Az ország teljes függetlenségének kikiáltása"],
        correct: 1
    },
        {
        subject: "Történelem",
        question: "Melyik reform NEM szerepelt az áprilisi törvények között?",
        answer: ["A jobbágyság eltörlése","A közteherviselés bevezetése","Általános választójog mindenkinek","A felelős magyar kormány létrehozása"],
        correct: 2
    },
    {
        subject: "Matematika",
        question: "Mennyi a sin 30° értéke?",
        answer: ["1","√3/2","0","1/2"],
        correct: 3
    },
    {
        subject: "Matematika",
        question: "Melyik egyenlőség helyes?",
        answer: ["cos 0° = 0","sin 90° = 1","tan 45° = 0","cos 60° = √3/2"],
        correct: 1
    },
    {
        subject: "Matematika",
        question: "Mennyi a tan 45° értéke?",
        answer: ["1","0","√3","-1"],
        correct: 0
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
        subject: "Magyar nyelv",
        question: "Melyik szereplő mondja a híres gondolatot: „Mondottam, ember: küzdj és bízva bízzál!”?",
        answer: ["Ádám","Éva","Lucifer","Az Úr"],
        correct: 3
    },
    {
        subject: "Magyar nyelv",
        question: "Melyik történelmi korszak NEM jelenik meg a mű színeiben?",
        answer: ["Ókori Athén","Középkori Prága","Római Birodalom","Amerikai vadnyugat"],
        correct: 3
    },


]
var szam = 1;
var pont = 0;
function kotkezo() {
    if (szam < kvizKerdes.length) {

        document.getElementById("kerdesfo").innerText = kvizKerdes[szam].question;

        document.getElementById("kerdes1").innerText = kvizKerdes[szam].answer[0];
        document.getElementById("kerdes2").innerText = kvizKerdes[szam].answer[1];
        document.getElementById("kerdes3").innerText = kvizKerdes[szam].answer[2];
        document.getElementById("kerdes4").innerText = kvizKerdes[szam].answer[3];
        
        szam++;
        document.getElementById("hanyadik").innerText = szam + "/10"
    
        // Ellenorzes
        
        let tbody = document.getElementById("bodyt");
        let tr = document.createElement("tr")
        let td = document.createElement("td")

        let doboz = document.getElementsByTagName("input")

        if(doboz[kvizKerdes[szam-2].correct].checked){
            pont++;

    }

        // Tablazat




}
}
document.getElementById("kerdes1").innerText = kvizKerdes[0].answer[0];
document.getElementById("kerdes2").innerText = kvizKerdes[0].answer[1];
document.getElementById("kerdes3").innerText = kvizKerdes[0].answer[2];
document.getElementById("kerdes4").innerText = kvizKerdes[0].answer[3];       
document.getElementById("kerdesfo").innerText = kvizKerdes[0].question;




