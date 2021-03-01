// Après avoir chargé le DOM, exécutez le traitement dans function ().
$(document).ready(function(){

  function score_indicate(){

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                        ];
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    $("#sum_indicate").text(sum);

  };


  function average_indicate(){

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                        ];

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    let aveg = sum/5;

    $("#average_indicate").text(aveg);

  };

  function get_achievement(){

    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)

    if ( averageIndicate >= 80){
      return "A";
      // もし「averageIndicate」が60以上なら"B"を返します。
    }
    else if ( averageIndicate >= 60) {

      return "B";
    }
      else if ( averageIndicate >= 80){
        return "C";
      }

     else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // // 変数「number」に入力した教科の数を代入します。
    let number = subject_points.length;

    let judge = "Passer";
    for(let i=0; i<number; i++){
      if(subject_points[i]<60){
        judge= "Echec";
        break;
      }
    }
    return judge;

  };
  // 最終的なジャッジのロジックを作ります。
  function judgement(subject_points){

    let achievement = get_achievement(subject_points);

    let pass_or_failure = get_pass_or_failure(subject_points);

   $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Ton niveau${achievement}で${pass_or_failure}です</label>`);
  };


  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    average_indicate();
  });
  // 「Rang」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // 「Jugement」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // 「Juge final」(id="btn-declaration")ボタンを押したら「function judgement()」が出力される処理です。
  $('#btn-declaration').click(function() {
  $("#declaration").text(judgement());

  });
});
