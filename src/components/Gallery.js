function Gallery() {
    return(
        <div>
            <carousel className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="Sport 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="Sport 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../premium_photo-1664301427534-28b6a53a9c4f.jpg')} className="d-block w-100" alt="Sport 3" />
                    </div>
                </div>
            </carousel>
        </div>
    )
}
export default Gallery;