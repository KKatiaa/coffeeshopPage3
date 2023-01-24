import '../articlesitems/articleitem.scss';
import Article2 from './article2.png';

const ArticlesItem = (props) => {
    const {name, country, price} = props;

    return (
        <div className='elements'>
            <img src={Article2} alt="q"/>
            <div className='description'>
                <p className="please">{name}</p><br/>
                <p className="please">{country}</p><br/>
                <p className="please">{price + `$`}</p><br/>
            </div>
        </div>
    )
}

export default ArticlesItem;