id=prompt('아이디 입력'); ch09/script.js
if(id=='admin') {
password=prompt('비밀번호 입력');
if(password==='123456') {
location.href="20_login_js.html"
}
else {
location.href="20_error_js.html"
}
}
else {
location.href="20_error_js.html"
}
