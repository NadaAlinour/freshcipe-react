import ImagePlaceholder from "../assets/images/placeholder-image.png"

export default function CategoryCard(props) {
    const {title, image} = props;
    console.log(image)
    return (
        <>
            <div className="category-card" onClick={() => {
                console.log("navigate to browsing page displaying the corresponding products")
            }}>
                <img src={image}></img>
                <p>{title}</p>
            </div>
        </>
    )
}