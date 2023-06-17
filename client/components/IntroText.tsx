import { Link } from 'react-router-dom'

export default function Landing() {
    return (
      <div className="landing"> 
        <div className="enter">
          <Link to="/App">
            <h1>ENTER</h1>
          </Link>
        </div>
      </div>
    )
  }