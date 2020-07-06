import React, { useEffect } from 'react';
import { getTrailerById } from '../../redux/movie/actions';
import { useSelector, useDispatch } from 'react-redux';

// Routing
import { withRouter } from 'react-router-dom';

// Components
import Loader from '../../components/Loader';

import { Player, BigPlayButton } from 'video-react';
import { TrailerPageContainer } from './style';

const Trailer = (props) => {
  const trailer = useSelector((state) => state.movie.trailer);
  const trailerId = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    let configTrailer = {
      audio_language: 'SPA',
      audio_quality: '2.0',
      content_id: trailerId,
      content_type: 'movies',
      device_serial: 'device_serial_1',
      device_stream_video_quality: 'FHD',
      player: 'web:PD-NONE',
      subtitle_language: 'MIS',
      video_type: 'trailer',
    };
    dispatch(getTrailerById(configTrailer));
  }, []);

  const playTrailer = () => {
    if (trailer) {
      return (
        <Player fluid playsInline autoPlay className="player">
          <source src={trailer.data.stream_infos[0].url} />
          <BigPlayButton position="center" />
        </Player>
      );
    }
  };

  if (trailer) {
    return <TrailerPageContainer>{playTrailer()}</TrailerPageContainer>;
  } else {
    return (
      <TrailerPageContainer>
        <Loader />
      </TrailerPageContainer>
    );
  }
};

export default withRouter(Trailer);
