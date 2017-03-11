$(function(){
  var value = [[],[]],
  i=0;

  $(".num").click(function(event) {
    /* Act on the event */
    console.log($(this).val());
    value[i].push($(this).val());
    console.log(value[i]);
    
  });
  $(".operator").click(function(event) {
    /* Act on the event */
    console.log("operator "+ $(this).val() );
    
    cal(value[0].join(""),value[1].join(""),$(this).val())
  
    if (i===0) {
      value[1]=[];
      i=1;
    }else {
      value[0]=[];
      i=0;
    }
  
  
  });
})


function cal (a,b,operator){
  results = a + operator + b ;
  console.log(results);
}
