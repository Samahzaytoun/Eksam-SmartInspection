//kommer fra main.js
index(API_URL);
async function index(url) {
  try {
    //service swiper
    const serviceSwiperWrapper = document.getElementById('serviceSwiperWrapper');
    const services = await fetch(url + '/services');
    const servicesData = await services.json();

    //project swiper
    const projectSwiperWrapper = document.getElementById('projectSwiperWrapper');
    const projects = await fetch(url + '/projects');
    const projectsData = await projects.json();

    const loaders = document.querySelectorAll('.loader');
    loaders.forEach(item => item.classList.add('hide'));

    serviceSwiperWrapper.innerHTML = '';
    servicesData.forEach(service => {
      const {id, title, x_featured_media} = service;
      const serviceEle = document.createElement('div');
      serviceEle.classList.add('swiper-slide');

      serviceEle.innerHTML = `
            <h3>${stripHtml(title.rendered)}</h3>
            <div class="img_container">
              <img
                src="${x_featured_media}"
                alt=""
              />
            </div>
        `;

      serviceSwiperWrapper.appendChild(serviceEle);
    });

    projectSwiperWrapper.innerHTML = '';
    projectsData.forEach(project => {
      const {id, title, x_featured_media} = project;
      const projectEle = document.createElement('div');
      projectEle.classList.add('swiper-slide');

      projectEle.innerHTML = `

            <div class="img_container">
              <img
                src="${x_featured_media}"
                alt=""
              />
            </div>
            <h3>${title.rendered}</h3>

    
        `;

      projectSwiperWrapper.appendChild(projectEle);
    });
  } catch (error) {
    console.log(error);
  }
}
