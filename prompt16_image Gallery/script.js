document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image > img");

    images.forEach(image => {
        image.addEventListener("click", function() {
            
            const modal = document.createElement("div");
            modal.classList.add("modal");

            
            const modalImage = document.createElement("img");
            modalImage.src = this.src;
            modalImage.classList.add("modal-image");

            
            modal.appendChild(modalImage);

            
            document.body.appendChild(modal);

            
            modal.addEventListener("click", function(event) {
                if (event.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});
