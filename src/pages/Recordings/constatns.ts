type VideoType = {
  videoId: string;
  title: string;
};

export const videos: {
  firstDay: VideoType[];
  secondDay: VideoType[];
  thirdDay: VideoType[];
} = {
  firstDay: [
    { videoId: 'Dxmc2maYsA4', title: 'CARLA URREA STABILE' },
    { videoId: '28BcGUvyzQQ', title: 'Adrian Marin' },
    { videoId: 'J7oargktOEw', title: 'Unconference pitches' },
    { videoId: 'LbDn5PKLkgc', title: 'HIROSHI SHIBATA' },
    { videoId: 'Olc0qbSyJQw', title: 'STEVEN R. BAKER, KEYNOTE' },
    { videoId: 'WiJC_v5Lus8', title: 'HITOSHI HASUMI' },
    { videoId: 'oml7dcDo_jo', title: 'Chikahiro Tokoro' },
    { videoId: 'HLTJJh8EHdU', title: 'Johnny Shields' },
    { videoId: 'f3IL6C214TA', title: 'Alexander Nicholson' }
  ],
  secondDay: [
    { videoId: 'OOYdS4Nw3Ek', title: 'SCOTT CHACON' },
    { videoId: 'Gk5n9lQGFG8', title: 'MASAFUMI OKURA' },
    { videoId: 'B8f8-UhgQkQ', title: 'IVO ANJO' },
    { videoId: 't6_uvjX25Jk', title: 'Unconference pitches' },
    { videoId: 'AIh0fbA28GI', title: 'Daniel Susveila' },
    { videoId: 'fP96dmzoPT4', title: 'Cristian Planas' },
    { videoId: '-Lwaaj5Zimk', title: 'Chris Hasinski' },
    { videoId: '5BRtOBUeObM', title: 'Miron Marczuk' }
  ],
  thirdDay: [
    { videoId: '79LN5Sn4Nac', title: 'HANA HARENCAROVA, KEYNOTE' },
    { videoId: 'lK9vzms1ENI', title: 'Panel discussion "30 years of Ruby"' },
    { videoId: 'Z_zcTt8q5PQ', title: 'MATIAS KORHONEN' },
    { videoId: '9fzMs_CEzrA', title: 'TOM DE BRUIJN' },
    { videoId: 'IlaLqll1rZA', title: 'Euruko 2023. Winner Ceremony' }
  ]
};
