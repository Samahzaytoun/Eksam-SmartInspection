const projectsContainer = document.getElementById("project_container");

getProjects(API_URL);
showProjectSlider(API_URL);
async function getProjects(url) {
  try {
    const resp = await fetch(url + "/projects");
    const respData = await resp.json();
    if (respData.length !== 0) {
      showProjects(respData);
      document.querySelector(".loader").classList.add("hide");
    }
  } catch (error) {
    console.log(error);
  }
}

function showProjects(projects) {

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const { id, title, excerpt, x_featured_media } = project;
    const projectEle = document.createElement("div");
    projectEle.classList.add("project_item");

    projectEle.innerHTML = `

      <img
            src="${x_featured_media}"
            alt=""
          />
          <p class="project_title">${stripHtml(title.rendered)}</p>
          <p class="project_desc">${stripHtml(excerpt.rendered)}</p>

          <a href="./project-detail.html?project_id=${id}">
            <button class="project_btn">Se Bilder</button>
          </a>
        `;

    projectsContainer.appendChild(projectEle);
  });
}

async function showProjectSlider(url) {
  try {
    const resp = await fetch(url + "/projects?categories=6");
    const respData = await resp.json();
    console.log(respData);
    if (respData.length !== 0) {
      const projectsSliderContainer = document.getElementById(
        "project_container_slider"
      );
      projectsSliderContainer.innerHTML = "";

      respData.forEach((project) => {
        const { id, title, x_featured_media } = project;
        const projectEle = document.createElement("div");
        projectEle.classList.add("swiper-slide");

        projectEle.innerHTML = `

          <a href="./project-detail.html?project_id=${id}">
            <div class="img_container">
              <img
                src="${x_featured_media}"
                alt=""
              />
            </div>
            <h3>${stripHtml(title.rendered)}</h3>
        </a>

        `;

        projectsSliderContainer.appendChild(projectEle);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
