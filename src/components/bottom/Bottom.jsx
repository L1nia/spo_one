import './bottom.css'

export const Bottom = () => {
  return (
      <div className='bottom'>
          <h1 className="bottomTile">
              HOTEL-BOOKING
          </h1>
          <span className='bottomDesc'>Зарегистрируйтесь сегодня и получите потрясающие скидки</span>
          <div className="bottomInputContainer">
              <input className='bottomInput' type="text" placeholder='Введите вашу почту' />
              <button>Присоединяйся прямо сейчас</button>
        </div>
      </div>
  )
}

export default Bottom
