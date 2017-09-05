$("#click-to-update").on("click", function(e){
  $.ajax("/endpoint", {
      data: {
        userName: $("#send-this-to-server").val()
      },
      success: function(returnData){
        $("#update-this").text(returnData);
      }
    }
  )
});
