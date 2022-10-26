import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap:10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textsoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textsoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://scontent.fist7-2.fna.fbcdn.net/v/t39.30808-6/244355011_10159360044789590_8037407231006153260_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UHtbdC7lyDYAX904DOc&_nc_ht=scontent.fist7-2.fna&oh=00_AT8R9GcyVOUJ9DWA07Z8S4vOhhkLhHs-eyS4QdzT7hSQOA&oe=635C769C"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://media-exp1.licdn.com/dms/image/C5603AQFw3vb2TkzRhA/profile-displayphoto-shrink_200_200/0/1624743422270?e=2147483647&v=beta&t=nNsfiQgBigNAdLp8oWMGokIOKPb3ckq5yG_aJP8_KvM"
          />
          <Texts>
            <Title>Yarışmalarımı Nasıl Kazanıyorum</Title>
            <ChannelName>Cengizhan Köse Dünya Birincisi</ChannelName>
            <Info>660,369 views | 666 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
