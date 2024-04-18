import React from 'react';
import {useMediaQuery} from 'react-responsive';
import AudioPlayer from 'react-modern-audio-player';

const Player = ({data, chapterId, isAudioPlayerActive, isAudioPlayerHidden}) => {
    const playList = data.filter(({audio}) => audio).map(({title, id, cover, audio}) => (
        {
            name: title,
            writer: `Chapter ${id}`,
            img: cover,
            src: audio,
            id: id,
        }
    ));

    const isMdScreen = useMediaQuery({query: '(max-width: 992px)'});

    // const CustomPlayer = ({audioPlayerState}: {
    //     audioPlayerState?: AudioPlayerStateContext;
    // }) => {
    //     const audioEl = audioPlayerState?.elementRefs?.audioEl;
    //
    //     return null;
    // };

    if (data) {
        return (
            <section className={`audio-player-section ${isAudioPlayerActive ? 'active' : ''} ${isAudioPlayerHidden ? 'hidden' : ''}`}>
                <AudioPlayer
                    playList={playList}
                    audioInitialState={{
                        repeatType: 'ONE',
                        isPlaying: isAudioPlayerActive,
                        curPlayId: Number(chapterId),
                    }}
                    activeUI={{
                        playButton: true,
                        volumeSlider: true,
                        trackTime: true,
                        trackInfo: true,
                        artwork: true,
                        progress: isMdScreen ? 'bar' : 'waveform',
                    }}
                    placement={{
                        player: 'bottom-left',
                        playList: 'bottom',
                        interface: {
                            templateArea: {
                                artwork: "row1-1",
                                trackInfo: "row1-2",
                                playButton: "row1-3",
                                trackTimeCurrent: "row1-4",
                                progress: "row1-5",
                                trackTimeDuration: "row1-6",
                            },
                        },
                    }}
                    rootContainerProps={{
                        colorScheme: 'dark',
                        width: '100%'
                    }}
                />
            </section>
        )
    }

    return null;
}

export default Player;
