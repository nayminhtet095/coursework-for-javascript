let a = 100
let b = 50
let answer = +prompt ('If a =100 and b = 50, Choose the correct answer of a-b?, (30), (40) and (50)' , )

switch (answer) {
    case  30:
        alert( 'wrong' );        
        break;
    case  40:
        alert('not enough');
        break;
    case 50:
        alert('yes', "That is correct");
        break;
    default:
        alert('out of range');
        break;
}
