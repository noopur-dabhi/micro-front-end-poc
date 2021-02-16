import logo from './logo.svg';
import './App.css';

function App() {

  window.addEventListener('characterChanged', function() {
    console.log('****character clicked');
    var elName = document.querySelector('.name');
    var elDescription = document.querySelector('.description');
    var elImage = document.querySelector('.image');
    elName.innerHTML = window.store.character.name;
    elDescription.innerHTML = window.store.character.description;
    elImage.src = window.store.character.image;
  });


  return (
    <div className="App">
      {/* <header className="App-header">
        Character - Info
      </header> */}
      <div class="card">
        <img className="image" alt="Avatar"/>
        <div class="container">
          <h4><b className="name"></b></h4>
          <p className="description"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
