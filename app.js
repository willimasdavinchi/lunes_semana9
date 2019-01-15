var rates = {}
$(function() {

  $.ajax({
    method: 'GET',
    url: 'https://mindicador.cl/api'
  }).then(function(data) {
  	rates = data;
    $('.indicador.usd').html(rates.dolar.valor);
    $('.indicador.euro').html(rates.euro.valor);
    $('.indicador.UF').html(rates.uf.valor);
    $('.indicador.UTM').html(rates.utm.valor);
  })

  	$('#value').keyup(function(event) {
  		data = $.trim($("#value").val());
  		$('.exchange.usd').html(data / rates.dolar.valor);
  		$('.exchange.euro').html(data / rates.euro.valor);
  		$('.exchange.UF').html(data / rates.uf.valor);
  		$('.exchange.UTM').html(data / rates.utm.valor);
  	})

})
