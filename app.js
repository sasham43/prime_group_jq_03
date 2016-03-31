$(function(){
  console.log("jquery loaded");

  $(".group").hide();

  var studentArray = [
    {name: "Lisa", value: Math.random()},
    {name: "Max", value: Math.random()},
    {name: "Kyle", value: Math.random()},
    {name: "Suzanna", value: Math.random()},
    {name: "Chris R.", value: Math.random()},
    {name: "Jessica", value: Math.random()},
    {name: "Jennifer", value: Math.random()},
    {name: "Taylor", value: Math.random()},
    {name: "Chris T.", value: Math.random()},
    {name: "Erika", value: Math.random()},
    {name: "Sasha", value: Math.random()},
    {name: "Amy", value: Math.random()},
    {name: "Russ", value: Math.random()},
    {name: "Libby", value: Math.random()},
    {name: "Courtney", value: Math.random()},
    {name: "Peter", value: Math.random()},
    {name: "Cari", value: Math.random()},
    {name: "Oliver", value: Math.random()},
    {name: "Travis", value: Math.random()}
  ];

  var group1 = [];
  var group2 = [];
  var group3 = [];
  var group4 = [];
  var group5 = [];
  var group6 = [];
  var group7 = [];
  var group8 = [];
  var group9 = [];
  var group10 = [];
  var numGroups = 0;
  // grab number from button click
  //var numGroups = 2;
  $(".numbers").on("click", function() {
  numGroups = parseInt($(this).text());
  console.log(numGroups);
});


  // console.log(studentArray.length);
  // console.log(randomizeArray(studentArray));

  // console.log('iteration 1',randomizeArray(studentArray));
  // console.log('iteration 1 student', studentArray);
  // console.log('iteration 2',randomizeArray(studentArray));
  // console.log('iteration 3',randomizeArray(studentArray));


  $(document).on("click", "#shuffle", function() {
     group1 = [];
     group2 = [];
     group3 = [];
     group4 = [];
     group5 = [];
     group6 = [];
     group7 = [];
     group8 = [];
     group9 = [];
     group10 = [];
     if(numGroups === 0){
       alert("Select a group first!");
     }


    var randomArray = randomizeArray(studentArray);
    makeGroups(randomArray, numGroups);
    console.log('group1',group1)  // add in jquery .show(400)
if(group1.length!==0){
    $("#one").html(group1);
    $("#one").parent().show(400);
  } else {
    $("#one").parent().hide();
  }
  if(group2.length!==0){
    $("#two").html(group2);
    $("#two").parent().show(400);
    } else {
      $("#two").parent().hide();
    }
  if(group3.length!==0){
    $("#three").html(group3);
    $("#three").parent().show(400);
  } else {
    $("#three").parent().hide();
  }
  if(group4.length!==0){
    $("#four").html(group4);
    $("#four").parent().show(400);
  } else {
    $("#four").parent().hide();
  }
  if(group5.length!==0){
    $("#five").html(group5);
    $("#five").parent().show(400);
  } else {
    $("#five").parent().hide();
  }
  if(group6.length!==0){
    $("#six").html(group6);
    $("#six").parent().show(400);
  } else {
    $("#six").parent().hide();
  }
  if(group7.length!==0){
    $("#seven").html(group7);
    $("#seven").parent().show(400);
  } else {
    $("#seven").parent().hide();
  }
  if(group8.length!==0){
    $("#eight").html(group8);
    $("#eight").parent().show(400);
  } else {
    $("#eight").parent().hide();
  }
  if(group9.length!==0){
    $("#nine").html(group9);
    $("#nine").parent().show(400);
  } else {
    $("#nine").parent().hide();
  }
  if(group10.length!==0){
    $("#ten").html(group10);
    $("#ten").parent().show(400);
  } else {
    $("#ten").parent().hide();
  }
    // hide groups if they're empty || show groups if they're full
  // if(group1 = " " || group2 = " " || group3 = " " || group4 = " " || group5 = " " || group6 = " " || group7 = " " || group8 = " " || group8 = " " || group9 = " " || group10 = " ") {
  //   $("this#group").hide(this.id));
    // }


    // console.log('group1', group1);
    // console.log('group2', group2);
    // console.log('group3', group3);
    // console.log('group4', group4);
    // console.log('group5', group5);
    // console.log('group6', group6);
    // console.log('group7', group7);
    // console.log('group8', group8);
    // console.log('group9', group9);
    // console.log('group10', group10);
});


function makeGroups(list, numTeams) {
  // reset group arrays to empty


  var listLength = list.length;
  console.log('listLength', listLength);
  for(var it = 0; it < listLength; it++){
    console.log('list[it]', list[it]);
    switch(numTeams){
      case 2:
        if(it%2===0){
          group1.push("<br>" + list[it].name);
        } else{
          group2.push("<br>" + list[it].name);
        }
        break;
      case 3:
        if(it%3===0){
          group1.push("<br>" + list[it].name);
        } else if (it%3===1){
          group2.push("<br>" + list[it].name);
        } else {
          group3.push("<br>" + list[it].name);
        }
        break;
      case 4:
        if(it%4===0){
          group1.push("<br>" + list[it].name);
        } else if (it%4===1){
          group2.push("<br>" + list[it].name);
        } else if (it%4===2){
          group3.push("<br>" + list[it].name);
        } else {
          group4.push("<br>" + list[it].name);
        }
        break;
      case 5:
        if(it%5===0){
          group1.push("<br>" + list[it].name);
        }else if(it%5===1){
          group2.push("<br>" + list[it].name);
        }else if(it%5===2){
          group3.push("<br>" + list[it].name);
        }else if(it%5===3){
          group4.push("<br>" + list[it].name);
        }else if(it%5===4){
          group5.push("<br>" + list[it].name);
        }
        break;
      case 6:
        if(it%6===0){
          group1.push("<br>" + list[it].name);
        }else if(it%6===1){
          group2.push("<br>" + list[it].name);
        }else if(it%6===2){
          group3.push("<br>" + list[it].name);
        }else if(it%6===3){
          group4.push("<br>" + list[it].name);
        }else if(it%6===4){
          group5.push("<br>" + list[it].name);
        }else if(it%6===5){
          group6.push("<br>" + list[it].name);
        }
        break;
      case 7:
        if(it%7===0){
          group1.push("<br>" + list[it].name);
        }else if(it%7===1){
          group2.push("<br>" + list[it].name);
        }else if(it%7===2){
          group3.push("<br>" + list[it].name);
        }else if(it%7===3){
          group4.push("<br>" + list[it].name);
        }else if(it%7===4){
          group5.push("<br>" + list[it].name);
        }else if(it%7===5){
          group6.push("<br>" + list[it].name);
        }else if(it%7===6){
          group7.push("<br>" + list[it].name);
        }
        break;
      case 8:
        if(it%8===0){
          group1.push("<br>" + list[it].name);
        }else if(it%8===1){
          group2.push("<br>" + list[it].name);
        }else if(it%8===2){
          group3.push("<br>" + list[it].name);
        }else if(it%8===3){
          group4.push("<br>" + list[it].name);
        }else if(it%8===4){
          group5.push("<br>" + list[it].name);
        }else if(it%8===5){
          group6.push("<br>" + list[it].name);
        }else if(it%8===6){
          group7.push("<br>" + list[it].name);
        }else if(it%8===7){
          group8.push("<br>" + list[it].name);
        }
        break;
      case 9:
        if(it%9===0){
          group1.push("<br>" + list[it].name);
        }else if(it%9===1){
          group2.push("<br>" + list[it].name);
        }else if(it%9===2){
          group3.push("<br>" + list[it].name);
        }else if(it%9===3){
          group4.push("<br>" + list[it].name);
        }else if(it%9===4){
          group5.push("<br>" + list[it].name);
        }else if(it%9===5){
          group6.push("<br>" + list[it].name);
        }else if(it%9===6){
          group7.push("<br>" + list[it].name);
        }else if(it%9===7){
          group8.push("<br>" + list[it].name);
        }else if(it%9===8){
          group9.push("<br>" + list[it].name);
        }
        break;
      case 10:
        if(it%10===0){
          group1.push("<br>" + list[it].name);
        }else if(it%10===1){
          group2.push("<br>" + list[it].name);
        }else if(it%10===2){
          group3.push("<br>" + list[it].name);
        }else if(it%10===3){
          group4.push("<br>" + list[it].name);
        }else if(it%10===4){
          group5.push("<br>" + list[it].name);
        }else if(it%10===5){
          group6.push("<br>" + list[it].name);
        }else if(it%10===6){
          group7.push("<br>" + list[it].name);
        }else if(it%10===7){
          group8.push("<br>" + list[it].name);
        }else if(it%10===8){
          group9.push("<br>" + list[it].name);
        }else if(it%10===9){
          group10.push("<br>" + list[it].name);
        }
        break;
    }
  }
}




});



function randomizeArray(items){
  for (var rt = 0; rt < items.length; rt++){
    items[rt].value = Math.random();
    // console.log(items[rt]);
  }
  // console.log('items',items);

  items.sort(function (a, b) {
    // a.value = Math.random();
    // b.value = Math.random();

    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return items;
}

// function
