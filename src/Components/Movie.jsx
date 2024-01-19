import axios from 'axios'
import React, {  useState } from 'react'
import { Button, Card,Col,Row } from 'react-bootstrap';
import './Movie.css'

function Movie() {
  const [movieName, setMovieName] = useState([])
  const [movieDetails, setMovieDetails] = useState("")







  const apiKey = "fa1c9c03";

  const setSearch = async () => {

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`);
    console.log(data);
    setMovieDetails(data);



  };

  const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating);
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= roundedRating ? 'star-filled' : 'star-empty';
      stars.push(<span key={i} className={`fa fa-star ${starClass}`} />);
    }
  
    return <div className="star-rating text-warning">
    {stars}
    <span className="ms-2 text-black fw-bold fs-5">{roundedRating} / 10</span>
  </div>;
  };

  // useEffect(() => {
  //   if (movieName) {
  //     setSearch()
  //   }
  // }, [])

  return (
    <>
     
      <div className='body  p-5'>
      <div className="header bg-black w-100">
   <h2 className='fw-bolder'> CineVilla <img src="http://clipart-library.com/images_k/film-reel-transparent-background/film-reel-transparent-background-20.png" alt=""  style={{width:'150px',height:'80px'}}/></h2>
    </div>
   
       
        <div className='container d-flex justify-content-center'>
          <input type="text" onChange={(e) => setMovieName(e.target.value)} className='  fs-5 fw-bold rounded px-2' placeholder='Enter a movie Name'/>
          <Button onClick={setSearch} className='fw-bolder fs-5 border border-2 border-white'>search</Button>

        </div>

        {
          movieDetails &&(
<div className='container w-75 d-flex justify-content-center mt-5  bg-success-subtle p-2 '>
              <Card className='bg-success-subtle' >
              <Row >
  
               
               <Col md={4} sm={12}>
                  <Card.Img style={{width:'100%',padding:'10px',height:'100%'}}
      variant="top"
      src={movieDetails?.Poster} className='border border-ridge border-white border-4 p-1 rounded'/>
               </Col>
  
                 <Col md={8} sm={12}>
                    <Card.Body>
                      <Card.Title className=' text-warning fs-2  text-uppercase fw-bolder'>{`${movieDetails?.Title||"" } ${movieDetails.Year ? `(${movieDetails.Year})` : ''}`}</Card.Title>
                      <Card.Text>
                       


                      <p className='d-flex'>  <li  className='my-3 me-1 fs-6 fw-medium '><span className=' border border-black border-2 p-1'>UA</span>{movieDetails?.Language}</li>  <li className='m-3 fs-6 fw-medium '>{movieDetails?.Genre}</li> <li className='m-3 fs-6 fw-medium '>{movieDetails?.Runtime}</li></p>

                      <p className='fs-5 fw-medium'><span className='fw-bold  fs-5'> Actors</span> <br /> {movieDetails?.Actors}</p>
                      
                      <p className='fw-bold d-flex ' id='symb'> <span className='bg-black   text-white fw-bolder fs-5 m-3' id='percent'> 
                         {Math.floor(Math.random() * 31) + 60}%</span><span className='m-3'>User View</span>
                        <span className='symbols'><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-bars"></i></span>
                         <span className='symbols'><i class="fa-solid fa-heart"></i></span> 
                         <span className='symbols'><i class="fa-solid fa-bookmark"></i></span>
                         <span className='symbols'><i class="fa-solid fa-star"></i></span>
                         </p>

                     <p className='fs-6 fw-medium'><span className='fw-bold  fs-5'>Overview</span> <br /> {movieDetails?.Plot}</p>
                     <p>{movieDetails?.imdbRating && <StarRating rating={parseFloat(movieDetails.imdbRating)} />}</p>


                     {/* <p>{movieDetails?.imdbRating} </p> */}

                      <p className='fs-5'> <span className='fw-bold  fs-5'>Director </span><br /> {movieDetails?.Director}</p>
                     
                     
                      
                     
    
                      </Card.Text>
                     
                    </Card.Body>
                 </Col>
               

              </Row>
              </Card>
  
</div> )
        }

      </div>

    </>
  )
}

export default Movie