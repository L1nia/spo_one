import "./searchItem.css";
import { Link } from "react-router-dom";

export const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="sImg" />
      <div className="sDesc">
        <h1 className="sTitle">{item.name}</h1>
        <span className="sDistance">100м от аэропорта</span>
        <span className="sTaxi">Бесплатное такси</span>
        <span className="sSubTitle">Пляж и гольф клуб</span>
        <span className="sFeatures">2 ванные комнаты, семейная кровать </span>
        <span className="sCancel">Отменить бесплатное бронирование</span>
        <span className="sCancelSubTitle">
          Вы всегда можете отменить бронирование и получить 100% возврат средств.{" "}
        </span>
      </div>
      <div className="sDetails">
        {item.rating && (
          <div className="sRating">
            <span>Замечательно</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="sDetailText">
          <span className="sPrice">Цена на топливо: {item.lowCost}</span>
          <span className="sTaxes">Включает налоги и сборы</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="sCheckButton">Посмотреть в наличии</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
