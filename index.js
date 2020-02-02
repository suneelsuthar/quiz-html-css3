// all mcqs data
let questionsArray = [
  {
    q:
      "A box contains 7 blue balls, 10 white balls and 12 black balls. A ball is drawn at random from the box. What is the probability that the ball drawn is either blue or white ?",
    options: ["7/23", "17/23", "17/29", "23/29", "13/29"],
    correct: "17/29",
    Explanation:
      "Total Number of balls n(S) = 7 + 10 + 12 = 29 Now, n(B) = 7 n(W) = 10"
  },
  {
    q:
      "There are two circles of different radii. The area of a square is 441 sq m, whose side is half the radius of the larger circle. The radius of the smaller circle is fourth-seventh of that of the larger circle. What is the circumference of the smaller circle?",
    options: ["150.86 m", "142.76 m", "154.24 m", "75.43 m", "113.14 m"],
    correct: "150.86 m",
    Explanation:
      "Area of the square 441 sq m  Side of the square = 21 m  Radius of the larger circle = 42 m"
  },
  {
    q:
      "Directions(Q.6 to Q.10 ): What should come in place of question mark (?) in the following number series.0 24 68 ? 222 336 520",
    options: ["100", "120", "125", "132", "144"],
    correct: "120",
    Explanation: "23+2 = 10,33−3 = 24,43+4=68 , 53−5 = 120,63+6 = 222,73−7=336 , 83+8=520"
  },
  {
    q: "15 22.5 ? 112.5 337.5 1181.25",
    options: ["40", "42", "45", "36", "48"],
    correct: "45",
  },
  {
    q: "20 42 107.5 325.5 ? 4575",
    options: ["1142.75", "1139.25", "1146.25", "979.5", "None of these"],
    correct: "1142.75",
    Explanation:
      "20 × 2 + 2 = 42, 42 × 2.5 + 2.5 = 107.5, 107.5 × 3 + 3 = 325.5, 325.5 × 3.5 + 3.5 = 1142.75, 1142.75 × 4 + 4 = 4575"
  },
  {
    q: "50 60 72 ? 103.68 124.416",
    options: ["86.4", "84.2", "80", "82.7", "85"],
    correct: "86.4",
    Explanation:
      "50, 50 × 1.2 = 60, 60 × 1.2 = 72, 72 × 1.2 = 86.4, 86.4 × 1.2 = 103.68, 103.68 × 1.2 = 124.416"
  }
];

// DOCM for questions
let container = document.getElementById("_container");
let questionDiv = document.createElement("div");
for (var i = 0; i < questionsArray.length; i++) {
  questionDiv.setAttribute("id", "questios");
  let q_num = document.createElement("span");
  q_num.setAttribute("id", "q_num");

  let q_num_text = document.createTextNode(`${i + 1}`);
  q_num.appendChild(q_num_text);
  let title = document.createElement("span");
  title.setAttribute("class", "_question");
  let title_text = document.createTextNode("Question ");
  title.appendChild(title_text);
  let questionText = document.createTextNode(`. ${questionsArray[i].q}`);

  let line_break = document.createElement("hr");
  questionDiv.appendChild(line_break)
  questionDiv.appendChild(title);
  title.appendChild(q_num);
  questionDiv.appendChild(questionText);
  container.appendChild(questionDiv);
  // create options
  questionsArray[i].options.map((val, i) => {
    let optionDiv = document.createElement("div");
    optionDiv.setAttribute("id", `${i}`);
    optionDiv.setAttribute("class", "_option_section");
    optionDiv.setAttribute("onclick", "selectedOptions(this)");

    let option = document.createElement("div");
    option.setAttribute("class", "_option_number");
    if (i === 0) {
      let option_text = document.createTextNode(`A`);
      option.appendChild(option_text);
    }
    if (i === 1) {
      let option_text = document.createTextNode(`B`);
      option.appendChild(option_text);
    }
    if (i === 2) {
      let option_text = document.createTextNode(`C`);
      option.appendChild(option_text);
    }
    if (i === 3) {
      let option_text = document.createTextNode(`D`);
      option.appendChild(option_text);
    }
    if (i === 4) {
      let option_text = document.createTextNode(`E`);
      option.appendChild(option_text);
    }

    let option_Ans = document.createElement("div");
    option_Ans.setAttribute("class", "_options");
    let option_Ans_text = document.createTextNode(`${val}`);
    option_Ans.appendChild(option_Ans_text);
    optionDiv.appendChild(option);
    optionDiv.appendChild(option_Ans);
    questionDiv.appendChild(optionDiv);

  });
}

