import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

class Search extends Component {
    render() {
        return (
           <div className="search-panel">
               <Link to={`/brand/${item.category}`}>
                   <Link className="search-jys">娇韵诗</Link>
                   <Link className="search-zrt">自然堂</Link>
                   <Link className="search-ksy">科颜氏</Link>
                   <Link className="search-shk">施华蔻</Link>
                   <Link className="search-ynf">御泥坊</Link>
                   <Link className="search-sk">SK-II</Link>

               </Link>
           </div>
        )
    }
}
