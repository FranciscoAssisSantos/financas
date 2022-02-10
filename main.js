//variaveis do imput
alert('ola');
var mes_referente = window.document.querySelector('#mes_referente');
var aluguel = window.document.querySelector('#aluguel');
var check_especial = window.document.querySelector('#check_especial');
var faculdade = window.document.querySelector('#faculdade');
var pernambucanas = window.document.querySelector('#pernambucanas');
var inergia = window.document.querySelector('#inergia');
var bradescard = window.document.querySelector('#bradescard');
var taxa_de_obra = window.document.querySelector('#taxa_de_obra');
var parcela_casa = window.document.querySelector('#parcela_casa');
//


/*
alert(mes_referente);
alert(aluguel);
alert(check_especial);
alert(faculdade);
alert(pernambucanas);
alert(inergia);
alert(bradescard);
alert(taxa_de_obra);
alert(parcela_casa);
*/
function set_dados(){
    var mes = mes_referente.value;
    var alug = aluguel.value;
    var ckeck = check_especial.value;
    var facul = faculdade.value;
    var pernamb = pernambucanas.value;
    var inerg = inergia.value;
    var bradesc = bradescard.value;
    var taxa = taxa_de_obra.value;
    var casa = parcela_casa.value;
   
    
    alert(mes);
    alert(alug);
    alert(ckeck);
    alert(facul);
    alert(pernamb);
    alert(inerg);
    alert(bradesc);
    alert(taxa);
    alert(casa);





}


/*
           function hab_botao(){
                window.document.getElementById('btnSomar').disabled=false;
            }

            // ainda falta pegar o valor do input calcular  e subtrair pelo valor final da tabela e mostrar na label reposta
            function subtrair(){
                let tbnsomar = window.document.querySelector('#btnSomar');
                let valor_convert =
                
                tbnsomar.addEventListener('click',function(){
                    var valor1= window.document.querySelector('#inputSomar').value;
                    //let valor1= window.document.querySelector('#inputSomar').value;
                    var valores = document.querySelectorAll("table#tab_consulta tr td#soma_total");
                    for (i = 0; i < valores.length; i++) {
                    console.log(valores[i].innerHTML);
                
                    var valor2 = (valores[i].innerHTML);//resultado da tabela td soma_total
                    
                        }//fim do for

                    //alert(valor1);
                    //alert(valor2);
                    var conversao = valor1.toLocaleString();
                    let result = parseFloat(conversao) - parseFloat(valor2);
                    let resultado = result.toLocaleString();
                    //alert(result);
                   let display_result = window.document.querySelector('#resultado').innerHTML='R$'+ resultado;
                      if(display_result == "R$NaN"){
                        window.document.querySelector('#resultado').innerHTML='R$ 0,00';
                      }
                    
                    
                });//fim da funcao subtrair
            
            }

            subtrair();
            */


            function botao_over(){
                window.document.querySelector('#btnEnviar').style.backgroundColor="#d7d8c5"; 

            }


            function botao_oult(){
                window.document.querySelector('#btnEnviar').style.backgroundColor="#c2c2c2"; 
                
            }
                
            /*
            function open_calc(){
                document.querySelector('#box_soma').style.display="block";
                window.document.getElementById('btnSomar').disabled=true;////////ESTE ELEMNETO E SOMENTE PARA TESTE(DESABILITA O BOTAO)
            }
            function fechar_jan(){
                document.querySelector('#box_soma').style.display="none";
                //esta funcao é para zerar o input ao fechar de somar
                window.document.querySelector('#inputSomar').value="";
                window.document.querySelector('#resultado').innerHTML='Resultado';
            }

            function exit_msg_cadastrado(){
                let acao_fecha_msg = document.querySelector('#form');
                acao_fecha_msg.addEventListener('click',function(){
                    
                    window.document.querySelector('#cadastrado').style.display="none";
                    window.document.querySelector('#box_container').style.marginTop="-70px";
                })
            }

            exit_msg_cadastrado();
*/
