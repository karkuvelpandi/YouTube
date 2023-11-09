import React from "react";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Be a developer in one month
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye />
          &nbsp;
          {numeral(100000).format("0.a")} views • &nbsp;
          {moment("2020-02-02").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            effect="blur"
          /> */}
          <p>007Motivations</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
