document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // for showing the plese wait while data can't be fached
    const mainsec = document.getElementById("mainsec");
    const accessolddiv1 = document.getElementById("div1");
    if (accessolddiv1 != null) {
      accessolddiv1.remove();
    }
    let div1 = document.createElement("div");
    div1.innerHTML = "plese wait....";
    mainsec.appendChild(div1);

    const url = document.getElementById("url").value; // Get the URL from the input field

    try {
      const response = await fetch("/searching", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: url }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Handle the data and update the DOM as needed
      console.log(data); // Check the response in the console
      // const mainsec = document.getElementById("mainsec")
      const len = data.result.length;

      if (data.result[0].type == "image/jpeg") {
        div1.remove();
        let div = document.createElement("div");
        div.setAttribute("id", "div1");
        div.innerHTML = "";
        for (let i = 0; i < len; i++) {
          let src = data.result[i].url;
          let no = i + 1;
          div.innerHTML += `<img src=${src}  class="insimage" alt="download img${no}"><a href=${src}  download="image/jpeg" class="downloadanchor" ><button type="submit" class="button1">Download${no} ⬇️</button></a>`;
        }
        mainsec.appendChild(div);
      }
      if (data.result[0].type == "video/mp4") {
        div1.remove();
        let div = document.createElement("div");
        div.setAttribute("id", "div1");
        div.innerHTML = "";
        for (let i = 0; i < len; i++) {
          let src = data.result[i].url;
          div.innerHTML += `<video src=${src} class="insvideo"  controls></video>`;
        }
        mainsec.appendChild(div);
      }
    } catch (error) {
      div1.remove();
      document.getElementById("url").value = "";
      alert(error);
      console.error("Error fetching Instagram data:", error);
      // Handle errors here, e.g., display an error message to the user
    }
  });
});

// const url = 'https://instagram-api39.p.rapidapi.com/instagram/?url=https://www.instagram.com/reel/CMfRFrADxr-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'your-rapid-api-key',
// 		'X-RapidAPI-Host': 'instagram-api39.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