// quiz submit button
let submitSection = document.createElement("div");
submitSection.setAttribute("id", "submit_section");
let submit_btn = document.createElement("button");
submit_btn.setAttribute("id", "submit_button");
submit_btn.setAttribute("onclick", "submitQuestion(this)");
submit_btn.innerText = "submit";
container.appendChild(submitSection);
submitSection.appendChild(submit_btn);
let line_break = document.createElement("hr");
submitSection.appendChild(line_break)
/*----------------------------END DOM------------------------------*/

function selectedOptions(event) {
  var selectedValue = "";
  let selected_border = "border: 2px solid rgb(68, 145, 68)";
  let unslected_border = "border: 2px solid rgb(224, 224, 224);";
  let backgroundColor = "rgb(242, 242, 242)";

  event.parentNode.children[1].style = unslected_border;
  event.parentNode.children[2].style = unslected_border;
  event.parentNode.children[3].style = unslected_border;
  event.parentNode.children[4].style = unslected_border;
  event.parentNode.children[5].style = unslected_border;
  // default option background color grey
  event.parentNode.children[1].children[0].style.backgroundColor = backgroundColor;
  event.parentNode.children[2].children[0].style.backgroundColor = backgroundColor;
  event.parentNode.children[3].children[0].style.backgroundColor = backgroundColor;
  event.parentNode.children[4].children[0].style.backgroundColor = backgroundColor;
  event.parentNode.children[5].children[0].style.backgroundColor = backgroundColor;
  //   check condition if select A then other option be un selected
  if (event.id === "0") {
    event.children[0].style.backgroundColor = "gray";
    event.parentNode.children[1].style = selected_border;
    selectedValue = event.children[1].innerText;
    let questionNum = event.parentNode.children[0].children[0].innerText - 1;
    questionsArray[questionNum].slected_value = event.children[1].innerText;
    questionsArray[questionNum].slected_option = "a";
  }
  if (event.id === "1") {
    event.children[0].style.backgroundColor = "gray";
    event.parentNode.children[2].style = selected_border;
    selectedValue = event.children[1].innerText;
    let questionNum = event.parentNode.children[0].children[0].innerText - 1;
    questionsArray[questionNum].slected_value = event.children[1].innerText;
    questionsArray[questionNum].slected_option = "b";
    console.log(questionsArray[questionNum].slected_option);
  }
  if (event.id === "2") {
    event.children[0].style.backgroundColor = "gray";
    event.parentNode.children[3].style = selected_border;
    selectedValue = event.children[1].innerText;
    let questionNum = event.parentNode.children[0].children[0].innerText - 1;
    questionsArray[questionNum].slected_value = event.children[1].innerText;
    questionsArray[questionNum].slected_option = "c";
  }
  if (event.id === "3") {
    event.children[0].style.backgroundColor = "gray";
    event.parentNode.children[4].style = selected_border;
    selectedValue = event.children[1].innerText;
    let questionNum = event.parentNode.children[0].children[0].innerText - 1;
    questionsArray[questionNum].slected_value = event.children[1].innerText;
    questionsArray[questionNum].slected_option = "d";
  }
  if (event.id === "4") {
    event.children[0].style.backgroundColor = "gray";
    event.parentNode.children[5].style = selected_border;
    selectedValue = event.children[1].innerText;
    let questionNum = event.parentNode.children[0].children[0].innerText - 1;
    questionsArray[questionNum].slected_value = event.children[1].innerText;
    questionsArray[questionNum].slected_option = "e";
  }

  let countSelectedQ = [];
  for (var i = 0; i < questionsArray.length; i++) {
    if (questionsArray[i].slected_value !== undefined) {
      countSelectedQ.push(questionsArray[i].slected_value);
    }
  }
}
// submit quzi 
function submitQuestion(event) {
  var wrongCount = 0;
  var correctCount = 0;
  let result_container = document.getElementById("result_container");
  let result_div = document.getElementById("result_section");
  for (var i = 0; i < questionsArray.length; i++) {
    document.getElementById("total_question").innerHTML = `${questionsArray.length} `;
    if (questionsArray[i].slected_value === questionsArray[i].correct) {
      correctCount++
      document.getElementById("_graph").style.width = `${(correctCount /questionsArray.length) *100}%`;
      document.getElementById("_score").innerHTML = `${((correctCount / questionsArray.length) *100).toFixed(2)}%`;
      document.getElementById("correct_num").innerHTML = `${correctCount} `;
    } 
    else {
      wrongCount++
    }
    // render all slected questions
      let questionDiv = document.createElement("div");
      questionDiv.setAttribute("id", "selected_questios");
      let q_num = document.createElement("span");
      q_num.setAttribute("id", "q_num");
      let q_num_text = document.createTextNode(`${i + 1}`);
      q_num.appendChild(q_num_text);
      let title = document.createElement("span");
      title.setAttribute("class", "_question");
      let title_text = document.createTextNode("Question ");
      title.appendChild(title_text);
      let questionText = document.createTextNode(`. ${questionsArray[i].q}`);

      questionDiv.appendChild(title);
      title.appendChild(q_num);
      questionDiv.appendChild(questionText);
      result_container.appendChild(questionDiv);

      // create options for render result
      let selected_containder = document.createElement("div");
      questionsArray[i].options.map((val, i) => {
        // console.log(val)
        let optionDiv = document.createElement("div");
        optionDiv.setAttribute("id", `${i}`);
        optionDiv.setAttribute("class", "_option_section");
        let option = document.createElement("div");
        option.setAttribute("class", "_option_number");
        if (i === 0) {
          let option_text = document.createTextNode(`A`);
          option.appendChild(option_text);
        }
        if (i === 1) {
          let option_text = document.createTextNode(`B`);
          option.appendChild(option_text);
        }
        if (i === 2) {
          let option_text = document.createTextNode(`C`);
          option.appendChild(option_text);
        }
        if (i === 3) {
          let option_text = document.createTextNode(`D`);
          option.appendChild(option_text);
        }
        if (i === 4) {
          let option_text = document.createTextNode(`E`);
          option.appendChild(option_text);
        }

        let option_Ans = document.createElement("div");
        option_Ans.setAttribute("class", "_options");
        let option_Ans_text = document.createTextNode(`${val}`);
        option_Ans.appendChild(option_Ans_text);

        let unicode = document.createElement("span");
        unicode.setAttribute("id", "unicode");
        optionDiv.appendChild(option);
        optionDiv.appendChild(option_Ans);
        optionDiv.appendChild(unicode);
        questionDiv.appendChild(optionDiv);
        selected_containder.appendChild(optionDiv);
        result_container.appendChild(selected_containder);
      });
      // option values
      let opt1 = selected_containder.children[0].children[1].innerText;
      let opt2 = selected_containder.children[1].children[1].innerText;
      let opt3 = selected_containder.children[2].children[1].innerText;
      let opt4 = selected_containder.children[3].children[1].innerText;
      let opt5 = selected_containder.children[4].children[1].innerText;

      let selected_value = questionsArray[i].slected_value;
      let correct_value = questionsArray[i].correct;
      // check option 1
      if (
        (selected_value === opt1 && selected_value === correct_value) ||
        (correct_value === opt1 && selected_value !== undefined)
      ) {
        selected_containder.children[0].style.border = "2px solid green";
        selected_containder.children[0].children[2].innerHTML = "✓";
        selected_containder.children[0].children[2].style.color = "green";
      } else if (questionsArray[i].slected_value === opt1) {
        selected_containder.children[0].style.border = "2px solid red";
        selected_containder.children[0].children[2].innerHTML = "✘";
        selected_containder.children[0].children[2].style.color = "red";
      } else if (questionsArray[i].slected_value === undefined) {
        selected_containder.children[0].style.border = "2px solid grey";
        selected_containder.children[0].children[2].innerHTML = "";
        selected_containder.children[0].children[2].style.color = "grey";
      }

      // check option 2
      if (
        (selected_value === opt2 && selected_value === correct_value) ||
        (correct_value === opt2 && selected_value !== undefined)
      ) {
        selected_containder.children[1].style.border = "2px solid green";
        selected_containder.children[1].children[2].innerHTML = "✔";
        selected_containder.children[0].children[2].style.color = "green";
      } else if (selected_value === opt2) {
        selected_containder.children[1].style.border = "2px solid red";
        selected_containder.children[1].children[2].innerHTML = "✘";
        selected_containder.children[1].children[2].style.color = "red";
      } else if (questionsArray[i].slected_value === undefined) {
        selected_containder.children[1].style.border = "2px solid grey";
        selected_containder.children[1].children[2].innerHTML = "";
        selected_containder.children[1].children[2].style.color = "grey";
      }

      // check option 3
      if (
        (selected_value === opt3 && selected_value === correct_value) ||
        (correct_value === opt3 && selected_value !== undefined)
      ) {
        selected_containder.children[2].style.border = "2px solid green";
        selected_containder.children[2].children[2].innerHTML = "✓";
        selected_containder.children[0].children[2].style.color = "green";
      } else if (selected_value === opt3) {
        selected_containder.children[2].style.border = "2px solid red";
        selected_containder.children[2].children[2].innerHTML = "✘";
        selected_containder.children[2].children[2].style.color = "red";
      } else if (questionsArray[i].slected_value === undefined) {
        selected_containder.children[2].style.border = "2px solid grey";
        selected_containder.children[2].children[2].innerHTML = "";
        selected_containder.children[2].children[2].style.color = "grey";
      }

      // check option 4
      if (
        (selected_value === opt4 && selected_value === correct_value) ||
        (correct_value === opt4 && selected_value !== undefined)
      ) {
        selected_containder.children[3].style.border = "2px solid green";
        selected_containder.children[3].children[2].innerHTML = "✓";
        selected_containder.children[0].children[2].style.color = "green";
      } else if (selected_value === opt4) {
        selected_containder.children[3].style.border = "2px solid red";
        selected_containder.children[3].children[2].innerHTML = "✘";
        selected_containder.children[3].children[2].style.color = "red";
      } else if (questionsArray[i].slected_value === undefined) {
        selected_containder.children[3].style.border = "2px solid grey";
        selected_containder.children[3].children[2].innerHTML = "";
        selected_containder.children[3].children[2].style.color = "grey";
      }

      // check option 5
      if (
        (selected_value === opt5 && selected_value === correct_value) ||
        (correct_value === opt5 && selected_value !== undefined)
      ) {
        selected_containder.children[4].style.border = "2px solid green";
        selected_containder.children[4].children[2].innerHTML = "✓";
        selected_containder.children[0].children[2].style.color = "green";
      } else if (selected_value === opt5) {
        selected_containder.children[4].style.border = "2px solid red";
        selected_containder.children[4].children[2].innerHTML = "✘";
        selected_containder.children[4].children[2].style.color = "red";
      } else if (questionsArray[i].slected_value === undefined) {
        selected_containder.children[4].style.border = "2px solid grey";
        selected_containder.children[4].children[2].innerHTML = "";
        selected_containder.children[4].children[2].style.color = "grey";
      }

      let quiz_output = document.createElement("div");
      quiz_output.setAttribute("id", "quizOutput");

      let table_1 = document.createElement("div");
      table_1.setAttribute("id", "table_1");
      let attempt = document.createElement("span");
      attempt.innerHTML = "Attempt";
      let attempt_output = document.createElement("span");
      attempt_output.setAttribute("class", "users_responce");
      if (questionsArray[i].slected_value === questionsArray[i].correct) {
        attempt_output.innerHTML = "Correct";
        attempt_output.setAttribute("id", "attempt_correct");
      }
      else if (questionsArray[i].slected_value === undefined) {
        attempt_output.innerHTML = "Ignored";
        attempt_output.setAttribute("style", "color:grey");
        attempt_output.setAttribute("id", "attempt_correct");
      } else {
        attempt_output.innerHTML = "Incorrect";
        attempt_output.setAttribute("id", "attempt_inncorrect");
      }
      table_1.appendChild(attempt);
      table_1.appendChild(attempt_output);

      let table_2 = document.createElement("div");
      table_2.setAttribute("id", "table_2");
      let your_Ans = document.createElement("span");
      your_Ans.innerHTML = "Your Ans";
      let selectedOption = document.createElement("span");
      selectedOption.setAttribute("class", "users_responce");
      if (questionsArray[i].slected_option) {
        selectedOption.innerHTML = `${questionsArray[i].slected_option}`;
      } else {
        selectedOption.innerHTML = `--`;
        selectedOption.setAttribute("style", "color:grey");
      }
      table_2.setAttribute("id", "table_2");
      table_2.appendChild(your_Ans);
      table_2.appendChild(selectedOption);

      let table_3 = document.createElement("div");
      table_3.setAttribute("id", "table_3");
      let correct_Ans = document.createElement("span");
      correct_Ans.innerHTML = "Correct Ans";
      let correct_option = document.createElement("span");
      correct_option.setAttribute("class", "users_responce defalut_correct");

      if (questionsArray[i].correct === questionsArray[i].options[0]) {
        correct_option.innerHTML = "a";
        table_3.appendChild(correct_Ans);
      }
      if (questionsArray[i].correct === questionsArray[i].options[1]) {
        correct_option.innerHTML = "b";
        table_3.appendChild(correct_Ans);
      }
      if (questionsArray[i].correct === questionsArray[i].options[2]) {
        correct_option.innerHTML = "c";
        table_3.appendChild(correct_Ans);
      }
      if (questionsArray[i].correct === questionsArray[i].options[3]) {
        correct_option.innerHTML = "d";
        table_3.appendChild(correct_Ans);
      }
      if (questionsArray[i].correct === questionsArray[i].options[4]){
        correct_option.innerHTML = "e";
        table_3.appendChild(correct_Ans);
      }
      else if(questionsArray[i].selected_value === undefined && questionsArray[i].slected_option === undefined){
        correct_option.innerHTML = "--";
        correct_option.setAttribute("style", "color:grey");
        table_3.appendChild(correct_Ans);
      }
      table_3.appendChild(correct_option);

      quiz_output.appendChild(table_1);
      quiz_output.appendChild(table_2);
      quiz_output.appendChild(table_3);

      let quiz_solution = document.createElement("div");
      quiz_solution.setAttribute("id", "quiz_solution");
      let quiz_name = document.createElement("span");
      quiz_name.innerHTML = "Solution";

      let solution_Text = document.createElement("span");
      solution_Text.setAttribute("id", "solution_Text");
      solution_Text.innerHTML = `${questionsArray[i].Explanation}`;
      quiz_solution.appendChild(quiz_name);
      quiz_solution.appendChild(solution_Text);
      result_container.appendChild(quiz_output);

      if (questionsArray[i].correct !== questionsArray[i].slected_value 
        && questionsArray[i].slected_value !== undefined
        && questionsArray[i].Explanation !== undefined
      ) 
      {
        result_container.appendChild(quiz_solution);
      }
    }
// quiz retake
  let retake_btn = document.createElement("button");
  retake_btn.setAttribute("id", "retake_button");
  retake_btn.setAttribute("onclick", "location.reload()");
  retake_btn.innerText = "Retake";
  result_div.appendChild(retake_btn);
  document.getElementById("_container").style.display = "none";
  document.getElementById("result_section").style.display = "block";
  let line_break = document.createElement("hr");
  result_div.appendChild(line_break)
}
