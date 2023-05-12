import Rice from "../assets/images/rice.png"
import ImagePlaceholder from "../assets/images/placeholder-image.png"
export default function CategoryCard(props) {
    const {title} = props;
    return (
        <>
            <div className="category-card" onClick={() => {
                console.log("navigate to browsing page displaying the corresponding products")
            }}>
                <img src={ImagePlaceholder}></img>
                <p>{title}</p>
            </div>
        </>
    )
}