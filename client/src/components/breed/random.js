import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Random extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image:"",
            Loading:true
        }

    }

    componentDidMount(){
        const name=this.props.match.params.name
        axios.get(`https://dog.ceo/api/breed/${name}/images/random`)
             .then(response =>{
                 console.log('image',response.data)
                 const image=response.data.message
                 this.setState(() =>({image,Loading:false}))
             })
    }
    render(){
        return(
            <div>
                <h2>Breed Image</h2>
                {this.state.Loading?(
                <div>
                    <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>

                </div>):(
                <div>
                     <h4>Breed-<b>{this.props.match.params.name}</b></h4>
                     <img src= {this.state.image} /><br/>

                </div>)}
               
                <Link to='/users/breedlist'className="btn btn-dark">Back</Link>
            </div>
        )
    }
}
export default Random