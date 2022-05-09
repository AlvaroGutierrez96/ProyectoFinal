import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='home'>
        <div className='home-text'>
            <h2>CATEGORIAS</h2>
        </div>
        <div className='home-cards'>
            <Link to='/pc'>
                <div className='home-cards-center'>
                    <img className='img-cat' src='https://cdn.pccomponentes.com/img/repositorio/familia/familia-portatiles_gaming-768x504-producto.jpg' alt='' />
                    <div className='home-card-text'>
                        <h3>Ordenadores</h3>
                    </div>
                </div>
            </Link>
            <Link to='/consolas'>
                <div className='home-cards-center'>
                    <img className='img-cat' src='https://i.blogs.es/ad8440/ps4xbox/1366_2000.jpg' alt='' />
                    <div className='home-card-text'>
                        <h3>Consolas</h3>
                    </div>
                </div>
            </Link>
            <Link to='/mobile'>
                <div className='home-cards-center'>
                    <img className='img-cat' src='https://tuxiaomi.es/wp-content/uploads/2022/04/movil-xiaomi-12-black.jpg' alt='' />
                    <div className='home-card-text'>
                        <h3>Móviles</h3>
                    </div>
                </div>
            </Link>
            
            <Link to='/Tv'>
                <div className='home-cards-center'>
                    <img className='img-cat' src='https://media.revistagq.com/photos/5f523f949d4e3d875292af6f/master/w_668,h_500,c_limit/mejores-televisores-2.jpg' alt='' />
                    <div className='home-card-text'>
                        <h3>TV's</h3>
                    </div>
                </div>
            </Link>

            <Link to='/news'>
                <div className='home-cards-center-news'>
                    <img className='img-news' src='https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg' alt='' />
                    <div className='home-card-text-news'>
                        {/* <h3>News</h3> */}
                    </div>
                </div>
            </Link>
        </div>
    </div>
)
}




export default HomePage