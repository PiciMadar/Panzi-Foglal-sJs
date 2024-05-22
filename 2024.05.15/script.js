let hibauzi = ""
let vanehiba = false;

function vizsgalas(){
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

    alert(hibauzi)
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