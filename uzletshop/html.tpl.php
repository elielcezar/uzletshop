<!DOCTYPE html>
<html>
	<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php if ($is_front):  ?>
	
	
	  <meta name="distribution" content="Global" />
      <meta name="robots" content="all" />
      <meta name="language" content="pt-br" />
      <meta name="title" content="Uzlet" />
      <meta name="description" content="O aparelho que não é mais útil para você ainda pode ter um bom valor de revenda. Receba uma proposta pelo seu aparelho agora mesmo!" />
      <meta name="keywords" content="uzlet, celular, smartphone, venda celular, compra celular, iphone, venda iphone, compra iphone, ceular usado, smartphone usado" />
	
	<meta property="fb:admins" content="569142923"/>
	<meta property="fb:app_id" content="266106020219698"/>   
	<meta property="og:title" content="UZLET"/>
	<meta property="og:description" content=""/>
	<meta property="og:image" content="<?php print $GLOBALS['base_path']; ?>sites/all/themes/uzletshop/images/avatar.png"/> 
	<meta property="og:type" content="website" /> 
	<link rel="image_src" href="<?php print $GLOBALS['base_path']; ?>sites/all/themes/uzletshop/images/avatar.png" />
	
<?php endif; ?>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php print $styles; ?>
<?php print $scripts; ?>
<link href="<?php print $GLOBALS['base_path']; ?>sites/all/themes/uzletshop/assets/css/bootstrap.min.css" rel="stylesheet">

 
 <link href="<?php print $GLOBALS['base_path']; ?>sites/all/themes/uzletshop/fancybox/jquery.fancybox.css?v=2.1.5" media="screen" rel="stylesheet" />
       




<!--[if lt IE 7]>
	<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome-ie7.min.css" rel="stylesheet">
	<![endif]-->
<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
<![endif]-->
<!-- Le fav and touch icons -->
<link rel="shortcut icon" href="<?php print $GLOBALS['base_path']; ?>sites/all/themes/uzletshop/images/favicon.png">
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1483155708608922',
      xfbml      : true,
      version    : 'v2.1'
    });
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
</body>
</html>