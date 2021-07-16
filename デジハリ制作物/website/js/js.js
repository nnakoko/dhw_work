// $.ajax({
//     url: 'https://note.mu/api/v1/notes?urlname=nemukina',
//     type: 'GET',
 
//     //通信状態に問題がないかどうか
//     success: function(data) {
 
        
 
//     },
//     //通信エラーになった場合の処理
//     error: function(err) {
 
//         //エラー処理を書く
 
//     }
// });

$('iframe').click(function(){
    var ifm = $('iframe');
        ifm.not(this).prop('disabled', true);
});

// var xhr = new XMLHttpRequest();
 
// xhr.open('GET', 'https://note.mu/api/v1/notes?urlname=nemukina');
// xhr.send();
 
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         console.log( xhr.responseText );
//     }
// }

$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').slideUp();
    } else {
      $(this).addClass('active');
      $('nav').slideDown();
    }
});