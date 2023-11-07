import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import Video from "../../components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videos.action";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.homeVideos);
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video, index) => (
          <Col key={video.id?.videoId || video.id} lg={3} md={4}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
