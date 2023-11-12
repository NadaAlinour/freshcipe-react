- accessibility stuff:
Instructions must also be provided to define the meaning of the symbols or text. (e.g. required form fields are marked by asterisk " * ") 

- clicking logout from the navbar redirects to login page/ homepage (idk) if user was in account page, otherwise no need to redirect anywhere.

- maybe add a back "link" (maybe it's actually a link idk) but not on the homepage in the navbar

- after successful signup, navigate to login

- still use different classNames with different stylesheets

- set product card clickable areas and what happens on click

# Current bugs:

- ~~Navbar dropdown menu stays open if login icon was clicked -> navigating to login page -> back to main navbar~~

# Notes:

- Phone field formatting
- make api request before navigation and send as route params OR send id and make api request after navigating?
- SUPERMARKETS page
- ~~move click handlers inside card components instead of component where the list is rendered~~
- ~~example: on recipes page, scrolled down, click recipe the "page" shows starting at the recipe details portion rather than from the start (navbar) (scroll to top basically)~~
- ~~change favicon~~
- ~~add the "add recipe to favourites" on the recipe details page~~
- ~~fix breadcrumb navigation and extract id of product collection and recipe from url~~
- ~~change black icons to the darkest grey or any other grey that is not black~~
- fix product card price (when the whole number is more than one digit)
- all products of a recipe should be available mostly
- ~~re-think flow, categories for each market etc etc~~
- re-think suggested products/bestsellers/etc
- change ingredient checkbox on hover
- style print layout
- ~~handle loading~~ the skeleton thingy
- recipe data sent back is text so i need to do something to be able to match a product when i select an ingredient
OKAY ACTUALLY i think i can manually add the product id as part of recipeData for each ingredient
- fix breadcrumbs
- pagination for products and recipes but those that depend on id etc
- check recipe.jsx comments in get recipes by tag
- fix save (heart icon) button 