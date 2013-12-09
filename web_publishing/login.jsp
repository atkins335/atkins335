 <%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr">
<title>신나는 직장생활 두비두바</title>
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" href="/html/hsample/css/jquery.mobile-1.3.2.min.css" />
<link rel="stylesheet" href="/html/hsample/css/common.css" />
<script src="/html/hsample/js/jquery-1.8.3.min.js"></script>
<script src="/html/hsample/js/jquery.mobile-1.3.2.min.js"></script>
</head>
<body>

<div id="warp" data-role="page">

	<header class="logintitle">
		<h1>신나는 직장생활 두비두바</h1>
	</header>

	<div id="container" class="warp_doc conlogin">
		<section class="mcont">
			<h2>Login on Application</h2>
			<fieldset>
				<legend class="blind">로그인</legend>
				<span class="grp_txinput">
					<label for="id" class="blind">아이디</label><input id="id" type="text" title="아이디" name="id" placeholder="UserName" class="txbox">
					<input class="btn_login" type="submit" value="Login" title="Login">
				</span>
				<span class="grp_btn">
				<button id="" type="button" class="btn_gohome"><span>Home</span></button>
				</span>
				<span class="input_ckbox"> 
					<input type="checkbox" class="ckbox" checked="true" value="" id="autologin_setting" name="">
					<label for="autologin_setting" class="tx_autologin">자동로그인 설정</label>
				</span>
			</fieldset>
			<p class="logintip"> 로그인을 하지 않으면 메뉴사용에 제한이 있음을 알려드립니다.</p>
		</section>
	</div><!-- //container -->

	<footer>
		<address>copyright &copy; soundpost</address>
	</footer>

</div><!-- /page -->

</body>
</html>