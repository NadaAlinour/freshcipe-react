import Rice from "../assets/images/rice.png"
export default function CategoryCard(props) {
    const {title} = props;
    return (
        <>
            <div className="category-card">
                <img src={Rice}></img>
                <p>{title}</p>
            </div>
        </>
    )
}