import React, { useEffect } from 'react'

const SatitLifeCycle = ({ count, count2 }) => {
  useEffect(() => {
    console.log('on mount/update')

    return () => {
      console.log('on unmount')
    }
  }, [count])

  useEffect(() => {
    console.log('count2 update')
  }, [count2])

  useEffect(() => {
    fetchFakeFake()
  }, [])

  // fetchFakeFake()

  function fetchFakeFake() {
    console.log('fake axios.get')
  }

  return (
    <h1 style={{ fontSize: 128 }}>
      SatitLifeCycle: ({count}) [{count2}]
    </h1>
  )
}

export default SatitLifeCycle
