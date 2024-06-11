import React , {useRef} from 'react'
import './search-bar.css'
import {Col , Form , FormGroup} from 'reactstrap'
import {BASE_URL} from './../utils/config'

import { useNavigate } from  'react-router-dom';


function SearchBar() {

    const locationRef = useRef(null);
    const distanceRef = useRef(null);
    const maxGroupSizeRef = useRef(null);
    const navigate = useNavigate();


    const searchHandler = async(e) => {

        e.preventDefault();
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

          if(location == '' || distance == '' || maxGroupSize == ''){
            return alert("All fields are required !");
          }

          try {
            const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}` , {
              method:'GET',
            });

            console.log(res, "hello");

            if (!res.ok) {
                return alert('Something went wrong');
            }

            const result = await res.json();


            navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data });
        } catch (error) {
            console.error('Error fetching tours:', error);
            alert('Something went wrong');
        }
    }
 
  return (
     <Col lg = '12'>
        <div className = "search__bar">
           <Form className = "d-flex align-items-center gap-4">
                  <FormGroup className= "d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type = "text" placeholder = "Where are you going?" ref = {locationRef}/>
                    </div>
                  </FormGroup>
                  <FormGroup className= "d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type = "number" placeholder = "Distance k/m" ref = {distanceRef}/>
                    </div>
                  </FormGroup>
                  <FormGroup className= "d-flex gap-3 form__group form__group-last">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type = "number" placeholder = "0" ref = {maxGroupSizeRef}/>
                    </div>
                  </FormGroup>
                  <span className="search__icon" type = "submit" onClick = {searchHandler}><i class="ri-search-line"></i></span>
                 </Form>
        </div>
     </Col>
  )
}

export default SearchBar