 <%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr">
<title>�ų��� �����Ȱ �κ�ι�</title>
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" href="/html/hsample/css/jquery.mobile-1.3.2.min.css" />
<link rel="stylesheet" href="/html/hsample/css/common.css" />
<script src="/html/hsample/js/jquery-1.8.3.min.js"></script>
<script src="/html/hsample/js/jquery.mobile-1.3.2.min.js"></script>
</head>
<body>

<div id="warp" data-role="page">

	<header class="logintitle">
		<h1>�ų��� �����Ȱ �κ�ι�</h1>
	</header>

	<div id="container" class="warp_doc conlogin">
		<section class="mcont">
			<h2>Login on Application</h2>
			<fieldset>
				<legend class="blind">�α���</legend>
				<span class="grp_txinput">
					<label for="id" class="blind">���̵�</label><input id="id" type="text" title="���̵�" name="id" placeholder="UserName" class="txbox">
					<input class="btn_login" type="submit" value="Login" title="Login">
				</span>
				<span class="grp_btn">
				<button id="" type="button" class="btn_gohome"><span>Home</span></button>
				</span>
				<span class="input_ckbox"> 
					<input type="checkbox" class="ckbox" checked="true" value="" id="autologin_setting" name="">
					<label for="autologin_setting" class="tx_autologin">�ڵ��α��� ����</label>
				</span>
			</fieldset>
			<p class="logintip"> �α����� ���� ������ �޴���뿡 ������ ������ �˷��帳�ϴ�.</p>
		</section>
	</div><!-- //container -->

	<footer>
		<address>copyright &copy; soundpost</address>
	</footer>

</div><!-- /page -->

</body>
</html>