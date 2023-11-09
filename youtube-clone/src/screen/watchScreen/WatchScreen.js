import React from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";

import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import Comments from "../../components/Comments/Comments";
import VideoMetaData from "../../components/VideoMetaData/VideoMetaData";

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="My video"
            frameBorder={0}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
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
