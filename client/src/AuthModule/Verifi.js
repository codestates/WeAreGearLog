export const emailCheck = (email) => {
  let regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email !== '' && email !== 'undefined' && regex.test(email);
};

export const passwordCheck = (password) => {
  let checkPass =
    /^(?=.*[a-zA-Z])(?=.*[\~\․\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\|\\\;\:\\'\"\<\>\,\.\?\/])(?=.*[0-9]).{6,21}$/;

  if (checkPass.test(password)) {
    return true;
  } else {
    return false;
  }
};
export function nickCheck(str) {
  if (str.length < 2 || str.length > 12) {
    alert('2~12자의 한글, 영문, 숫자만 사용할 수 있습니다.');
    return false;
  }

  var chk = /[0-9]|[a-z]|[A-Z]|[가-힣]/;

  for (var i = 0; i <= str.length - 1; i++) {
    if (chk.test(str.charAt(i))) {
    } else {
      alert('2~12자의 한글, 영문, 숫자만 사용할 수 있습니다.');
      return false;
    }
  }

  return true;
}
