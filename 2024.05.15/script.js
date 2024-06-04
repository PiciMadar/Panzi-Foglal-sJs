let hibauzi = ""
let vanehiba = false;
let vendegevek = [];


function datumalap(){
    let ma = new Date();
    let ev = ma.getFullYear();
    let hon = ma.getMonth();
    let nap = ma.getDay()
    document.getElementById("erkezesdateid").value = ev + "."
    if(hon < 10){
        document.getElementById("erkezesdateid").value += "0" + hon + "."
    }
    else{
        document.getElementById("erkezesdateid").value += hon + "."
    }
    if(nap < 10){
        document.getElementById("erkezesdateid").value += "0" + nap + "."
    }
    else{
        document.getElementById("erkezesdateid").value += nap + "."
    }
}
datumalap();





function vizsgalas(){
    vendegevek = []
    hibauzi = ""
    vanehiba = false;
    let fiatalokszama = 0;
    let vendegek = document.getElementById("fonumberdiv").value;
    let erkezes = document.getElementById("erkezesdateid").value;
    let tavozas = document.getElementById("tavozasdateid").value;

    for(let i = 0; i < vendegek; i++){
        vendegevek.push(document.getElementsByClassName("evclass")[i].value);
    }

    for(let i = 0; i < vendegek;i++){
        if(vendegevek[i] < 16)
        {
            fiatalokszama++;
        }
    }
    if(fiatalokszama == 0 && (document.getElementsByClassName("tradiok")[2].checked || document.getElementsByClassName("tradiok")[3].checked)){
        hibauzi += "\nPótágyat csak 16 év alatti vendéggel lehet igényelni"
        vanehiba = true;
    }


    if(erkezes > tavozas){
        hibauzi += "\nKérlek reális dátumot adj meg! 😘"
        vanehiba = true;
    }
    else if(tavozas == erkezes){
        hibauzi += "\nEgy napnál kevesebbet nem lehet igényelni!👌"
        vanehiba = true;
    }

    if(!document.getElementsByClassName("tradiok")[0].checked && !document.getElementsByClassName("tradiok")[1].checked && !document.getElementsByClassName("tradiok")[2].checked && !document.getElementsByClassName("tradiok")[3].checked){
        hibauzi += "\nKérlek válassz egy szoba típust is! 💅 "
        vanehiba = true;
    }

    if(!document.getElementsByClassName("iradiok")[0].checked && !document.getElementsByClassName("iradiok")[1].checked && !document.getElementsByClassName("iradiok")[2].checked){
        hibauzi += "\nKérlek válassz legalább egy ellátást! ✨"
        vanehiba = true;
    }

    if(vanehiba){
        alert(hibauzi)
    }

    else{
        kalkulacio(vendegek);
    }
}





function kalkulacio(vendegek){
    let osszeg = 0;


    let erkezes = new Date(document.getElementById("erkezesdateid").value);
    let tavozas = new Date(document.getElementById("tavozasdateid").value);



    let erkev = erkezes.getFullYear()
    let erkho = erkezes.getMonth()
    let erknap = erkezes.getDay()

    let tavev = tavozas.getFullYear()
    let tavho = tavozas.getMonth()
    let tavnap = tavozas.getDay()

    let erkstring = erkev + "." + erkho + "." + erknap + "."
    let tavstring = tavev + "." + tavho + "." + tavnap + "."
    
    let kulomb = tavozas.getTime() - erkezes.getTime();
    let elteltnapok = Math.round(kulomb / (1000 * 3600 * 24))


    



    // Szoba típusa radio gombok
    let szobatip = "";
    for(let i = 0; i < document.getElementsByClassName("tradiok").length; i++){
        if(document.getElementsByClassName("tradiok")[i].checked){
            switch(i){
                case 0 :
                osszeg += 9000 * elteltnapok
                szobatip = "Egyágyas"
                break;
                case 1 :
                osszeg += 15000 * elteltnapok
                szobatip = "Kétágyas"
                break;
                case 2 :
                osszeg += 18000 * elteltnapok
                szobatip = "Kétágyas, egy pótággyal"
                break;
                case 3 :
                osszeg += 21000 * elteltnapok
                szobatip = "Kétágyas, két pótággyal"
                break;
            }
        }
    }


    // Ellátás radio gombok ellenörzése
    let ellatastip = "";
    for(let i = 0; i < document.getElementsByClassName("iradiok").length; i++){
        if(document.getElementsByClassName("iradiok")[i].checked){
            switch(i){
                case 0:
                    osszeg += 900 * elteltnapok * vendegevek.length;
                    ellatastip = "Reggeli"
                break;
                case 1:
                    osszeg += 2900 * elteltnapok * vendegevek.length;
                    ellatastip = "Félpanzíó"
                break;
                case 2:
                    osszeg += 4900 * elteltnapok * vendegevek.length;
                    ellatastip = "Teljes panzió"
                break;
            }
        }
    }



    // Szolgáltatások checkboxok
    let szolgtip = ""
    for(let i = 0; i < document.getElementsByClassName("cbclass").length - 1; i++){
        if(document.getElementsByClassName("cbclass")[i].checked){
            switch(i){
                case 0:
                    osszeg += 800;
                    szolgtip += "Beltéri medencék; "
                break;
                case 1:
                    osszeg += 800;
                    szolgtip += "Kültéri medencék; "
                break;
                case 2:
                    osszeg += 800;
                    szolgtip += "Szauna; "
                break;
            }

        }
    }
    if(document.getElementsByClassName("cbclass")[3].checked){
        osszeg += 2000;
        szolgtip += "Teljes belépő; "
    }
    
    if(szolgtip == ""){
       szolgtip = "Nem igényelt" 
    }

    tajekoztatas(osszeg,szobatip,vendegek,ellatastip,szolgtip,erkstring,tavstring);
}



function tajekoztatas(osszeg,szobatip,vendegek,ellatastip,szolgtip,erkstring,tavstring){
    let tajuzi = "Kedves Vendégünk!\n\n\nTájékoztatjuk a sikeres foglalásról.\n\n\n"
    tajuzi += "\nÉrkezés: " + erkstring + "\nTávozás: " + tavstring
    tajuzi += "\nSzoba típusa: " + szobatip
    tajuzi += "\nVendégek száma: " + vendegek
    tajuzi += "\nEllátás: " + ellatastip
    tajuzi += "\nIgénylet szolgálatások: " + szolgtip
    tajuzi += "\nTeljes összeg: " + osszeg + "Ft."
    tajuzi += "\n\nKöszönjük megrendelését!"
    alert(tajuzi)
}






//Uncsi kizárásos fügvény, amit nem tudtam hogyan oldjak meg ciklussal, szóval egyesével tettem


function teljesbelepo(){
    if(document.getElementsByClassName("cbclass")[3].checked)
    {
        document.getElementsByClassName("cbclass")[0].disabled = true;
        document.getElementsByClassName("cbclass")[0].checked = false;
        document.getElementsByClassName("cbclass")[1].disabled = true;
        document.getElementsByClassName("cbclass")[1].checked = false;
        document.getElementsByClassName("cbclass")[2].disabled = true;
        document.getElementsByClassName("cbclass")[2].checked = false;
    }
    else
    {
        document.getElementsByClassName("cbclass")[0].disabled = false;
        document.getElementsByClassName("cbclass")[1].disabled = false;
        document.getElementsByClassName("cbclass")[2].disabled = false;
    }
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
