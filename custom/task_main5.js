function task_main5(practice, numPrac, numBlocks, numTrials)
{

  //EMPTY ARRAY FOR TIMELINE OF EXPERIMENT
    var experiment = [];

    var instructions1 = {
      type: "html-keyboard-response",
      stimulus: "<p style = 'text-align: center; font-size: 28px'>In this experiment, you are a hungry fox looking for food. </p>" +
      "<div style='text-align: center;'><img src='img/fox.png' width='400' height='400'></img>" +
      "<p style = 'text-align: center; font-size: 28px'>Press any key to continue</p>",
      data: {label: 'intruct', trialType: 'instructions'},
      };

    	// experiment.push(instructions1);

      var instructions2 = {
        type: "html-keyboard-response",
        stimulus: "<p style = 'text-align: center; font-size: 28px'>You will be put into many different locations, </p>" +
        "<p style = 'text-align: center; font-size: 28px'>for example this forest, where you will have opportunities to gain food by digging up some burrows.</p>" +
        "<div style='text-align: center;'><img src='img/forest1.jpg' width='600' height='400'></img>" +
        "<p style = 'text-align: center; font-size: 28px'> Press any key to continue</p>"
        };

        // var instructions3 = {
        //   type: "html-keyboard-response",
        //   stimulus: "<p style = 'text-align: center; font-size: 28px'> The number of burrows in each location will be indicated at the bottom of the screen." +
        //   "<p style = 'text-align: center; font-size: 28px'> For example, in this location there are 4 available burrows to dig" +
        //   "<div style='text-align: center;'><img src='img/forest1.jpg' width='600' height='400'></img>" +
        //   "<div style='position: absolute; top: 60%; left: 10%;'><img id='display_image' src='img/dirt.png' width='100' height='90'></img>" +
        //   "<p style = 'text-align: center; font-size: 28px'> Press any key to move forwards</p>" +
        //   "<div style='position: absolute; top: 60%; left: 80%;'><img id='dirt1' src='img/dirt.png' width='100' height='90'></img>"
        // }

        // experiment.push(instructions2);

        var instructions3 = {
          type: "html-keyboard-response",
          stimulus: "<p style = 'text-align: center; font-size: 28px'>Some of the burrows contain tasty rabbits, and every time you dig up a rabbit, you will gain 10 points.</p>" +
          "<div style='text-align: center;;'><img src='img/rabbit.png' width='400' height='400'></img>" +
          "<p style = 'text-align: center; font-size: 28px'>Press any key to continue.</p>"
          };

        var instructions4 = {
          type: "html-keyboard-response",
          stimulus: "<p style = 'text-align: center; font-size: 28px'>However, some of the burrows contain dangerous badgers, and every time you dig up a badger, you will lose 20 points.</p>" +
            "<div style='text-align: center;'><img id='display_image' src='img/badger.png' width='400' height='400'></img>" +
            "<p style = 'text-align: center; font-size: 28px'>Press any key to continue.</p>"
            };

        var instructions5 = {
            type: "html-keyboard-response",
            stimulus: "<p style = 'text-align: center; font-size: 28px'>You also have the choice to avoid digging the burrows. </p>" +
              "<p style = 'text-align: center; font-size: 28px'>If you choose to avoid, you will not receive any information about whether there was a rabbit or badger inside and instead you will see the burrow on the screen.</p>" +
              "<div style='text-align: center;'><img id='display_image' src='img/dirt.png' width='400' height='300'></img>" +
              "<p style = 'text-align: center; font-size: 28px'>Press any key to continue.</p>"
              };

              var instructions6 = {
                  type: "html-keyboard-response",
                  stimulus: "<p style = 'text-align: center; font-size: 28px'><strong>Press the D key to dig</strong> </p> " +
                    "<p style = 'text-align: center; font-size: 28px'><strong>Press the J key to avoid.</strong> </p>" +
                    "<p style = 'text-align: center; font-size: 28px'>Press any key to continue.</p>"
                    };

        experiment.push(instructions1);
        experiment.push(instructions2);
        experiment.push(instructions3);
        experiment.push(instructions4);
        experiment.push(instructions5);
        experiment.push(instructions6);

        var backgrounds = [
          "img/forest1.jpg","img/forest2.jpg", "img/forest3.jpg", "img/forest4.jpg",
          "img/forest5.jpg","img/forest6.jpg", "img/forest7.jpg", "img/forest8.jpg",
          "img/forest9.jpg","img/forest10.jpg", "img/forest11.jpg", "img/forest12.jpg",
          "img/forest13.jpg","img/forest14.jpg", "img/forest15.jpg", "img/forest16.jpg",
          "img/forest17.jpg","img/forest18.jpg", "img/forest19.jpg", "img/forest20.jpg",
          "img/forest21.jpg","img/forest22.jpg", "img/forest23.jpg", "img/forest24.jpg",
          "img/forest25.jpg","img/forest26.jpg", "img/forest27.jpg", "img/forest28.jpg",
          "img/forest29.jpg","img/forest30.jpg", "img/forest31.jpg", "img/forest32.jpg",
          "img/forest33.jpg","img/forest34.jpg", "img/forest35.jpg", "img/forest34.jpg",
          "img/forest35.jpg","img/forest36.jpg", "img/forest37.jpg", "img/forest38.jpg",
          "img/forest39.jpg","img/forest40.jpg", "img/forest41.jpg", "img/forest42.jpg",
          "img/forest43.jpg","img/forest44.jpg", "img/forest45.jpg", "img/forest46.jpg",
          "img/forest47.jpg","img/forest48.jpg", "img/forest49.jpg", "img/forest50.jpg",
          "img/forest51.jpg","img/forest52.jpg", "img/forest53.jpg", "img/forest54.jpg",
          "img/forest55.jpg","img/forest56.jpg", "img/forest57.jpg", "img/forest58.jpg",
          "img/forest59.jpg","img/forest60.jpg"
      ];



        // HOW MANY HORIZONS OF 4
        // Produce array of count i, of variable content
        var count = 30;
        var content = 4;
        var hor4 = generate_trial_sequence(count, content);

        // HOW MANY HORIZONS OF 8
        var count = 30;
        var content = 8;
        var hor8 = generate_trial_sequence(count, content);

        // HOW MANY HORIZONS OF 12
        var count = 30;
        var content = 12;
        var hor12 = generate_trial_sequence(count, content);

        // HOW MANY HORIZONS OF 16
        var count = 30;
        var content = 16;
        var hor16 = generate_trial_sequence(count, content);

        // CONCATENATE INTO 1 ARRAY
        // var hors = [].concat(hor4, hor4);
        var hors = [].concat(hor4, hor8, hor12, hor16);

        // SHUFFLE SEQUENCE
        var hors_shuffled = shuffle(hors);

        var env = 1;
        var horizon = 16;
        var numsequences = 30;
        // var hello = stimsequence(env, horizon)

        //BEGIN BLOCK FOR LOOP
        for (var y = 0; y < numBlocks; y++){

        //SORT WHICH STIMULUS PARAMETERS TO USE BETWEEN THE BLOCKS
        var task_break = {
            type:"html-keyboard-response",
            stimulus: '<p style = "text-align: center; font-size: 28px">The task is divided into 4 blocks, where you can pause for a break before every block.</p>' +
            '<p style = "text-align: center; font-size: 28px">There are no time limits on your responses.</p>' +
            '<p style = "text-align: center; font-size: 28px">As a reminder: You are trying to find rabbits and avoid badgers' +
            '<p style = "text-align: center; font-size: 28px"><br>Press spacebar to begin!</p>',
            data: {label: 'intruct', trialType: 'instructions'},
            cont_key: 32
          };

        var task_break2 = {
            type:"html-keyboard-response",
            stimulus: '<p style = "text-align: center; font-size: 28px"> You can now pause for a break. You have completed '+y+' out of '+numBlocks+' blocks.</p>' +
            '<p style = "text-align: center; font-size: 28px">As a reminder: You are trying to find rabbits and avoid badgers' +
            '<p style = "text-align: center; font-size: 28px"><br>Press spacebar to continue the task.</p>',
            data: {label: 'intruct', trialType: 'instructions'},
            cont_key: 32
          };


        //PUSH BREAK SCREENS BETWEEN EACH BLOCK
          if (y > 0)
            {experiment.push(task_break2);}
              else
            {experiment.push(task_break);}

       //BEGIN TRIAL FOR LOOP
         for(var trial = 0; trial < numTrials; trial++){// For numTrials trials, do all 4 parts (trial, feedback, confidence_rating, confidence_rating_feedback)

           //GENERATES OUTCOME SEQUENCE
           var hello = gensequences(numsequences, env, horizon)

           var background_select = function(){
               return jsPsych.randomization.sampleWithoutReplacement([0,1,2,3,4,5,6,7,8,9,10,
               11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,
             35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], 1)[0];
           }; //end of background select function

            var number = background_select();


            /* test trials */
            var test_stimuli = [
                { stimulus: "img/dirt.png", background: backgrounds[number], bad_outcome: "img/badger.png", good_outcome: "img/rabbit.png"}
              ];

                var which_outcome = function(){
                    return jsPsych.randomization.sampleWithoutReplacement([0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,
                  35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], 1)[0];
                }; //end of which outcome function

                //  PUSH STIMULI DEPENDING ON HORIZON
                  if (hors_shuffled[trial] == 4) {
                    horizon = 4;
                    experiment.push(genstim(horizon, hello, test_stimuli, trial))
                  } else if (hors_shuffled[trial] == 8){
                    horizon = 8;
                    experiment.push(genstim(horizon, hello, test_stimuli, trial))
                  } else if (hors_shuffled[trial] == 12){
                    horizon = 12;
                    experiment.push(genstim(horizon, hello, test_stimuli, trial))
                  } else if (hors_shuffled[trial] == 16){
                    horizon = 16;
                    experiment.push(genstim(horizon, hello, test_stimuli, trial))
                  }


              }; //end of trial for loop
            }; //end of block for loop

//
    return experiment;

  } //end of exp function
