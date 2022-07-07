import './Card.css'
import dayjs from "dayjs";
const Card = ({ item }) => {
    
  return (
    <div className="card">
      <div className="card_content">
        <div className="cardheader">
        <img src={item?.image} className="card_img" alt="" />
        </div>
        <div className="card-body">
        <h3 className="card-price">${parseInt(item?.price/12)}/month</h3>
          <h2 className="card-title">
            {item?.name} 
          </h2>
          <p className="card-text">{item?.address}</p>
          <div className='card-bottom'>
          <p className="card-text">{item?.type}</p>
          <p className="card-text">
            {dayjs(item?.date).format("DD MMMM YYYY")}
          </p>
          </div>
          
         
        </div>
        
      </div>
    </div>
  );
};
export default Card;