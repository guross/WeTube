import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDownOffAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Comments from "../Components/Comments";
import Card from "../Components/Card"

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textsoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Yarışmalarımı Nasıl Kazanıyorum</Title>
        <Details>
          <Info>660,369 views | 666 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlined />
              Dislike
            </Button>
            <Button>
              <ReplyOutlined />
              Share
            </Button>
            <Button>
              <AddTaskOutlined />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://media-exp1.licdn.com/dms/image/C5603AQFw3vb2TkzRhA/profile-displayphoto-shrink_200_200/0/1624743422270?e=2147483647&v=beta&t=nNsfiQgBigNAdLp8oWMGokIOKPb3ckq5yG_aJP8_KvM" />
            <ChannelDetail>
              <ChannelName>Cengizhan Köse Dünya Birincisi</ChannelName>
              <ChannelCounter>31 subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                quia optio molestias dolorum, illum qui ab provident molestiae
                architecto aliquid!
              </Description>
            </ChannelDetail>
            l
          </ChannelInfo>
          <Subscribe>SUBSCRİBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;
