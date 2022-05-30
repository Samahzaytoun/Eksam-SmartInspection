const servicesContainer = document.getElementById("service_container_content");

getServices(API_URL);

async function getServices(url) {
  try {
    const services = await fetch(url + "/services?categories=8");
    const servicesData = await services.json();

    const otherServices = await fetch(url + "/services?categories=7");
    const otherServicesData = await otherServices.json();

    const loaders = document.querySelectorAll(".loader");
    loaders.forEach((item) => item.classList.add("hide"));
    showServices(servicesData);
    showOtherServices(otherServicesData);
  } catch (error) {
    console.log(error);
  }
}

function showServices(services) {
 
  servicesContainer.innerHTML = "";

  services.forEach((service) => {
    const { id, content, title, x_featured_media } = service;

    const serviceEle = document.createElement("div");
    serviceEle.classList.add("service__container");

    serviceEle.innerHTML = `
        <div class="">
          <img
            src="${x_featured_media}"
            alt=""
            style="width:500px"
          />
          <p class="service__title">${stripHtml(title.rendered)}</p>
        </div>
        <div class="service__detail">
          <h3>${stripHtml(title.rendered)}</h3>
          <p>${stripHtml(content.rendered)}</p>
        </div>
        `;

    servicesContainer.appendChild(serviceEle);
  });
}

function showOtherServices(services) {

  const otherServicesContainer = document.getElementById("other_service_grid");
  otherServicesContainer.innerHTML = "";

  console.log(services);

  services.forEach((service) => {
    const { id, content, title, x_featured_media } = service;

    const serviceEle = document.createElement("div");
    serviceEle.classList.add("other_service_item");

    serviceEle.innerHTML = `
    <img
       src="${x_featured_media}"
       alt=""
       style="width:500px";
     />
     <h3>${stripHtml(title.rendered)}</h3>
     <p>${stripHtml(content.rendered)}</p>
        `;

    otherServicesContainer.appendChild(serviceEle);
  });
}
