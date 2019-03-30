name_butt_pressable = true;

let file_name = "";

let problemi = [];

let soluzioni = [];

let text_comp = ["ciao", "mondo"]


//genera il file lst
function genera_file(){
    var file = new Blob(text_comp, {type: "application/octet-stream"})

    console.log("file generato: " + file)
}

function start(){
    console.log("started")

    but_prob_s = document.getElementById("tipo_but")
    but_solu_s = document.getElementById("solu_but")
    but_name_s = document.getElementById("name_but")

    but_prob_s.disabled = true
    but_solu_s.disabled = true

    genera_file()
}

function runList(arg_1, arg_2){
    var select = document.getElementById('spinner_tip');
    select.options[select.options.length] = new Option(arg_1, arg_2);
}

function prob_press(){
    pro_txt = document.getElementById("tipo_prob_tx") 

    console.log("prob press!");
    console.log(pro_txt)
    
    prob = pro_txt.value;

    pro_txt.value = ""

    if(prob!= ""){
        problemi.push(prob);
        
        runList(prob, prob)

        prob.value = ""

        arr = []

        soluzioni.push(arr)
    
        console.log(soluzioni)
        console.log(problemi)

        if(but_solu_s.disabled){
            but_solu_s.disabled = false
        }
    }
    else{
        console.log("vuoto, non aggiunto all'array")
    }
}
function solu_press(){
    
    console.log("solu press!")
    
    sol_txt = document.getElementById("solu_prob_tx")
    spinn = document.getElementById("spinner_tip")
    
    soluzione = sol_txt.value
    ind = spinn.selectedIndex
    
    if(soluzione != ""){

        soluzioni[ind].push(soluzione)

        sol_txt.value = ""

        console.log("indice selez:  " + ind)
        console.log(soluzioni)
    }
    else{
        console.log("soluzione non aggiunta contenuto vuoto")
    }


}
function name_press(){
    
    console.log("name press!")

    name_txtbox = document.getElementById("file_name_tx")
    
    butt_nm = document.getElementById("name_but")

    butt_nm.disabled = true;

    file_name = name_txtbox.value;

    console.log(file_name)

    but_prob_s.disabled = false
    //but_solu_s.disabled = false
}

