

const services = [
    {
        title: "Emergency Plumbing Services",
        description: "Our plumbers are ready to go 24/7 for emergencies, including nights, weekends, and holidays.",
        link: "#",
        image: "image/phone.png" 
    },
    {
        title: "Plumbing and Drains",
        description: "As the largest plumbing and drain service company, we make thousands of repairs every day.",
        link: "#",
        image: "image/plumbing.png" 
    },
    {
        title: "Water Damage",
        description: "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
        link: "#",
        image: "image/water.png"
    },
    {
        title: "Water Heaters",
        description: "From traditional to tankless, we can repair or install water heaters of all kinds.",
        link: "#",
        image: "image/waterheater.png" 
    }
];

const servicesContainer = document.getElementById('services-container');

services.forEach(service => {
    const serviceCard = `
        <div class="bg-white shadow-2xl p-6 rounded-md  relative mt-10 md:mt-0 md:pb-10">
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-200 rounded-full p-2 "style="border: 4px solid #2A1768;">
                <img src="${service.image}" alt="${service.title}" class="h-16 w-16 rounded-full service-image" /> 
            </div>
            <div class="md:pt-10  ">
                <h3 class="text-xl font-semibold text-center text-gray-900">${service.title}</h3>
                <p class="text-center text-gray-600 mt-2">${service.description}</p>
                <div class="mt-4 text-center">
                    <a href="${service.link}" class="text-purple-700 font-semibold hover:underline">EXPLORE THIS SERVICE →</a>
                </div>
            </div>
        </div>
    `;
    servicesContainer.innerHTML += serviceCard;
});

// GSAP hover animation for rotating the images 360 degrees
const images = document.querySelectorAll('.service-image');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        gsap.to(image, { rotation: 360, duration: 1 });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image, { rotation: 0, duration: 1 });
    });
});
