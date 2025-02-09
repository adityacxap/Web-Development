function filterCars() {
    let brand = document.getElementById("brand").value.toLowerCase();
    let maxPrice = document.getElementById("price").value;
    let location = document.getElementById("location").value.toLowerCase();

    let cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        let carBrand = car.dataset.brand.toLowerCase();
        let carPrice = parseInt(car.dataset.price);
        let carLocation = car.dataset.location.toLowerCase();

        if ((brand === "" || carBrand.includes(brand)) &&
            (maxPrice === "" || carPrice <= maxPrice) &&
            (location === "" || carLocation.includes(location))) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
}
