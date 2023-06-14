const API_URL = "https://www.githubstatus.com/api/v2/summary.json";

const gitStatus = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const ourDiv = document.querySelector(".gitDiv");

  if (response.ok) {
    console.log(data);
    for (let object in data.components) {
      const obj = data.components[object];

      if (obj.name != "Visit www.githubstatus.com for more information") {
        const newP = document.createElement("p");

        switch (obj.status) {
          case "operational":
            newP.className = "opreational title";
            newP.classList.add("operational");
            newP.innerHTML = `${obj.name}<br> (Operational)`;
            break;
          case "partial_outage":
            newP.className = "partial title";
            newP.innerHTML = `${obj.name}<br> (Partial Outage)`;
            break;
          case "degraded_performance":
            newP.className = "degraded title";
            newP.innerHTML = `${obj.name}<br> (Degraded Performance)`;
            break;
          case "major_outage":
            newP.className = "major title";
            newP.innerHTML = `${obj.name}<br> (Major Outage)`;
            break;
        }

        /*         if (obj.status != "operational") {
          newP.setAttribute(
            "style",
            "color:red; background-color:black;padding:8px;"
          );
        } */

        ourDiv.append(newP);
      }
    }
  } else {
    alert(data.message);
  }
};

gitStatus();
