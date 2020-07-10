import React, { useState, useEffect } from 'react';
import { MdFlightTakeoff } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import './style.css'
import {addReserveRequest} from '../../config/modules/reserve/actions'

import api from '../../services/api'

function Home({history}) {
  const dispatch = useDispatch()
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')
      setTrips(response.data)
    }
    loadApi()

  }, [])

  function handleAdd(id) {
    dispatch(addReserveRequest(id))
    history.push('/reservas')
  }

  return (
    <div>
      <div className="box">
        {trips.map(trip => {
          return (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title}></img>
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? 'Diponivel' : 'Indisponivel'}</span>

              <button type="button" onClick={() => handleAdd(trip.id)}>
                <div>
                  <MdFlightTakeoff size={16} color="white" />
                </div>
                <span>Solicitar Reserva</span>
              </button>
            </li>
          )
        })}
      </div>
    </div>
  );
}
export default Home