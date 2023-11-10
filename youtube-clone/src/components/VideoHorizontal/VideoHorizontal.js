import React, { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video }) => {
  const navigate = useNavigate();
  const [channelIcon, setChannelIcon] = useState();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails: { duration },
    statistics: { viewCount },
  } = video;

  // Only for getting channel icon
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const handleClick = () => {
    // TODO:Handle Channel click
    navigate(`watch/${id}`);
  };

  return (
    <Row className="videoHorizontal m-1 py-2" onClick={handleClick}>
      {/* TODO: Refactor grid layout */}
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">{title}</p>
        <div className="videoHorizontal__details">
          <AiFillEye />
          &nbsp;
          {numeral(viewCount).format("0.a")} views • &nbsp;
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* TODO:Show in search screen */}
          {/* <LazyLoadImage
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            effect="blur"
          /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
