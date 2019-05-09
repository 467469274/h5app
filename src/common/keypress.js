import { Toast } from 'vant';
export default function () {
  let keyCode = event.keyCode;
  if ((keyCode >= 48 && keyCode <= 57))
  {
    event.returnValue = true;
  } else {
    Toast('请输入正整数')
    event.returnValue = false;
  }
}
