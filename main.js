name_butt_pressable = true;

file_name = "";

problemi = [];

soluzioni = [];

function start(){
    console.log("started")

    but_prob_s = document.getElementById("tipo_but")
    but_solu_s = document.getElementById("solu_but")
    but_name_s = document.getElementById("name_but")

    but_prob_s.disabled = true
    but_solu_s.disabled = true
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

    problemi.push(prob);
    
    runList(prob, prob)

    prob.value = ""

    console.log(problemi)
}
function solu_press(){
    console.log("solu press!")
    sol_txt = document.getElementById("solu_prob_tx")

}
function name_press(){
    
    console.log("name press!")

    name_txtbox = document.getElementById("file_name_tx")
    
    butt_nm = document.getElementById("name_but")

    butt_nm.disabled = true;

    file_name = name_txtbox.value;

    console.log(file_name)

    but_prob_s.disabled = false
    but_solu_s.disabled = false
}

