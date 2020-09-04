import React from "react";
import {
    List,
    StreamContainer,
    StreamThumbnail,
    StreamColumn,
    StreamRow,
    StreamHeader,
    StreamDescription,
    StreamCategory,
    StreamAvatar,
    StreamUsername,
    TagRow,
    TagView,
    TagText,
} from "./styles";

import streamThumb from "../../images/stream_thumbnail.jpg";

const StreamList: React.FC = () => {
    const StreamItem = () => (
        <StreamContainer>
            <StreamThumbnail source={streamThumb} />

            <StreamColumn>
                <StreamRow>
                    <StreamHeader>
                        <StreamAvatar />
                        <StreamUsername numberOfLines={1}>rodz_oficial</StreamUsername>
                    </StreamHeader>

                    <StreamDescription numberOfLines={1}>
                      Front end com JavaScript, ReactJS e ReactNative.
                    </StreamDescription>
                    <StreamCategory numberOfLines={1}>
                      Ciência e Tecnologia
                    </StreamCategory>
                </StreamRow>

                <TagRow>
                  <TagView>
                    <TagText>Português</TagText>
                  </TagView>
                  <TagView>
                    <TagText>Desenvolvimento</TagText>
                  </TagView>
                </TagRow>
            </StreamColumn>
        </StreamContainer>
    );
    return (
        <List>
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
        </List>
    );
};

export default StreamList;
