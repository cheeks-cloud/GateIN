$(document).ready(function(){
  $('.radio').click(function(){
    
      var valu= ($('input[name="gridRadios"]:checked').val());
      if (valu==='yes'){
        $('#car').show();
      }
      else{
        $('#car').hide();
      }
      })
      

      $('#book').click(function(){
        var fname =$('#fullName').val()
        var id= $('#ID').val()
        var date= $('#date').val()
        var timeIn=$('#timeIn').val()
        var timeOut=$('#timeOut').val()
        var car=$('#numberPlate').val()

        
        localStorage.setItem('fullName',fname)
        localStorage.setItem('Id',id)
        localStorage.setItem('Dates',date)
        localStorage.setItem('tIn',timeIn)
        localStorage.setItem('tOut',timeOut)
        localStorage.setItem('plate',car)

        alert('Appointment Set')
         
        
      })

      $('#cancel').click(function(){
        localStorage.removeItem(Id)
        localStorage.removeItem(fullName)
        localStorage.removeItem(Dates)
        localStorage.removeItem(tIn)
        localStorage.removeItem(tOut)
        localStorage.removeItem(plate)

        alert('Appointment cancelled')
      })









})
