(function($) {
   $().ready(function() { 

   			/*--- busca ---------------------------------------------------------------------------*/
   			$('header #block-views-exp-search-page-page form label').text('Digite o modelo que você procura');


   			/*--- carrinho mobile ------------------------------------------------------------------*/

   			/*$('header .carrinho').click(function(){
   				$('header .carrinho #block-commerce-cart-cart .cart-empty-block').toggle();
   				$('header .carrinho #block-commerce-cart-cart .cart-contents').toggle();
   			})*/


   			$('header .carrinho #block-commerce-cart-cart').click(function(){
   				$('header .carrinho #block-commerce-cart-cart .cart-empty-block').toggle();
   				$('header .carrinho #block-commerce-cart-cart .cart-contents').toggle();
   			})

   			/* exibe o conteudo da cesta no mouseover */
   			$('header .carrinho #block-commerce-cart-cart').mouseenter(function(){
   				$('header .carrinho #block-commerce-cart-cart .cart-empty-block').show();
   			});
   			$('header .carrinho #block-commerce-cart-cart').mouseleave(function(){
   				$('header .carrinho #block-commerce-cart-cart .cart-empty-block').hide();
   			});
   			$('header .carrinho #block-commerce-cart-cart').mouseenter(function(){
   				$('header .carrinho #block-commerce-cart-cart .cart-contents').show();
   			});
   			$('header .carrinho #block-commerce-cart-cart').mouseleave(function(){
   				$('header .carrinho #block-commerce-cart-cart .cart-contents').hide();
   			});


   			


   			/*--- home ------------------------------------------------------------------------------*/	
   			/* banners home */
   			$('.front .view-banners-destaque-home .item').unwrap();
			$('.front .view-banners-destaque-home .item-1').addClass('active');
			

			$('.front #carousel-depoimentos .item').unwrap();
			$('.front #carousel-depoimentos .item-1').addClass('active');

			
			/*--- checkout --------------------------------------------------------------------------------*/
			/* traducoes forcadas */
			$('.page-checkout #commerce-shipping-service-ajax-wrapper .fieldset-legend').replaceWith('Opções de Envio');



			$('.page-checkout-payment #principal h1 , .page-checkout-payment #principal .content').hide();
			$('.page-checkout-payment #principal').append('<h3>Aguarde, você será redirecionado para realizar o pagamento.</h3><br/><br/><br/><img src="http://shop.uzlet.com.br/sites/all/themes/uzlet2014/images/loading.gif" />');
			$('.page-checkout-payment #principal form').submit();


			/* traducoes forcadas */
			/*$('.page-checkout .view-footer .component-title').replaceWith('<td class="component-title">Total da Venda</td>');			
			$('.page-checkout .form-item-commerce-fieldgroup-pane--group-info-conta-recebimento-field-observacoes-und-0-value').append('<span class="aviso">* A conta bancária informada deverá ser de propriedade do dono da conta no Uzlet.</span>');
			$('.page-checkout label[for="edit-commerce-fieldgroup-pane-group-forma-recebimento-field-forma-de-recebimento-und-paypal"]').empty();
			$('.page-checkout label[for="edit-commerce-fieldgroup-pane-group-forma-recebimento-field-forma-de-recebimento-und-pagseguro"]').empty();*/
			
			/* opcao de pagamento pelo pagseguro */
			/*$('#edit-commerce-fieldgroup-pane-group-forma-recebimento-field-forma-de-recebimento-und-pagseguro').click(function(){
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-email-do-pagseguro').show();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-email-paypal').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-banco').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-agencia').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-conta-corrente').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-observacoes').show()
			});*/
			/* opcao de pagamento pelo paypal */
			/*$('#edit-commerce-fieldgroup-pane-group-forma-recebimento-field-forma-de-recebimento-und-paypal').click(function(){
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-email-do-pagseguro').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-email-paypal').show();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-banco').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-agencia').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-conta-corrente').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-observacoes').show()
			});*/
			/* opcao de pagamento por conta corrente */
			/*$('#edit-commerce-fieldgroup-pane-group-forma-recebimento-field-forma-de-recebimento-und-contacorrente').click(function(){
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-email-do-pagseguro').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-email-paypal').hide();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-banco').show();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-agencia').show();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-conta-corrente').show();
				$('.page-checkout #edit-commerce-fieldgroup-pane-group-forma-recebimento-field-observacoes').show()
			});*/
			
   			/*--- perfil do usuario ------------------------------------------------------------------------------*/			
			$( ".page-user-me-edit #edit-profile-main-field-cpf-und-0-value" ).attr( "disabled", true);  
			/*--- pagina de uma venda --------------------------------------------------------------------------*/
			/* traducoes forcadas */
			$('.page-vendas #principal .commerce-price-formatted-components td.component-title').replaceWith('<td class="component-title">Total da Venda</td>');
			$('.page-vendas #principal table th.views-field-field-observacoes').prepend('Observações');
			/*--- editar uma venda especifica -----------------------------------------------------*/
			$('.page-admin-commerce-orders-edit #edit-commerce-line-items-und-actions-line-item-add').val('Adicionar Produto')
			
			/*--- login --------------------------------------------------------------------------------*/
			$('.toboggan-unified').addClass('row')
   			$('.page-user #login-form').addClass('col-md-6 col-md-push-6').prepend('<h2>Eu já tenho uma conta</h2>');
   			$('.page-user #register-form').addClass('col-md-6 col-md-pull-6').prepend('<h2>Eu quero criar uma conta</h2>');;
   			$('#edit-profile-main-field-cpf-und-0-value').mask('999.999.999-99');
   			$('#edit-profile-main-field-telefone-und-0-value').mask('(99)9999-9999?99');
   			$('#edit-profile-main-field-cep-und-0-value').mask('99999-999');			
   			$('.page-user select#edit-profile-main-field-estado2-und option[value=\"_none\"]').text("Selecione um Estado"); 
   			
			
		
    });
})(jQuery);