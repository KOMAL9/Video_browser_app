import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// App is responsible for holding state of our app, retrieving a 
//list of videos(frm API)  and for storing the current search term

class App extends React.Component {
  /* videos is a state obj containing the list of videos returned .SelectedVideo is state obj 
  containing the currently selected video which is being displayed in player , passed to videodetail component */
  state = { videos: [], selectedVideo: null };


  componentDidMount() {
    this.onTermSubmit("oswald");
  }
  
  // this methd fetches the data and updates the state
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };


/* we are adding a new method(onvideoselect)-> (means : a video being clicked) to 
the app component and we are 
passing a reference to that
 method , down first to
videolist and then to videoitem . Any time the user clicks on a videoitem , 
we are going to tell the videoitem to call that callback.That single vdo would
 be thrown into that onvideoselect callbAack 
 */
 /* this method is invoked whenever a videoitem comp is clicked upon */

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">


              <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>


            <div className="five wide column">
              <VideoList
              videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>

            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
