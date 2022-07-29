import { HeaderListItem } from "./HeaderItem"
import {HeaderList} from "./HeaderList"


export function Header ({items, increaseQuantity, getItemImagePath}) {
    return (
        <header id="store">
            <h1>Grocero</h1>
            <HeaderList 
                items={items}
                increaseQuantity={increaseQuantity}
                getItemImagePath={getItemImagePath}
            />
            
        </header>
    )
}