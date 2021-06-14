function solve() {
    let l = document.querySelector("div.wrapper > section > div > form > button");
    l.type = "button";
    let [sAddTask, sOpen, sProgress, sComplete] = document.getElementsByTagName(
      "section"
    );

    sAddTask.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        //console.log(e.target);
        let taskName = document.getElementById("task");
        let taskDesc = document.getElementById("description");
        let taskDueDate = document.getElementById("date");

        if (
          taskName.value === "" ||
          taskDesc.value === "" ||
          taskDueDate.value === ""
        ) {
          //console.log("not good");
          return;
        }
        let startBtn = el("button", "Start");
        startBtn.setAttribute("class", "green");
        let deleteBtn = el("button", "Delete");
        deleteBtn.setAttribute("class", "red");
        let div = document.createElement("div");
        div.setAttribute("class", "flex");
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        let taskCard = el(
          "article",
          el("h3", `${taskName.value}`),
          el("p", `Description: ${taskDesc.value}`),
          el("p", `Due Date: ${taskDueDate.value}`),
          div
        );
        sOpen.children[1].appendChild(taskCard);
      }
    });

    sOpen.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.nodeName === "BUTTON") {
        let taskCard = e.target.parentElement.parentElement;
        console.log(taskCard);
        if (e.target.textContent === "Start") {
          //let nextField = taskCard.parentElement.nextElementSibling;
          let newBtn = el("button", "Finish");
          newBtn.setAttribute("class", "orange");
          e.target.parentElement.appendChild(newBtn);
          e.target.parentElement.removeChild(e.target);
          sProgress.children[1].appendChild(taskCard);
        }
        if (e.target.textContent === "Delete") {
          taskCard.parentElement.removeChild(taskCard);
        }
      }
    });

    sProgress.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        let taskCard = e.target.parentElement.parentElement;
        //console.log(taskCard);
        if (e.target.textContent === "Finish") {
          let nextField = taskCard.parentElement.nextElementSibling;

          e.target.parentElement.parentElement.removeChild(
            e.target.parentElement
          );
          sComplete.children[1].appendChild(taskCard);
        }
        if (e.target.textContent === "Delete") {
          taskCard.parentElement.removeChild(taskCard);
        }
      }
    });

    function el(tagName, ...content) {
      const result = document.createElement(tagName);
      content.forEach((e) => {
        if (typeof e === "string") {
          result.textContent = e;
        } else {
          result.appendChild(e);
        }
      });
      return result;
    }
  }
