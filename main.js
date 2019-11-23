 $("#sendMail").on("click", function() {
    'use strict'
    var email = $("#email").val().trim();
     var name = $("#name").val().trim();
     var phone = $("#phone").val().trim();
     var message = $("#message").val().trim();
    if (email.length=="")
        {
           $("#errorMes").text("Введите email"); 
            return false; 
        }
     else if (name.length=="")
        {
           $("#errorMes").text("Введите name"); 
            return false; 
        }else if (phone.length=="")
        {
           $("#errorMes").text("Введите phone"); 
            return false; 
        }else if (message.length<5)
        {
           $("#errorMes").text("Введите message"); 
            return false; 
        }  
     $("#errorMes").text("");
     $.ajax({
         url:'ajax/mail.php',
         type:'POST',
         cashe:false,
         data:{'name': name,'email': email, 'phone':phone, 'message': message}  ,
         dataType:'html',
         beforeSend: function(){
             $("#sendMail").prop("disabled",true);
         },
         success: function(data){
             if (!data)
                 alert("Были ошибки, сообщение не отправлено!");
        else  $('#mailForm').trigger("reset"); 
              $("#sendMail").prop("disabled",false);
         }
     })
});