import './App.css';

function App()
{
    return (
        <div>
            <h1>Therichpost.com</h1>
            <div class="gallery-wrapper">

                <div class="image-wrapper">
                    <a href="#lightbox-image-1">
                        <img src="assets/photo1small.jfif" alt="" />
                        <div class="image-title">Cat staring at me</div>
                    </a>
                </div>
                <div class="image-wrapper">
                    <a href="#lightbox-image-2">
                        <img src="assets/photo2small.jfif" alt="" />
                        <div class="image-title">Cat playing with mouse</div>
                    </a>
                </div>
                <div class="image-wrapper">
                    <a href="#lightbox-image-3">
                        <img src="assets/photo3small.jfif" alt="" />
                        <div class="image-title">Cat turns away</div>
                    </a>
                </div>
            </div>

            <div class="gallery-lightboxes">

                <div class="image-lightbox" id="lightbox-image-1">
                    <div class="image-lightbox-wrapper">
                        <a href="#" class="close"></a>
                        <a href="#lightbox-image-3" class="arrow-left"></a>
                        <a href="#lightbox-image-2" class="arrow-right"></a>
                        <img src="assets/photo1big.jfif" alt="" />
                        <div class="image-title">Cat staring at me</div>
                    </div>
                </div>

                <div class="image-lightbox" id="lightbox-image-2">
                    <div class="image-lightbox-wrapper">
                        <a href="#" class="close"></a>
                        <a href="#lightbox-image-1" class="arrow-left"></a>
                        <a href="#lightbox-image-3" class="arrow-right"></a>
                        <img src="assets/photo2big.jfif" alt="" />
                        <div class="image-title">Cat playing with mouse</div>
                    </div>
                </div>

                <div class="image-lightbox" id="lightbox-image-3">
                    <div class="image-lightbox-wrapper">
                        <a href="#" class="close"></a>
                        <a href="#lightbox-image-2" class="arrow-left"></a>
                        <a href="#lightbox-image-1" class="arrow-right"></a>
                        <img src="assets/photo3big.jfif" alt="" />
                        <div class="image-title">Cat turns away</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;