import React, { useEffect } from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";

import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import Comments from "../../components/Comments/Comments";
import VideoMetaData from "../../components/VideoMetaData/VideoMetaData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoByID } from "../../redux/actions/videos.action";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, loading } = useSelector((state) => state.selectedVideo);
  useEffect(() => {
    dispatch(getVideoByID(id));
  }, [dispatch, id]);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            frameBorder={0}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
