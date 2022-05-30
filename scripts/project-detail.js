//get id in url
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const {project_id} = params;

showProject();
async function showProject() {
  try {
    const resp = await fetch(API_URL + '/projects/' + project_id);
    const respData = await resp.json();
    if (respData.length !== 0) {

      document.title = `Smart Inspection | ${respData.title.rendered}`;
      document.querySelector('.loader').classList.add('hide');
      document.getElementById('project_detail').innerHTML = '';
      document.getElementById('project_detail').innerHTML = `


        <h1>${stripHtml(respData.title.rendered)}</h1>

        <div class="projectShow">
            <a href="#project_id_${respData.id}">
             <img src="${respData.x_featured_media_original}" alt="" />
           </a>
          <div class="projectShow_img">
            <img
              src="https://images.unsplash.com/photo-1586342454878-408aa841a9b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb25zdHJ1Y3Rpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxjb25zdHJ1Y3Rpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>

        <div class="container projectShow_detail">
          <p class="projectShow_desc">${stripHtml(respData.content.rendered)}</p>

        <a href="#" class="lightbox" id="project_id_${respData.id}">
            <span style="background-image: url('${respData.x_featured_media_original}')"></span>
        </a>
          <!-- <center>
          <button class="projectShow_btn">Mer Info</button>
        </center> -->
        </div>

          `;
    }
  } catch (error) {
    console.log(error);
  }
}
