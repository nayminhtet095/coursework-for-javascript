let examMark = prompt ('Input your examMark, only number', '');
if (examMark == 50) {
  alert( 'Your exam is pass with moderation LoL' );
} else if (examMark > 50) {
  alert( 'Your exam is pass' );
} else if (examMark < 50) {
  alert( 'Your exam is fail' );
} else {
    alert( 'Please input your examMark, only number');
  }