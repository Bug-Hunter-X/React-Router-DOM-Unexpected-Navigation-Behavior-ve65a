```javascript
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Perform any necessary actions
    navigate('/about'); // Use useNavigate hook for navigation
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleButtonClick}>Go to About</button>
    </div>
  );
}

export default Home; 
```