import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './StarRating'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating size={24} color="red" />
    <StarRating/>
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/>
  </StrictMode>,
)
