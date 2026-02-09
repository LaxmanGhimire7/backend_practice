import React from 'react'

const App = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()

    axios.post("http://localhost:3000/api/user")
  }

  return (
    <div>
      hii
    </div>
  )
}

export default App
