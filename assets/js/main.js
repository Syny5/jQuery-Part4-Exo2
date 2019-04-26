$(function(){
  $('#submit').on('click', function(){
    var note1 = Number($('#note1').val());
    var note2 = Number($('#note2').val());
    var note3 = Number($('#note3').val());
    var note4 = Number($('#note4').val());
    var note5 = Number($('#note5').val());
    console.log(note1);
    console.log(note2);
    console.log(note3);
    console.log(note4);
    console.log(note5);
    var moyenne = (note1 + note2 + note3 + note4 + note5) / 5;
    if (moyenne < 10){
      alert('Vous avez ' + moyenne + ' de moyenne. Gros naze.');
    }
    else if (moyenne < 13 && moyenne >= 10) {
      alert('Vous avez ' + moyenne + ' de moyenne. Feignasse.');
    }
    else if (moyenne < 16 && moyenne >= 13){
      alert('Vous avez ' + moyenne + ' de moyenne. Beau gosse.');
    }
    else if (moyenne < 20 && moyenne >= 16){
      alert('Vous avez ' + moyenne + ' de moyenne. Lèche-cul.');
    }
    else if (moyenne == 20){
      alert('Vous avez ' + moyenne + ' de moyenne. Putain de no-life.');
    }
    else {
      alert('Attention, certains de vos champs ne sont pas valides. Veuillez indiquer un nombre entre 0 et 20.');
      $('.notes').css('border', 'solid red 3px');
    }
  });
});
