import Placeholder from "/src/assets/images/placeholder-recipe.jpg";
import { Link } from 'react-scroll';
export default function () {
    return (
        <div className="recipe-info-parent">
            {/* recipe info */}
            <div className="recipe-info-container">
                <div className="recipe-info">
                    <h1>Key Lime Pie</h1>
                    <p>Key Lime Pie description placeholder Key Lime Pie description placeholder
                        Key Lime Pie description placeholder Key Lime Pie description placeholder
                        Key Lime Pie description placeholder Key Lime Pie description placeholder
                    </p>
                    <p><b>time to prepare:</b> 30 minutes</p>
                    <p><b>ratings:</b></p>
                    <p><b>tags:</b> (recipe category, diet etc)</p>

                    <span>
                        <Link to="recipe-steps" smooth={true} duration={750}>Recipe</Link>
                        <Link to="recipe-nutrition" smooth={true} duration={750}>Nutritional Values</Link>
                    </span>

                </div>

                <div className="recipe-image-container">
                    <img src={Placeholder}></img>
                </div>
            </div>


            <div className="ingredients-steps-container">

                {/* recipe ingredients */}
                <div id="recipe-steps" className="recipe-ingredients-container">
                    <h1>Ingredients</h1>
                    <ul>
                        <li><b>1 <small>1/2</small> cups</b> graham cracker crumbs</li>
                        <li><b><small>1/4</small> cup</b> packed light brown sugar Kosher salt</li>
                        <li><b>6 tbsp.</b> unsalted butter, melted</li>
                        <li><b>8 large</b> egg yolks</li>
                        <li><b>2 (14-oz.) cans</b> sweetened condensed milk</li>
                        <li><b>1 <small>1/4</small> cups</b> fresh key lime juice (or fresh lime juice)</li>
                        <li>Unsweetened whipped cream</li>
                        <li>Key lime or lime slices, for garnish</li>
                    </ul>

                    <div className="ingredients-btn-container">
                        <button>Shop ingredients</button>
                    </div>

                </div>


                {/* recipe steps */}
                <div className="recipe-steps-container">
                    <h1>Steps</h1>
                    <ul>
                        <li><p><b>1</b> Preheat the oven to 350&deg;. In a medium bowl
                            whisk the graham cracker crumbs with the brown sugar and a pinch of salt.
                            Add the melted butter and mix until the crumbs are evenly moistened.
                            To form the crust, press the crumbs evenly over the bottom and up the side
                            of a 10-inch metal pie plate.
                            Bake for about 10 minutes, until just set. Let cool completely.
                        </p>
                        </li>

                        <li><p><b>2</b> In a bowl whisk the egg yolks with the condensed milk,
                            lime juice and a pinch of salt until smooth. Pour the filling into the
                            cooled crust and transfer to the oven. Immediately lower the oven to 325&deg;,
                            and bake for 20 to 25 minutes, until set around the edges and slightly jiggly
                            in the center. Let cool to room temperature,
                            then refrigerate until firm, at least 6 hours or overnight.
                        </p>
                        </li>

                        <li><p><b>3</b> Mound the whipped cream on the pie,
                            and garnish with key lime slices.
                        </p>
                        </li>
                
                       
                    </ul>
                </div>
            </div>


            {/* recipe nutritional info */}
            <div id="recipe-nutrition" className="recipe-nutrition-container">
                <div className="nutrition-recipe-image">
                    <img src={Placeholder}></img>
                </div>

                <div className="nutrition-values-container">
                    
                    <p className="nutrition-header"><h1>Nutritional Values</h1>(Per portion)</p>
                        <span>
                            <p><b>Energy</b></p>
                            <p>425 kcal</p>
                        </span>

                        <span>
                            <p><b>Total Fat</b></p>
                            <p>15g</p>
                        </span>

                        <span>
                            <p><b>Saturated Fat</b></p>
                            <p>0g</p>
                        </span>

                        <span>
                            <p><b>Dietary Fiber</b></p>
                            <p>5g</p>
                        </span>

                        <span>
                            <p><b>Carbohydrates</b></p>
                            <p>65g</p>
                        </span>

                        <span>
                            <p><b>Sugars</b></p>
                            <p>12g</p>
                        </span>

                        <span>
                            <p><b>Protein</b></p>
                            <p>3g</p>
                        </span>
                  

                </div>

                <div className="recipe-tags">
                    
                </div>

            </div>

        </div>
    )
}