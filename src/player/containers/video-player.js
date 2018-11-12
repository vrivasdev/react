import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formattedTime from '../components/helper';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolume: 1,
    mute: false,
  }
  togglePlay = (event) => { // It changes every time the user clicks
    this.setState({
      pause: !this.state.pause,
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  handleVolumeClick = event => { // ui volume interaction is missing
    this.setState({
      mute: !this.state.mute
    })
    if (this.video.volume)
      this.setState({
        lastVolume: this.video.volume
      })
    this.video.volume = this.video.volume ? 0 : this.state.lastVolume
  }
  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) { // FullScreen
      this.player.webkitRequestFullScreen();
    } else  { // full screen exit
      document.webkitExitFullscreen();
    }
  }
  setRef = element => {
    this.player = element;
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title="Esto es un video"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
            />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
            isMuted={this.state.mute}
          />
        <FullScreen
          handleFullScreenClick={this.handleFullScreenClick}
        />
        </Controls>
      <Spinner
        active={this.state.loading}
      />
      <Video
        autoplay={this.props.autoplay}
        pause={this.state.pause}
        src={this.props.src}
        handleLoadedMetadata={this.handleLoadedMetadata}
        handleTimeUpdate={this.handleTimeUpdate}
        handleSeeking={this.handleSeeking}
        handleSeeked={this.handleSeeked}
      />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
