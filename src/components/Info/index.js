import React from "react";
import {
  InfoWrapper,
  InfoTitle,
  InfoDivider,
  InfoContent,
  InfoText,
  InfoSubTitle,
  InfoPara,
  InfoImg,
} from "./style.js";
import "../../app.css";

function Info({ desktopOrMobile }) {
  return (
    <InfoWrapper>
      <InfoTitle>Designed for the future</InfoTitle>
      <InfoDivider>
        <InfoContent>
          <InfoText>
            <InfoSubTitle>Introducing an extensible editor</InfoSubTitle>
            <InfoPara>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </InfoPara>
          </InfoText>
          <InfoText>
            <InfoSubTitle>Robust content management</InfoSubTitle>
            <InfoPara>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </InfoPara>
          </InfoText>
        </InfoContent>
      </InfoDivider>
      <InfoDivider>
        <InfoImg
          src={`./images/design-illustration-${desktopOrMobile}.svg`}
          alt="i"
        />
      </InfoDivider>
    </InfoWrapper>
  );
}

export default Info;
