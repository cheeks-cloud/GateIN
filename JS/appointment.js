$(document).ready(function(){
  $('.radio').click(function(){
    console.log($('input[name="gridRadios"]:checked').val())
    
      var valu= ($('input[name="gridRadios"]:checked').val());
      if (valu==='yes'){
        $('.car').show();
      }
      else{
        $('.car').hide();
      }
      })

      $('#book').click(function(){
        var fname =$('#fullName').val()
        var id= $('#ID').val()
        var date= $('#date').val()
        var timeIn=$('#timeIn').val()
        var timeOut=$('#timeOut').val()
        var car=$('#numberPlate').val()
        

      })









})
