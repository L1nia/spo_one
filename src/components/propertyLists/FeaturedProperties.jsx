import useFetch from '../../hooks/fetch';
import './featuredProperties.css'

export const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("http://localhost:8000/api/hotels?featured=true&limit=3");

  return (
      <div className="fplist">
          {loading ?( "Пожалуйста, подождите...") : (<>
              {data.map(item => (
                  <div className="fpItem" key={item?._id}>
                  <img src={item?.photos[0]} alt="" className='fpImg' />
                  <span className='fpName'>{item?.name}</span>
                  <span className='fpCity'>{item?.city}</span>
                  <span className='fpPrice'>{item?.lowPrice}</span>
                  {item?.rating && <div className='fpRating'>
                          <button>{item?.rating}</button>
                      <span>Замечательно</span>
                  </div>}
              </div>
              ))}
          </>)}
         
    </div>
  )
}

export default FeaturedProperties 
