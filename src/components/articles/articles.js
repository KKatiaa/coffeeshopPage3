import ArticlesItem from '../articlesitems/articlesitems'
import '../articles/articles.scss'

const Articles = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ArticlesItem key={id} {...itemProps}/>
        )}) 
    return (
        <ul className="positioning">
            {elements}
        </ul>) 
}

export default Articles;