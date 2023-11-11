import React, { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video, searchScreen }) => {
  const navigate = useNavigate();
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
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
    // contentDetails: { duration },
    // statistics: { viewCount },
  } = video;
  const isVideo = id.kind === "youtube#video";
  const _videoId = searchScreen ? id?.videoId : id?.videoId || id;
  const _channelId = id?.channelId || channelId;
  const thumbnailClassName =
    id.kind === "youtube#channel" && "videoHorizontal__thumbnail-channel";

  useEffect(() => {
    const get_video_details = async (vId) => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: vId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    _videoId && get_video_details(_videoId);
  }, [_videoId]);
  // Only for getting channel icon
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: _channelId,
        },
      });
      console.log(items[0].snippet.thumbnails.default.url);
      console.log(items[0].snippet.thumbnails);
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [_channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const handleClick = () => {
    isVideo
      ? navigate(`/watch/${_videoId}`)
      : navigate(`/channel/${_channelId}`);
  };

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      {/* TODO: Refactor grid layout */}
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnailClassName}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details">
            <AiFillEye />
            &nbsp;
            {numeral(views).format("0.a")} views • &nbsp;
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {isVideo && (
          <p className="videoHorizontal__description">{description}</p>
        )}

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* TODO:Show in search screen */}

          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
