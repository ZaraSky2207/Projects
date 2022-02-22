export const Product = (props) => {


const {
        name, features, images, price
    } = props.product



return (
    <article className="product">
        <h3>{name}</h3>

        <img src={images[0].imageSrc} />

        

        <ul>
           {features.map((feature, idx) => {
            return <li>{feature}</li>
           })}
           
        </ul>

    <p>&pound;6.99</p>
    <div className="promo-blocks__actions">
        <a className="button--anchor">
            Full Details
        </a>
        <button>Add to cart</button>
    </div>
    </article>
    )
}
