import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './_player.scss';

const MusicPlayer = ({ track, artist }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
    } else {
      audioRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  const updateProgress = () => {
    const duration = audioRef.current.duration || 1;
    const currentTime = audioRef.current.currentTime;
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => setIsPlaying(false));
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="music-player">
      <audio ref={audioRef} src={`/assets/audio/${track.preview}`} volume={volume} />
      
      <div className="player-controls">
        <button onClick={togglePlay} className="play-button">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <div className="track-info">
          <h4>{track.title}</h4>
          <p>{artist}</p>
        </div>
        
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="volume-control">
          <button onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;