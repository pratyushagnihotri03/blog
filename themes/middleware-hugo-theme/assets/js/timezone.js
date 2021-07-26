// timezone = [{"value": "Samoa Standard Time",
//              "abbr": "SST",
//              "offset": -5,
//              "isdst": false,
//              "text": "EST - Eastern Standard Time (North America)"},
//              {"value": "Samoa Standard Time",
//               "abbr": "SST",
//               "offset": 1,
//               "isdst": false,
//               "text": "CET - Central European Time"}]

// var ele = document.getElementById('sel');
// for (var i = 0; i < timezone.length; i++) {
//     // POPULATE SELECT ELEMENT WITH JSON.
//     ele.innerHTML = ele.innerHTML +
//         '<option value="' + timezone[i]['offset'] + '">' + timezone[i]['text'] + '</option>';
// }
var ele = document.getElementById('sel');
ele.innerHTML = ele.innerHTML + '<option value="' + 0 + '">' + 'EST - Eastern Standard Time (North America)' + '</option>';
ele.innerHTML = ele.innerHTML + '<option value="' + 1 + '">' + 'CET - Central European Time' + '</option>';

function show(ele) {
  var msg1 = document.getElementById('time1');
  if(ele.options[ele.selectedIndex].value == 0){
    msg1.innerHTML = '8:00';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg1.innerHTML = '14:00';
  }

  var msg2 = document.getElementById('time2');
  if(ele.options[ele.selectedIndex].value == 0){
    msg2.innerHTML = '9:00';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg2.innerHTML = '15:00';
  }

  var msg3 = document.getElementById('time3');
  if(ele.options[ele.selectedIndex].value == 0){
    msg3.innerHTML = '10:00';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg3.innerHTML = '16:00';
  }

  var msg4 = document.getElementById('time4');
  if(ele.options[ele.selectedIndex].value == 0){
    msg4.innerHTML = '10:15';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg4.innerHTML = '16:15';
  }

  var msg5 = document.getElementById('time5');
  if(ele.options[ele.selectedIndex].value == 0){
    msg5.innerHTML = '10:30';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg5.innerHTML = '16:30';
  }

  var msg6 = document.getElementById('time6');
  if(ele.options[ele.selectedIndex].value == 0){
    msg6.innerHTML = '10:45';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg6.innerHTML = '16:45';
  }

  var msg7 = document.getElementById('time7');
  if(ele.options[ele.selectedIndex].value == 0){
    msg7.innerHTML = '11:40';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg7.innerHTML = '17:40';
  }

  var msg8 = document.getElementById('time8');
  if(ele.options[ele.selectedIndex].value == 0){
    msg8.innerHTML = '13:00';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg8.innerHTML = '19:00';
  }

  var msg9 = document.getElementById('time9');
  if(ele.options[ele.selectedIndex].value == 0){
    msg9.innerHTML = '14:10';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg9.innerHTML = '20:10';
  }

  var msg10 = document.getElementById('time10');
  if(ele.options[ele.selectedIndex].value == 0){
    msg10.innerHTML = '14:30';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg10.innerHTML = '20:30';
  }

  var msg11 = document.getElementById('time11');
  if(ele.options[ele.selectedIndex].value == 0){
    msg11.innerHTML = 'Tutorial #1a <p>('+ '9:00'+' &ndash;'+'10:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg11.innerHTML = 'Tutorial #1a <p>('+ '15:00'+' &ndash;'+'16:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg12 = document.getElementById('time12');
  if(ele.options[ele.selectedIndex].value == 0){
    msg12.innerHTML = 'Discussion Break <p>('+ '10:00'+' &ndash;'+'10:30'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg12.innerHTML = 'Discussion Break <p>('+ '16:00'+' &ndash;'+'16:30'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg13 = document.getElementById('time13');
  if(ele.options[ele.selectedIndex].value == 0){
    msg13.innerHTML = 'Tutorial #1b <p>('+ '10:30'+' &ndash;'+'11:40'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg13.innerHTML = 'Tutorial #1b <p>('+ '16:30'+' &ndash;'+'17:40'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg14 = document.getElementById('time14');
  if(ele.options[ele.selectedIndex].value == 0){
    msg14.innerHTML = 'Doctoral Symposium <p>('+ '8:00'+' &ndash;'+'10:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg14.innerHTML = 'Doctoral Symposium <p>('+ '14:00'+' &ndash;'+'16:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg15 = document.getElementById('time15');
  if(ele.options[ele.selectedIndex].value == 0){
    msg15.innerHTML = 'Discussion Break <p>('+ '10:00'+' &ndash;'+'10:30'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg15.innerHTML = 'Discussion Break <p>('+ '16:00'+' &ndash;'+'16:30'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg16 = document.getElementById('time16');
  if(ele.options[ele.selectedIndex].value == 0){
    msg16.innerHTML = 'Tutorial #2a <p>('+ '10:30'+' &ndash;'+'11:40'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg16.innerHTML = 'Tutorial #2a <p>('+ '16:30'+' &ndash;'+'17:40'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg17 = document.getElementById('time17');
  if(ele.options[ele.selectedIndex].value == 0){
    msg17.innerHTML = 'Lunch Break <p>('+ '11:40'+' &ndash;'+'13:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg17.innerHTML = 'Lunch Break <p>('+ '17:40'+' &ndash;'+'19:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg18 = document.getElementById('time18');
  if(ele.options[ele.selectedIndex].value == 0){
    msg18.innerHTML = 'Tutorial #2b <p>('+ '13:00'+' &ndash;'+'14:10'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg18.innerHTML = 'Tutorial #2b <p>('+ '19:00'+' &ndash;'+'20:10'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg19 = document.getElementById('time19');
  if(ele.options[ele.selectedIndex].value == 0){
    msg19.innerHTML = '<a href="/keynote-speakers" target="_blank">Opening Speech and Keynote #1</a> <p>('+ '9:00'+' &ndash;'+'10:15'+' EST) <a href="#change">Change the time zone!</a></p></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg19.innerHTML = '<a href="/keynote-speakers" target="_blank">Opening Speech and Keynote #1</a> <p>('+ '15:00'+' &ndash;'+'16:15'+' CET) <a href="#change">Change the time zone!</a></p></p>';
  }

  var msg20 = document.getElementById('time20');
  if(ele.options[ele.selectedIndex].value == 0){
    msg20.innerHTML = 'Discussion Break <p>('+ '10:15'+' &ndash;'+'10:45'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg20.innerHTML = 'Discussion Break <p>('+ '16:15'+' &ndash;'+'16:45'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg21 = document.getElementById('time21');
  if(ele.options[ele.selectedIndex].value == 0){
    msg21.innerHTML = 'Research #1: Events <p>('+ '10:45'+' &ndash;'+'11:40'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg21.innerHTML = 'Research #1: Events <p>('+ '16:45'+' &ndash;'+'17:40'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg22 = document.getElementById('time22');
  if(ele.options[ele.selectedIndex].value == 0){
    msg22.innerHTML = 'Lunch Break <p>('+ '11:40'+' &ndash;'+'13:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg22.innerHTML = 'Lunch Break <p>('+ '17:40'+' &ndash;'+'19:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg23 = document.getElementById('time23');
  if(ele.options[ele.selectedIndex].value == 0){
    msg23.innerHTML = 'Research #2: Dependability <p>('+ '13:00'+' &ndash;'+'14:10'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg23.innerHTML = 'Research #2: Dependability <p>('+ '19:00'+' &ndash;'+'20:10'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg24 = document.getElementById('time24');
  if(ele.options[ele.selectedIndex].value == 0){
    msg24.innerHTML = '<a href="/keynote-speakers" target="_blank">Keynote #2</a> <p>('+ '9:00'+' &ndash;'+'10:00'+' EST) <a href="#change">Change the time zone!</a></p></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg24.innerHTML = '<a href="/keynote-speakers" target="_blank">Keynote #2</a> <p>('+ '15:00'+' &ndash;'+'16:00'+' CET) <a href="#change">Change the time zone!</a></p></p>';
  }

  var msg25 = document.getElementById('time25');
  if(ele.options[ele.selectedIndex].value == 0){
    msg25.innerHTML = 'Discussion Break <p>('+ '10:00'+' &ndash;'+'10:30'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg25.innerHTML = 'Discussion Break <p>('+ '16:00'+' &ndash;'+'16:30'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg26 = document.getElementById('time26');
  if(ele.options[ele.selectedIndex].value == 0){
    msg26.innerHTML = 'Industry <p>('+ '10:30'+' &ndash;'+'11:40'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg26.innerHTML = 'Industry <p>('+ '16:30'+' &ndash;'+'17:40'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg27 = document.getElementById('time27');
  if(ele.options[ele.selectedIndex].value == 0){
    msg27.innerHTML = 'Lunch Break <p>('+ '11:40'+' &ndash;'+'13:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg27.innerHTML = 'Lunch Break <p>('+ '17:40'+' &ndash;'+'19:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg28 = document.getElementById('time28');
  if(ele.options[ele.selectedIndex].value == 0){
    msg28.innerHTML = 'Grand Challenge <p>('+ '13:00'+' &ndash;'+'14:30'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg28.innerHTML = 'Grand Challenge <p>('+ '19:00'+' &ndash;'+'20:30'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg29 = document.getElementById('time29');
  if(ele.options[ele.selectedIndex].value == 0){
    msg29.innerHTML = 'Test of Time <p>('+ '9:00'+' &ndash;'+'9:20'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg29.innerHTML = 'Test of Time <p>('+ '15:00'+' &ndash;'+'15:20'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg30 = document.getElementById('time30');
  if(ele.options[ele.selectedIndex].value == 0){
    msg30.innerHTML = 'Research #3: Serverless <p>('+ '9:24'+' &ndash;'+'10:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg30.innerHTML = 'Research #3: Serverless <p>('+ '15:24'+' &ndash;'+'16:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg31 = document.getElementById('time31');
  if(ele.options[ele.selectedIndex].value == 0){
    msg31.innerHTML = 'Discussion Break <p>('+ '10:00'+' &ndash;'+'10:30'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg31.innerHTML = 'Discussion Break <p>('+ '16:00'+' &ndash;'+'16:30'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg32 = document.getElementById('time32');
  if(ele.options[ele.selectedIndex].value == 0){
    msg32.innerHTML = 'Research #4: Streams and IoT <p>('+ '10:30'+' &ndash;'+'11:40'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg32.innerHTML = 'Research #4: Streams and IoT <p>('+ '16:30'+' &ndash;'+'17:40'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg33 = document.getElementById('time33');
  if(ele.options[ele.selectedIndex].value == 0){
    msg33.innerHTML = 'Lunch Break <p>('+ '11:40'+' &ndash;'+'13:00'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg33.innerHTML = 'Lunch Break <p>('+ '17:40'+' &ndash;'+'19:00'+' CET) <a href="#change">Change the time zone!</a></p>';
  }

  var msg34 = document.getElementById('time34');
  if(ele.options[ele.selectedIndex].value == 0){
    msg34.innerHTML = 'Business Meeting and Closing Remarks <p>('+ '13:00'+' &ndash;'+'14:10'+' EST) <a href="#change">Change the time zone!</a></p>';
  }
  else if(ele.options[ele.selectedIndex].value == 1){
    msg34.innerHTML = 'Business Meeting and Closing Remarks <p>('+ '19:00'+' &ndash;'+'20:10'+' CET) <a href="#change">Change the time zone!</a></p>';
  }
}
/////////////////
// function show(ele) {
// var date = "July 13, 2020 09:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg1 = document.getElementById('time1');
// offsetTimeString = offsetTime.substr(15,6);
// msg1.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 10:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg2 = document.getElementById('time2');
// offsetTimeString = offsetTime.substr(15,6);
// msg2.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 11:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg3 = document.getElementById('time3');
// offsetTimeString = offsetTime.substr(15,6);
// msg3.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 11:15:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg4 = document.getElementById('time4');
// offsetTimeString = offsetTime.substr(15,6);
// msg4.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 11:30:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg5 = document.getElementById('time5');
// offsetTimeString = offsetTime.substr(15,6);
// msg5.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 11:45:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg6 = document.getElementById('time6');
// offsetTimeString = offsetTime.substr(15,6);
// msg6.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 12:40:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg7 = document.getElementById('time7');
// offsetTimeString = offsetTime.substr(15,6);
// msg7.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 14:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg8 = document.getElementById('time8');
// offsetTimeString = offsetTime.substr(15,6);
// msg8.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 15:10:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg9 = document.getElementById('time9');
// offsetTimeString = offsetTime.substr(15,6);
// msg9.innerHTML = offsetTimeString;
// ////////////////////////////////////////////////////////
// var date = "July 13, 2020 15:30:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg10 = document.getElementById('time10');
// offsetTimeString = offsetTime.substr(15,6);
// msg10.innerHTML = offsetTimeString;
///////////////////////////////////////////////////////
// var date = "July 13, 2020 10:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 13, 2020 11:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg11 = document.getElementById('time11');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg11.innerHTML = 'Tutorial #1a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg11.innerHTML = 'Tutorial #1a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
// //////////////////////////////////////////////////////
// var date = "July 13, 2020 11:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 13, 2020 11:30:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg12 = document.getElementById('time12');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg12.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg12.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
// //////////////////////////////////////////////////////
// var date = "July 13, 2020 11:30:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 13, 2020 12:40:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg13 = document.getElementById('time13');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg13.innerHTML = 'Tutorial #1b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg13.innerHTML = 'Tutorial #1b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 13, 2020 9:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 14, 2020 11:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg14 = document.getElementById('time14');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg14.innerHTML = 'Doctoral Symposium <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg14.innerHTML = 'Doctoral Symposium <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 14, 2020 11:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 14, 2020 11:30:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg15 = document.getElementById('time15');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg15.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg15.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 14, 2020 11:30:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 14, 2020 12:40:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg16 = document.getElementById('time16');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg16.innerHTML = 'Tutorial #2a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg16.innerHTML = 'Tutorial #2a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 14, 2020 12:40:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 14, 2020 14:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg17 = document.getElementById('time17');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg17.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg17.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 14, 2020 14:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 14, 2020 15:10:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg18 = document.getElementById('time18');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg18.innerHTML = 'Tutorial #2b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg18.innerHTML = 'Tutorial #2b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 15, 2020 10:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 15, 2020 11:15:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg19 = document.getElementById('time19');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg19.innerHTML = '<a href="/keynote-speakers" target="_blank">Opening Speech and Keynote #1</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg19.innerHTML = '<a href="/keynote-speakers" target="_blank">Opening Speech and Keynote #1</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 15, 2020 11:15:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 15, 2020 11:45:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg20 = document.getElementById('time20');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg20.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg20.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 15, 2020 11:45:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 15, 2020 12:40:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg21 = document.getElementById('time21');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg21.innerHTML = 'Research #1: Events <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg21.innerHTML = 'Research #1: Events <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 15, 2020 12:40:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 15, 2020 14:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg22 = document.getElementById('time22');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg22.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg22.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 15, 2020 14:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 15, 2020 15:10:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg23 = document.getElementById('time23');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg23.innerHTML = 'Research #2: Dependability <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg23.innerHTML = 'Research #2: Dependability <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 16, 2020 10:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 16, 2020 11:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg24 = document.getElementById('time24');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg24.innerHTML = '<a href="/keynote-speakers" target="_blank">Keynote #2</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg24.innerHTML = '<a href="/keynote-speakers" target="_blank">Keynote #2</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 16, 2020 11:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 16, 2020 11:30:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg25 = document.getElementById('time25');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg25.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg25.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 16, 2020 11:30:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 16, 2020 12:40:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg26 = document.getElementById('time26');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg26.innerHTML = 'Industry <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg26.innerHTML = 'Industry <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 16, 2020 12:40:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 16, 2020 14:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg27 = document.getElementById('time27');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg27.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg27.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 16, 2020 14:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 16, 2020 15:30:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg28 = document.getElementById('time28');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg28.innerHTML = 'Grand Challenge <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg28.innerHTML = 'Grand Challenge <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 17, 2020 10:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 17, 2020 10:20:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg29 = document.getElementById('time29');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg29.innerHTML = 'Test of Time <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg29.innerHTML = 'Test of Time <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 17, 2020 10:24:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 17, 2020 11:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg30 = document.getElementById('time30');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg30.innerHTML = 'Research #3: Serverless <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg30.innerHTML = 'Research #3: Serverless <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 17, 2020 11:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 17, 2020 11:30:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg31 = document.getElementById('time31');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg31.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg31.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 17, 2020 11:30:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 17, 2020 12:40:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg32 = document.getElementById('time32');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg32.innerHTML = 'Research #4: Streams and IoT <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg32.innerHTML = 'Research #4: Streams and IoT <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 17, 2020 12:40:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 17, 2020 14:00:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg33 = document.getElementById('time33');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg33.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg33.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }
//
// //////////////////////////////////////////////////////
// var date = "July 17, 2020 14:00:00";
// var targetTime = new Date(date);
// var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var date1 = "July 17, 2020 15:10:00";
// var targetTime1 = new Date(date1);
// var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
// //get the timezone offset from local time in minutes
// var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
// //convert the offset to milliseconds, add to targetTime, and make a new Date
// var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
// //var zoneTime = offsetTime.
//
// var msg34 = document.getElementById('time34');
// offsetTimeString = offsetTime.substr(15,6);
// offsetTimeString1 = offsetTime1.substr(15,6);
// if(ele.options[ele.selectedIndex].value == -5){
//   msg34.innerHTML = 'Business Meeting and Closing Remarks <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST ) <a href="#change">Change the time zone!</a></p></p>';
// }
// else if(ele.options[ele.selectedIndex].value == 1){
//   msg34.innerHTML = 'Business Meeting and Closing Remarks <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET ) <a href="#change">Change the time zone!</a></p></p>';
// }

//////////////////////////////////////////////////////
