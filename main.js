$.getJSON('/json/menu.json', start); //calling json

//sv-en dictionary
let svTranslations = {

  "whole-week": 'hela veckan',
  monday: 'måndag',
  tuesday: 'tisdag',
  wednesday: 'onsdag',
  thursday: 'torsdag',
  friday: 'fredag',
}

function start(menuData) { //data from json, the whole lunch menu
  let ul = $('<ul class="menuSv"/>'); //turn an unordered list into jQuery with class: menuSv

  for (let day in menuData) { //looking at all the days in json
    let dayData = menuData[day]; //looping through them
    let daySv = svTranslations[day]; //grabbing all of the swedish days
    ul.append('<h4>' + daySv + '</h4>'); //adding the weekdays in swedish within h4 tags


    for (let meal of dayData.sv) {
      let li = $('<li/>'); //turn list item into jQuery
      li.append('<h5>' + meal.name + '</h5>'); //the swedish name of the dish
      li.append('<p class = "meal-desc">' + meal.desc + '</p>'); //a swedish description of the dish
      ul.append(li);//adding the items(li) to the list(ul) swedish
      $('.menu').append(ul); //calling the menu in jQuery
    }
  }

  ul = $('<ul class="menuEn"/>'); //turn list into jQuery using the same variable as was in the swedish
  for (let day in menuData) {
    let dayData = menuData[day];
    ul.append('<h4>' + day + '</h4>');//adding the weekdays in english

    for (let meal of dayData.en) {
      li = $('<li/>'); //turn list item into jQuery
      li.append('<h5>' + meal.name + '</h5>');//the english name of the dish
      li.append('<p class = "meal-desc">' + meal.desc + '</p>');//an english description
      ul.append(li);//adding the items(li) to the list(ul) english
      $('.menu').append(ul);//calling the menu in jQuery
    }
  }
}

$('.menuEn').hide();
//english button (one button)
$('#translateEn').click(function () {
  $('.menuEn').show();
  $('.menuSv').hide();
});

//swedish button (one button)
$('#translateSv').click(function () {
  $('.menuSv').show();
  $('.menuEn').hide();
});
