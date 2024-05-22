let hibauzi = ""
let vanehiba = false;

function vizsgalas(){
    hibauzi = ""
    vanehiba = false;
    let erkezes = document.getElementById("erkezesdateid").value;
    let tavozas = document.getElementById("tavozasdateid").value;
    if(erkezes > tavozas){
        hibauzi += "\nKérlek reális dátumot adj meg!"
        vanehiba = true;
    }
    if(!document.getElementsByClassName("tradiok")[0].checked && !document.getElementsByClassName("tradiok")[1].checked && !document.getElementsByClassName("tradiok")[2].checked && !document.getElementsByClassName("tradiok")[3].checked){
        hibauzi += "\nKérlek válassz egy szoba típust is!"
        vanehiba = true;
    }
    if(!document.getElementsByClassName("iradiok")[0].checked && !document.getElementsByClassName("iradiok")[1].checked && !document.getElementsByClassName("iradiok")[2].checked){
        hibauzi += "\nKérlek válassz legalább egy ellátást!"
        vanehiba = true;
    }
    if(vanehiba){
        alert(hibauzi)
    }
    else{
        kalkulacio();
    }
}

function kalkulacio(){
    let erkezes = document.getElementById("erkezesdateid").value;
    let tavozas = document.getElementById("tavozasdateid").value;
    let szradioindex = 0
    let vendegek = document.getElementById("fonumberdiv").value;
    let vendegevek = [];
    let eradioindex = 0
    for(let i = 0; i < document.getElementsByClassName("tradiok").length; i++){
        if(document.getElementsByClassName("tradiok")[i].checked){
            szradioindex = i
        }
    }
    for(let i = 0; i < vendegek; i++){
        vendegevek.push(document.getElementsByClassName("evclass")[i].value);
    }
    for(let i = 0; i < document.getElementsByClassName("iradiok").length; i++){
        if(document.getElementsByClassName("iradiok")[i].checked){
            eradioindex = i;
        }
    }

    alert(szradioindex + "\n" + eradioindex + "\n" + "vendégek száma:" + vendegek + "\n" + vendegevek[0])
    }






function fovaltozas(){
    let fo = document.getElementById("fonumberdiv").value;
    if(fo == 1){
        document.getElementById("evid0").disabled = false;
        document.getElementById("evid1").disabled = true;
        document.getElementById("evid2").disabled = true;
        document.getElementById("evid3").disabled = true;
    }
    else if(fo == 2){
        document.getElementById("evid0").disabled = false;
        document.getElementById("evid1").disabled = false;
        document.getElementById("evid2").disabled = true;
        document.getElementById("evid3").disabled = true;
    }
    else if(fo == 3){
        document.getElementById("evid0").disabled = false;
        document.getElementById("evid1").disabled = false;
        document.getElementById("evid2").disabled = false;
        document.getElementById("evid3").disabled = true;
    }
    else{
        document.getElementById("evid0").disabled = false;
        document.getElementById("evid1").disabled = false;
        document.getElementById("evid2").disabled = false;
        document.getElementById("evid3").disabled = false;
    }
}