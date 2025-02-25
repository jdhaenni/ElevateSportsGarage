import { React, useState, useEffect } from 'react'
import { getHours } from '../../api/HoursApi'
export default function AdminHours () {
  const [hours, setHours] = useState([])

  useEffect(() => {
    const fetchHours = async () => {
      const data = await getHours()
      setHours(data)
    }
    fetchHours()
  }, [])

  return (
    <div className ='hours'>
      <ul>
        {hours.map(hour => {
          return (
            <li key={hour._id}>
              Monday: {hour.monday}
              <br></br>
              Tuesday: {hour.tuesday}
              <br></br>
              Wednesday: {hour.wednesday}
              <br></br>
              Thursday: {hour.thursday}
              <br></br>
              Friday: {hour.friday}
              <br></br>
              Saturday: {hour.saturday}
              <br></br>
              Sunday: {hour.sunday}
              <br></br>
              Holiday or exeptions - optional: {hour.holiday}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
