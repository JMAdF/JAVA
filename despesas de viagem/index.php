<?php
error_reporting(0);
    $precos = array (0, 65, 85, 70); // preços dos hoteis
    $preco = '';
    $hotelPHP = $_GET['hotel'];
    $chegadaPHP = $_GET['chegada'];
    $partidaPHP = $_GET['partida'];
    $data1 = strtotime($chegadaPHP);
    $data2 = strtotime($partidaPHP);
$dias = ($data2 - $data1)/86400; // o resultado da subtração a dividir pelo número total de segundos de um dia, para dar o resultado em dias e não em segundos
    switch ($hotelPHP) {
        case 1:
            $preco = $precos[1];
            break;
        case 2:
            $preco = $precos[2];
            break;
        case 3:
            $preco = $precos[3];
            break; 
    }
    $total = $dias * $preco;
?>
<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Simulação de despesas de viagem</title>
</head>
<body>
    <div class="caixa1">
        <h1>Calcular despesas de viagem</h1>
        <div class="hotel-lingua">
         <form method="get" action="">
         <!-- selecionar hotel -->
         <select name="hotel" id="hotel"
        onChange='carregarHotel(this.value);'>
            <option value="0">Selecione um hotel</option>
            <option value="1">Nome do hotel</option>
            <option value="2">Nombre del hotel</option>
            <option value="3">Hotel's name</option>
        </select>
         <!-- campo que exibe a lingua materna -->
         <input type="text" id="lingua" placeholder="Língua falada" disabled>
        <br><br>
         <!-- data de chegada e de partida -->
         <p class="para-input">Data de chegada:</p> 
         <input type="date" name="chegada" id="chegada">
         <p class="para-input">Data de partida:</p> 
         <input type="date" name="partida" id="partida"> <br><br>
        <button type="submit" class="btn btn-primary">Calcular</button>
         <!-- campo que mostra o preço total -->
        <p id="preco-total">Preço total: <?php echo $total; ?> €.</p>
 </form>

 <script>
    function carregarHotel(valor) {
        var v = document.getElementById("hotel");
        var lingua = v.value;
        switch (lingua) {
          case "1":
            document.getElementById("lingua").value = "Português";
            document.getElementById("lingua").disabled=false;
            break;
          case "2":
            document.getElementById("lingua").value = "Espanhol";
            document.getElementById("lingua").disabled=false;
            break;
          case "3":
            document.getElementById("lingua").value = "Inglês";
            document.getElementById("lingua").disabled=false;
            break;
} }
</script>
</body>
</html>