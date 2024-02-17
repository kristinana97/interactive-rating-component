let icons = document.querySelectorAll(".rating-icon");
let ratingSelected = false;

icons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        icons.forEach((btn) => {
            btn.classList.remove("rating-selected");
        });
        let values = e.target.dataset.value;
        window.stars = values;
        // console.log("rating: " + values);
        let stars = Array.from({ length: values }, (v, i) => i + 1);
        stars.forEach((star) => {
            document.querySelector(`.rating-icon[data-value="${star}"]`).classList.add("rating-selected");
        });
        let selectedRating = document.querySelector('.selected-rating');
        let selectedRatingValue = window.stars;
        // console.log(selectedRatingValue);
        selectedRating.textContent = selectedRatingValue;
        ratingSelected = true;
    });
});
document.querySelector(".submit").addEventListener("click", (e) => {
    if (!ratingSelected) {
        alert("Please choose rating before submit");
        return; 
    }
    let thanks = document.querySelector('.thanks');
    let mainBoxContent = document.querySelector('.main-box-content');

    thanks.classList.remove('hidden');
    mainBoxContent.classList.add('hidden');
});