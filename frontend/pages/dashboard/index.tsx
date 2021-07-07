import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { Template } from "../../app/template/Template";
import { getSpotifyAccessToken } from "../../app/lib/api/auth";
import { APP_COOKIES_ACCESS, APP_COOKIES_AUTH, checkAccessToken, COOKIES_SET_OPTIONS } from "../../app/lib/api/cookies";
import { SecondaryHeadline } from "../../app/css/typography";
import { Content } from "../../app/css/content";
import { DashboardItem } from "../../app/components/dashboard/DashboardItem";
import { useData } from "../../app/context/websocket/WebsocketContext";
import { Loading } from "../../app/components/loading/Loading";
import { Footer } from "../../app/components/footer/Footer";
import { setCookie } from "nookies";

const DashboardWrapper = styled.div`
    padding-top: 12.5rem;
`;

const DashboardList = styled.div`
    margin-top: 1rem;
`;

const Dashboard: React.FC = () => {
    const { rooms } = useData();

    return (
        <Template title="Dashboard - Live Music for Spotify">
            <DashboardWrapper>
                <Content>
                    <SecondaryHeadline>Rooms</SecondaryHeadline>
                    <Loading condition={rooms && Object.keys(rooms).length > 0}>
                        <DashboardList>
                            {Object.keys(rooms).map(rid => (
                                <DashboardItem key={rid} {...rooms[rid]} />
                            ))}
                        </DashboardList>
                    </Loading>
                </Content>
            </DashboardWrapper>
            <Footer />
        </Template>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    return checkAccessToken(ctx);
};

export default Dashboard;
