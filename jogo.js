var rodada=1;
var matriz_jogo=Array(3);

matriz_jogo['a']=Array(3);
matriz_jogo['b']=Array(3);
matriz_jogo['c']=Array(3);

matriz_jogo['a'][1]=0;
matriz_jogo['a'][2]=0;
matriz_jogo['a'][3]=0;

matriz_jogo['b'][1]=0;
matriz_jogo['b'][2]=0;
matriz_jogo['b'][3]=0;

matriz_jogo['c'][1]=0;
matriz_jogo['c'][2]=0;
matriz_jogo['c'][3]=0;



$(document).ready(function(){
  
  $('#btn_iniciar_jogo').click(function(){
  	//Validando os jogadores
  	if($('#entrada_apelido_jogador_1').val()==""){
  		alert("Preencha o Jogador 1");
  		return false;
  	}
  	if($('#entrada_apelido_jogador_2').val()==""){
  		alert("Preencha o Jogador 2");
  		return false;
  	}
     //Controla Vizualizãções
     $("#pagina_inicial").hide();
     $("#palco_jogo").show();
     //alert($('#entrada_apelido_jogador_1').val());//A função val pega o valor que foi passado como parametro por meio do html
     $('#jogador_1').html($('#entrada_apelido_jogador_1').val());
     $('#jogador_2').html($('#entrada_apelido_jogador_2').val());
  });

  $('.jogada').click(function(){
     var id_campo_clicado= this.id;//This id faz um referencia ao id do elemento clicado, ou seja ele é passado para essa variavel que criamos.
     jogada(id_campo_clicado);
     $('#'+id_campo_clicado).off();
  });
  function jogada(id){
    var icone='';
    var ponto=0;
    if((rodada % 2)==1){
        icone='url("imagens/marcacao_1.png")';
        ponto=-1;
    }else{
    	icone='url("imagens/marcacao_2.png")';
    	ponto=1;
    }
    rodada++;
    $('#'+id).css('background-image',icone);

    var linha_coluna=id.split('-');//transforma a informação em array, com base em uma diretiva, nesse caso estamos usando o traço como base.
    matriz_jogo[linha_coluna[0]][linha_coluna[1]]=ponto;
    verificar_combinacao();
  }
  function verificar_combinacao() {
  	//Verificando na primeira linha horizontal
  	var pontos=0;
  	for(var i=1; i<=3;i++){
  		pontos=pontos+matriz_jogo['a'][i];
  	}
  	verificar_ganhador(pontos);
    //Verificando na segunda linha horizontal
    pontos=0;
  	for(var i=1; i<=3;i++){
  		pontos=pontos+matriz_jogo['b'][i];
  	}
  	verificar_ganhador(pontos);
    //Verificando na terceira linha horizontal
    pontos=0;
  	for(var i=1; i<=3;i++){
  		pontos=pontos+matriz_jogo['c'][i];
  	}
  	verificar_ganhador(pontos);
    //Verificar na Vertical
  	for(var l=1;l<=3;l++){
      pontos=0;
      pontos=pontos+matriz_jogo['a'][l];
      pontos=pontos+matriz_jogo['b'][l];
      pontos=pontos+matriz_jogo['c'][l];
      verificar_ganhador(pontos);
  	}
  	//Verificando na Diagonal
  	for(var d=1;d<2;d++){
  		pontos=0;
  		pontos=pontos+matriz_jogo['a'][d];
  		pontos=pontos+matriz_jogo['b'][d+1];
  		pontos=pontos+matriz_jogo['c'][d+2];
        verificar_ganhador(pontos);
        pontos=0;
        pontos=pontos+matriz_jogo['a'][d+2];
  		pontos=pontos+matriz_jogo['b'][d+1];
  		pontos=pontos+matriz_jogo['c'][d];
  		verificar_ganhador(pontos);
  	}
  }
  function verificar_ganhador(p){
      if(p==-3){
     	var jogador_1=$('#entrada_apelido_jogador_1').val();
        alert(jogador_1 + " é o Vencedor");
        $('.jogada').off();//Retira o Click do evento
     }else if(p==3){
     	var jogador_2=$('#entrada_apelido_jogador_2').val();
        alert(jogador_2 + " é o Vencedor");
        $('.jogada').off();//Retira o Click do evento
     }

     

  }
});