import React, {useState, useEffect} from 'react'
import Characters from './Character'
import axios from 'axios';



// function to get the data from the axios api and out put it on the screen from the Character.js file
function CharList (){
    //consoling axios to look through the starwars api
    console.log(axios.get('https://swapi.py4e.com/api/people/'))

    // stating the state of the data
    const [data, setData] = useState([])

    //looping through to get the data I need on the first render.
    useEffect(()=> {
        axios.get('https://swapi.py4e.com/api/people/')
        .then(res => {
            setData(res.data.results);
            console.log(setData(res.data.results));
        })
    }, [])

    return(
        <div>
            <div>
                {data.map(char => {
                    return(
                        <Characters card={char} key={char.name}/>
                    );
                })}
            </div>
        </div>


    )
}

export default CharList;