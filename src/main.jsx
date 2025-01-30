import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './StarRating'
import TextExpander from './TextExpander'
// import './index.css'
// import App from './App.jsx'

function Test() {
  const [movieRating, setMovieRating] = useState(0)

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating/>
    <Test />
    <TextExpander>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed nec ante vitae turpis mattis imperdiet. Nunc vehicula turpis elit, ut hendrerit ligula sollicitudin vel.
        Nullam pharetra nisl consequat lectus venenatis auctor. Vivamus sagittis convallis orci, et rhoncus neque lobortis sit amet. Sed efficitur malesuada lectus eu bibendum. In aliquet lacus sagittis luctus blandit.
        Aenean fermentum dui sed lorem scelerisque, ultricies luctus tortor lacinia. Etiam vel felis tempus, sollicitudin arcu quis, vehicula nunc.
    </TextExpander>
  </StrictMode>,
)
