function genstim(horizon, hello, test_stimuli, trial) {

//HELLO VARIABLE IS ARRAY OF ARRAYS
// HELLO[TRIAL] SELECTS ARRAY FOR THE TRIAL
  var sequence = hello[trial];

  //parameters
  var spaces = 5;
  var feedtime = 500;
  var dirtheight = 70;
  var dirtwidth = 90;
  var dirtleft = 8;

  var stim_1 = {
    type: 'clickoutcome-html',
    stimulus: jsPsych.timelineVariable('stimulus'),
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    // bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    // good_outcome: jsPsych.timelineVariable('stimulus'),

    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    // left_category_key: hello[1],

    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 1,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    // background: 'img/forest1.jpg',
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    environment: 1,
    returns: sequence[0],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_2 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 2,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[1],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_3 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 3,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[2],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_4 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 4,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[3],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_5 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 5,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[4],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }


  var stim_6 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 6,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[5],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_7 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 7,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[6],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_8 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 8,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[7],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_9 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 9,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[8],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_10 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 10,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[9],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_11 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 11,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[10],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_12 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 12,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[11],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_13 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 13,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[12],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_14 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 14,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[13],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_15 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 15,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[14],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim_16 = {
    type: 'clickoutcome-html',
    stimulus: 'img/dirt.png',
    stim_key_association: 'right',
    // bad_outcome: '<span style="color: red; font-size: 80px">X</span>',
    bad_outcome: '<img src="img/badger.png" style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    good_outcome: '<img src="img/rabbit.png"  style="position: absolute; top: 10; left: 90; width:400px; height: 500px">',
    //bottom_instructions: '<p>PRESS E TO DIG, PRESS I TO AVOID</p>',
    force_correct_key_press: false,
    display_feedback: true,
    timing_response: 3000, //Only if display_feedback is false
    left_category_key: 'D',
    right_category_key: 'J',
    left_category_label: ['DIG'],
    right_category_label: ['AVOID'],
    response_ends_trial: true,
    amount: 16,
    top: 80,
    left: dirtleft,
    height: dirtheight,
    width: dirtwidth,
    spacing: spaces,
    background: jsPsych.timelineVariable('background'),
    backgroundtop: 10,
    backgroundleft: 20,
    backgroundheight: 600,
    backgroundwidth: 1000,
    feedback_duration: feedtime,
    returns: sequence[15],
    avoid_pic: '<img src="img/dirt.png" style="position: absolute; top: 10; left: 90; width:400px; height: 300px">'
  }

  var stim = [stim_1,stim_2,stim_3,stim_4]

  var trial_hor4 = {
    timeline: [stim_4, stim_3, stim_2, stim_1],
    timeline_variables: test_stimuli,
    randomize_order: false,
    repetitions: 1
  }

  var trial_hor8 = {
    timeline: [stim_8, stim_7, stim_6, stim_5, stim_4, stim_3, stim_2, stim_1],
    timeline_variables: test_stimuli,
    randomize_order: false,
    repetitions: 1
  }

  var trial_hor12 = {
    timeline: [stim_12, stim_11, stim_10, stim_9, stim_8, stim_7, stim_6, stim_5, stim_4, stim_3, stim_2, stim_1],
    timeline_variables: test_stimuli,
    randomize_order: false,
    repetitions: 1
  }

  var trial_hor16 = {
    timeline: [stim_16, stim_15, stim_14, stim_13, stim_12, stim_11, stim_10, stim_9, stim_8, stim_7, stim_6, stim_5, stim_4, stim_3, stim_2, stim_1],
    timeline_variables: test_stimuli,
    randomize_order: false,
    repetitions: 1
  }


  if (horizon == 4) {
    return trial_hor4
  } else if (horizon == 8) {
    return trial_hor8
  } else if (horizon == 12) {
    return trial_hor12
  } else if (horizon == 16) {
    return trial_hor16
  }

}
