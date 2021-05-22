import { createContext, useContext } from "react";

interface SpotifyContextData {
    authToken: string;
    deviceId: string;
    setDeviceId: (deviceId: string) => void;
    player: Spotify.Player;
    setPlayer: (player: Spotify.Player) => void;
}

export const SpotifyContext = createContext<SpotifyContextData>({} as SpotifyContextData);

export const useSpotify = () => useContext(SpotifyContext);