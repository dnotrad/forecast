import react, {useEffect, useState} from 'react';
import Main from './Main';
import {weatherApi} from '../api/api';
import Modal from './Modal';
import Loader from '../loader/Loader';

const MainContainer = () => {

    const [isLoader, setIsLoader] = useState(true);
    const [currentGeo, setCurrentGeo] = useState({});
    const [isModal, setIsModal] = useState(false);
    const [locations, setLocations] = useState([]);

    useEffect( () => {
        navigator.geolocation.getCurrentPosition( (data) => {
            weatherApi.byCoord(data.coords.latitude, data.coords.longitude).then( res => {

                let {temp,feels_like} = res.data.main;
                let {name} = res.data;
                let {description,main:icon} = res.data.weather[0];
                setCurrentGeo({temp,feels_like,name,description,icon});
                setIsLoader(false);

            } )
        }, () => {
            alert("Ошибка! Вы не дали доступа к гео-позиции!")
        } );

    }, []);

    useEffect( () => {
        let elements  = JSON.parse( localStorage.getItem('locations') ) || [];
        elements.forEach( elem => getWeatherByName(elem) );
    }, [] )

    useEffect( () => {
        localStorage.setItem( 'locations', JSON.stringify( locations.map( elem => elem.name ) ) )
    }, [locations] )

    const getWeatherByName = (cityName) => {
        if( !locations.some( loc => loc.name == cityName ) ){
            setIsLoader(true);
            weatherApi.byCityName(cityName)
            .then( res => {
    
                let {temp, feels_like} = res.data.main;
                let {description, main:icon} = res.data.weather[0];
                
                setLocations( prevLocations => [ {temp, feels_like, name: cityName, description, icon, id: 1} , ...prevLocations ] );
                setIsLoader(false);
            } )
            .catch( err => {
                alert(`Город ${cityName} не найден :(`)
            });
        } else alert(`Вы уже добавили город ${cityName}`)
    }

    const deleteCity = (cityName) => {
        setLocations( prevLocations => prevLocations.filter( loc => loc.name !== cityName ) );
    }

    return(
        <>
        {isLoader 
        ? <Loader />
        : <Main     
          currentGeo = {currentGeo} 
          setIsModal = {setIsModal}
          isModal = {isModal} 
          locations = {locations} 
          deleteCity = {deleteCity} />
        }
        { isModal && 
        <Modal
        setIsModal = {setIsModal}
        getWeatherByName = {getWeatherByName}/> }

        </>
    )
}

export default MainContainer;