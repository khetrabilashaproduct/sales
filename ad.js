document.addEventListener("DOMContentLoaded", () => {
  const workSection = document.getElementById('work');
  const sliderControls = document.querySelector('.slider-controls');
  
  let currentIndexCustom = 0;
  let currentIndexRepairs = 0;
  let currentIndexClients = 0;

  // Fetching data from JSON files
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Dynamically render work items with slider functionality
      const customSlider = document.createElement('div');
      customSlider.classList.add('slider-container');
      const customWorkSlider = document.createElement('div');
      customWorkSlider.classList.add('work-slider');
      data.work.custom.forEach(item => {
        const workSlide = document.createElement('div');
        workSlide.classList.add('work-slide');
        workSlide.innerHTML = `
          <div class="work-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="text">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `;
        customWorkSlider.appendChild(workSlide);
      });
      customSlider.appendChild(customWorkSlider);
      workSection.appendChild(customSlider);

      // Create slider controls for Custom PC Builds
      const updateCustomSlider = () => {
        customWorkSlider.style.transform = `translateX(-${currentIndexCustom * 100}%)`;
      };
      const nextCustomSlide = () => {
        currentIndexCustom = (currentIndexCustom + 1) % data.work.custom.length;
        updateCustomSlider();
      };
      const prevCustomSlide = () => {
        currentIndexCustom = (currentIndexCustom - 1 + data.work.custom.length) % data.work.custom.length;
        updateCustomSlider();
      };

      const customSliderControls = document.createElement('div');
      customSliderControls.classList.add('slider-controls');
      customSliderControls.innerHTML = `
        <button onclick="prevCustomSlide()">&#8249;</button>
        <button onclick="nextCustomSlide()">&#8250;</button>
      `;
      customSlider.appendChild(customSliderControls);

      // Render the System Repairs slider
      const repairsSlider = document.createElement('div');
      repairsSlider.classList.add('slider-container');
      const repairsWorkSlider = document.createElement('div');
      repairsWorkSlider.classList.add('work-slider');
      data.work.repairs.forEach(item => {
        const workSlide = document.createElement('div');
        workSlide.classList.add('work-slide');
        workSlide.innerHTML = `
          <div class="work-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="text">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `;
        repairsWorkSlider.appendChild(workSlide);
      });
      repairsSlider.appendChild(repairsWorkSlider);
      workSection.appendChild(repairsSlider);

      const updateRepairsSlider = () => {
        repairsWorkSlider.style.transform = `translateX(-${currentIndexRepairs * 100}%)`;
      };
      const nextRepairsSlide = () => {
        currentIndexRepairs = (currentIndexRepairs + 1) % data.work.repairs.length;
        updateRepairsSlider();
      };
      const prevRepairsSlide = () => {
        currentIndexRepairs = (currentIndexRepairs - 1 + data.work.repairs.length) % data.work.repairs.length;
        updateRepairsSlider();
      };

      const repairsSliderControls = document.createElement('div');
      repairsSliderControls.classList.add('slider-controls');
      repairsSliderControls.innerHTML = `
        <button onclick="prevRepairsSlide()">&#8249;</button>
        <button onclick="nextRepairsSlide()">&#8250;</button>
      `;
      repairsSlider.appendChild(repairsSliderControls);

      // Render Client Highlights slider
      const clientsSlider = document.createElement('div');
      clientsSlider.classList.add('slider-container');
      const clientsWorkSlider = document.createElement('div');
      clientsWorkSlider.classList.add('work-slider');
      data.work.clients.forEach(item => {
        const workSlide = document.createElement('div');
        workSlide.classList.add('work-slide');
        workSlide.innerHTML = `
          <div class="work-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="text">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `;
        clientsWorkSlider.appendChild(workSlide);
      });
      clientsSlider.appendChild(clientsWorkSlider);
      workSection.appendChild(clientsSlider);

      const updateClientsSlider = () => {
        clientsWorkSlider.style.transform = `translateX(-${currentIndexClients * 100}%)`;
      };
      const nextClientsSlide = () => {
        currentIndexClients = (currentIndexClients + 1) % data.work.clients.length;
        updateClientsSlider();
      };
      const prevClientsSlide = () => {
        currentIndexClients = (currentIndexClients - 1 + data.work.clients.length) % data.work.clients.length;
        updateClientsSlider();
      };

      const clientsSliderControls = document.createElement('div');
      clientsSliderControls.classList.add('slider-controls');
      clientsSliderControls.innerHTML = `
        <button onclick="prevClientsSlide()">&#8249;</button>
        <button onclick="nextClientsSlide()">&#8250;</button>
      `;
      clientsSlider.appendChild(clientsSliderControls);
    })
    .catch(error => console.error('Error loading data:', error));
});
