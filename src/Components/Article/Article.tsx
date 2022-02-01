import './Article.css'


interface Props {
    article : string
  }

const Article : React.FC<Props>  = ({article}) => {

    return (
        <div className="Article">
      <div className="Article-box" >
        <div className="Article-text">
            {article}
            </div>
      </div>
  
      
      </div>
    );


}
export default Article;