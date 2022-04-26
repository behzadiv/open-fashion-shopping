import "./Loading.css"
const Loading = () => {
    return (  
        <section className="loading container">
            <div className="loading-card-container">
                <div className="loading-card-img-container"><span className="loading-card-img"></span></div>
                <span className="loading-card-title"></span>
                <span className="loading-card-price"></span>
            </div>
            <div className="loading-card-container">
                <div className="loading-card-img-container"><span className="loading-card-img"></span></div>
                <span className="loading-card-title"></span>
                <span className="loading-card-price"></span>
            </div>
            <div className="loading-card-container">
                <div className="loading-card-img-container"><span className="loading-card-img"></span></div>
                <span className="loading-card-title"></span>
                <span className="loading-card-price"></span>
            </div>
            <div className="loading-card-container">
                <div className="loading-card-img-container"><span className="loading-card-img"></span></div>
                <span className="loading-card-title"></span>
                <span className="loading-card-price"></span>
            </div>
        </section>
    );
}
 
export default Loading;