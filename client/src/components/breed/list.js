import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class BreedList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            breed:'',
            Loading:true
        }
    }
    
    componentDidMount(){
        axios.get("https://dog.ceo/api/breeds/list")
             .then(response =>{
                 const breed=response.data.message
                 this.setState(() =>({breed,Loading:false}))
                

             })
    }

    render(){
        return(
            <div>
                <h2><b>Breed List</b></h2>
                {this.state.Loading?(
                <div>
                     <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>


                </div>):(
                <div>
                      {this.state.breed.length  && this.state.breed.map(breed =>{
                       return<li key={breed._id}><Link to={`/user/${breed}`}>{breed}</Link></li>
                })}


                </div>)}
                
              
            </div>
        )
    }
}

export default BreedList
