const MOCK_DATA = {
  [Mode.TimeTrial]: {
    [Track.CrashCove]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7837,
              goal: 7841,
              worldRecord: 6583
            },
            [Category.Lap]: {
              personalBest: 2476,
              goal: 2496,
              worldRecord: 1204
            },
            [Category.SL]: {
              personalBest: 2702,
              goal: 2709,
              worldRecord: 1204
            }
          },
          grinds: [
            {
              bestCourse: 7837,
              bestLap: 2476,
              bestLapInCourse: 2520,
              bestSL: 2702,
              bestPace: [2756, 2520]
            }
          ]
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 7837,
              goal: 7841,
              worldRecord: 6599
            },
            [Category.Lap]: {
              personalBest: 2476,
              goal: 2496,
              worldRecord: 2496
            }
          },
          grinds: [
            {
              bestCourse: 7837,
              bestLap: 2476,
              bestLapInCourse: 2520,
              bestSL: 2702,
              bestPace: [2756, 2520]
            }
          ]
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 8000,
              goal: 8019,
              worldRecord: 8000
            },
            [Category.Lap]: {
              personalBest: 2552,
              goal: 2563,
              worldRecord: 2531
            }
          },
          grinds: [
            {
              bestCourse: 8000,
              bestLap: 2552,
              bestLapInCourse: 2582,
              bestSL: 2765,
              bestPace: [2810, 2620]
            }
          ]
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 8196,
              goal: 8203,
              worldRecord: 8196
            },
            [Category.Lap]: {
              personalBest: 2600,
              goal: 2618,
              worldRecord: 2600
            }
          },
          grinds: [
            {
              bestCourse: 8196,
              bestLap: 2618,
              bestLapInCourse: 2642,
              bestSL: 2827,
              bestPace: [2853, 2660]
            }
          ]
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 8309,
              goal: 8322,
              worldRecord: 8309
            },
            [Category.Lap]: {
              personalBest: 2644,
              goal: 2680,
              worldRecord: 2644
            }
          },
          grinds: [
            {
              bestCourse: 8309,
              bestLap: 2644,
              bestLapInCourse: 2699,
              bestSL: 2908,
              bestPace: [2908, 2699]
            }
          ]
        }
      },
      [Restriction.Classic]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7837,
              goal: 7841,
              worldRecord: 7789
            },
            [Category.Lap]: {
              personalBest: 2476,
              goal: 2496,
              worldRecord: 2472
            },
          },
          grinds: [
            {
              bestCourse: 7837,
              bestLap: 2476,
              bestLapInCourse: 2520,
              bestSL: 2702,
              bestPace: [2756, 2520]
            }
          ]
        }
      }
    },
    [Track.RoosTubes]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 6900,
              goal: 6934,
              worldRecord: 6811
            },
            [Category.Lap]: {
              personalBest: 2162,
              goal: 2192,
              worldRecord: 2162
            },
            [Category.SL]: {
              personalBest: 2319,
              goal: 2319,
              worldRecord: 2296
            }
          },
          grinds: [
            {
              bestCourse: 6900,
              bestLap: 2162,
              bestLapInCourse: 2243,
              bestSL: 2322,
              bestPace: [2335, 2270]
            }
          ]
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 6900,
              goal: 6934,
              worldRecord: 6811
            },
            [Category.Lap]: {
              personalBest: 2192,
              goal: 2192,
              worldRecord: 2162
            }
          },
          grinds: [
            {
              bestCourse: 6900,
              bestLap: 2162,
              bestLapInCourse: 2243,
              bestSL: 2322,
              bestPace: [2335, 2270]
            }
          ]
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 7050,
              goal: 7074,
              worldRecord: 7050
            },
            [Category.Lap]: {
              personalBest: 2225,
              goal: 2243,
              worldRecord: 2225
            }
          },
          grinds: [
            {
              bestCourse: 7050,
              bestLap: 2225,
              bestLapInCourse: 2288,
              bestSL: 2384,
              bestPace: [2384, 2309]
            }
          ]
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 7208,
              goal: 7228,
              worldRecord: 7208
            },
            [Category.Lap]: {
              personalBest: 2260,
              goal: 2297,
              worldRecord: 2260
            }
          },
          grinds: [
            {
              bestCourse: 7208,
              bestLap: 2260,
              bestLapInCourse: 2341,
              bestSL: 2462,
              bestPace: [2462, 2405]
            }
          ]
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 7323,
              goal: 7432,
              worldRecord: 7323
            },
            [Category.Lap]: {
              personalBest: 2257,
              goal: 2335,
              worldRecord: 2257
            }
          },
          grinds: [
            {
              bestCourse: 7323,
              bestLap: 2257,
              bestLapInCourse: 2388,
              bestSL: 2501,
              bestPace: [2535, 2400]
            }
          ]
        }
      },
    },
    [Track.TigerTemple]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 8698,
              goal: 8698,
              worldRecord: 8698
            },
            [Category.Lap]: {
              personalBest: 2780,
              goal: 2780,
              worldRecord: 2735
            },
            [Category.SL]: {
              personalBest: 3005,
              goal: 3005,
              worldRecord: 2917
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 8905,
              worldRecord: null
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2851,
              worldRecord: null
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 8971,
              goal: 8971,
              worldRecord: 8969
            },
            [Category.Lap]: {
              personalBest: 2861,
              goal: 2861,
              worldRecord: 2861
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 9175,
              goal: 9175,
              worldRecord: 9147
            },
            [Category.Lap]: {
              personalBest: 2896,
              goal: 2896,
              worldRecord: 2896
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 9313,
              goal: 9313,
              worldRecord: 9246
            },
            [Category.Lap]: {
              personalBest: 2956,
              goal: 2956,
              worldRecord: 2956
            }
          },
          grinds: []
        }
      },
    },
    [Track.CocoPark]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7276,
              goal: 7276,
              worldRecord: 7276
            },
            [Category.Lap]: {
              personalBest: 2312,
              goal: 2312,
              worldRecord: 2263
            },
            [Category.SL]: {
              personalBest: 2531,
              goal: 2531,
              worldRecord: 2531
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 7276,
              goal: 7276,
              worldRecord: 7276
            },
            [Category.Lap]: {
              personalBest: 2312,
              goal: 2312,
              worldRecord: 2263
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 7439,
              goal: 7439,
              worldRecord: 7439
            },
            [Category.Lap]: {
              personalBest: 2365,
              goal: 2365,
              worldRecord: 2365
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 7681,
              goal: 7681,
              worldRecord: 7681
            },
            [Category.Lap]: {
              personalBest: 2441,
              goal: 2441,
              worldRecord: 2441
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 7804,
              goal: 7804,
              worldRecord: 7804
            },
            [Category.Lap]: {
              personalBest: 2507,
              goal: 2507,
              worldRecord: 2439
            }
          },
          grinds: []
        }
      },
    },
    [Track.MysteryCaves]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 11114,
              goal: 11114,
              worldRecord: 11010
            },
            [Category.Lap]: {
              personalBest: 3632,
              goal: 3632,
              worldRecord: 3597
            },
            [Category.SL]: {
              personalBest: 3679,
              goal: 3679,
              worldRecord: 3658
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 11114,
              goal: 11114,
              worldRecord: 11010
            },
            [Category.Lap]: {
              personalBest: 3632,
              goal: 3632,
              worldRecord: 3597
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 11420,
              goal: 11420,
              worldRecord: 11420
            },
            [Category.Lap]: {
              personalBest: 3739,
              goal: 3739,
              worldRecord: 3739
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 11717,
              goal: 11717,
              worldRecord: 11717
            },
            [Category.Lap]: {
              personalBest: 3869,
              goal: 3869,
              worldRecord: 3846
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 11910,
              goal: 11910,
              worldRecord: 11910
            },
            [Category.Lap]: {
              personalBest: 3916,
              goal: 3916,
              worldRecord: 3873
            }
          },
          grinds: []
        }
      },
    },
    [Track.BlizzardBluff]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 6592,
              goal: 6598,
              worldRecord: 6574
            },
            [Category.Lap]: {
              personalBest: 2105,
              goal: 2109,
              worldRecord: 2081
            },
            [Category.SL]: {
              personalBest: 2226,
              goal: 2226,
              worldRecord: 2203
            }
          },
          grinds: [
            {
              bestCourse: 6592,
              bestLap: 2105,
              bestLapInCourse: 2105,
              bestSL: 2247,
              bestPace: [2259, 2115]
            }
          ]
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 6712,
              goal: 6718,
              worldRecord: 6696
            },
            [Category.Lap]: {
              personalBest: 2150,
              goal: 2153,
              worldRecord: 2104
            }
          },
          grinds: [
            {
              bestCourse: 6712,
              bestLap: 2150,
              bestLapInCourse: 2153,
              bestSL: 2247,
              bestPace: [2287, 2176]
            }
          ]
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 6833,
              goal: 6866,
              worldRecord: 6833
            },
            [Category.Lap]: {
              personalBest: 2165,
              goal: 2192,
              worldRecord: 2165
            }
          },
          grinds: [
            {
              bestCourse: 6833,
              bestLap: 2165,
              bestLapInCourse: 2229,
              bestSL: 2319,
              bestPace: [2368, 2229]
            }
          ]
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 7070,
              goal: 7079,
              worldRecord: 7070
            },
            [Category.Lap]: {
              personalBest: 2254,
              goal: 2261,
              worldRecord: 2254
            }
          },
          grinds: [
            {
              bestCourse: 7070,
              bestLap: 2254,
              bestLapInCourse: 2316,
              bestSL: 2410,
              bestPace: [2410, 2344]
            }
          ]
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 7131,
              goal: 7145,
              worldRecord: 7131
            },
            [Category.Lap]: {
              personalBest: 2288,
              goal: 2300,
              worldRecord: 2288
            }
          },
          grinds: [
            {
              bestCourse: 7131,
              bestLap: 2288,
              bestLapInCourse: 2288,
              bestSL: 2418,
              bestPace: [2453, 2362]
            }
          ]
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7646,
              goal: 7650,
              worldRecord: 7646
            },
            [Category.Lap]: {
              personalBest: 2471,
              goal: 2500,
              worldRecord: 2471
            }
          },
          grinds: [
            {
              bestCourse: 7646,
              bestLap: 2471,
              bestLapInCourse: 2471,
              bestSL: 2627,
              bestPace: [2627, 2501]
            }
          ]
        }
      }
    },
    [Track.SewerSpeedway]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 9842,
              goal: 9842,
              worldRecord: 9661
            },
            [Category.Lap]: {
              personalBest: 3203,
              goal: 3203,
              worldRecord: 3099
            },
            [Category.SL]: {
              personalBest: 3312,
              goal: 3312,
              worldRecord: 3229
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 10000,
              worldRecord: 9816
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 3250,
              worldRecord: 3178
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 10021,
              goal: 10021,
              worldRecord: 10021
            },
            [Category.Lap]: {
              personalBest: 3305,
              goal: 3305,
              worldRecord: 3237
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 10170,
              goal: 10170,
              worldRecord: 10092
            },
            [Category.Lap]: {
              personalBest: 3357,
              goal: 3357,
              worldRecord: 3290
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 10332,
              goal: 10332,
              worldRecord: 10231
            },
            [Category.Lap]: {
              personalBest: 3382,
              goal: 3382,
              worldRecord: 3331
            }
          },
          grinds: []
        }
      },
    },
    [Track.DingoCanyon]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 8288,
              goal: 8288,
              worldRecord: 8096
            },
            [Category.Lap]: {
              personalBest: 2640,
              goal: 2640,
              worldRecord: 2548
            },
            [Category.SL]: {
              personalBest: 2794,
              goal: 2794,
              worldRecord: 2765
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 8288,
              goal: 8288,
              worldRecord: 8096
            },
            [Category.Lap]: {
              personalBest: 2640,
              goal: 2640,
              worldRecord: 2548
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 8440,
              goal: 8440,
              worldRecord: 8440
            },
            [Category.Lap]: {
              personalBest: 2748,
              goal: 2748,
              worldRecord: 2725
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 8801,
              goal: 8801,
              worldRecord: 8703
            },
            [Category.Lap]: {
              personalBest: 2856,
              goal: 2856,
              worldRecord: 2791
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 9093,
              goal: 9093,
              worldRecord: 8826
            },
            [Category.Lap]: {
              personalBest: 2903,
              goal: 2903,
              worldRecord: 2835
            }
          },
          grinds: []
        }
      },
    },
    [Track.PapusPyramid]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 6618,
              goal: 6618,
              worldRecord: 3652
            },
            [Category.Lap]: {
              personalBest: 537,
              goal: 537,
              worldRecord: 436
            },
            [Category.SL]: {
              personalBest: 1521,
              goal: 1521,
              worldRecord: 815
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 7364,
              worldRecord: 7255
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2324,
              worldRecord: 529
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 6618,
              goal: 6618,
              worldRecord: 6618
            },
            [Category.Lap]: {
              personalBest: 537,
              goal: 537,
              worldRecord: 473
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 7633,
              goal: 7633,
              worldRecord: 6773
            },
            [Category.Lap]: {
              personalBest: 2351,
              goal: 2351,
              worldRecord: 500
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 7719,
              worldRecord: 5651
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2415,
              worldRecord: 483
            }
          },
          grinds: []
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 8463,
              goal: 8463,
              worldRecord: 8463
            },
            [Category.Lap]: {
              personalBest: 2742,
              goal: 2742,
              worldRecord: 2742
            }
          },
          grinds: []
        }
      },
      [Restriction.Classic]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7191,
              goal: 7191,
              worldRecord: 7090
            },
            [Category.Lap]: {
              personalBest: 2205,
              goal: 2205,
              worldRecord: 2140
            }
          },
          grinds: []
        }
      }
    },
    [Track.DragonMines]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7205,
              goal: 7205,
              worldRecord: 7080
            },
            [Category.Lap]: {
              personalBest: 2287,
              goal: 2287,
              worldRecord: 2177
            },
            [Category.SL]: {
              personalBest: 2480,
              goal: 2480,
              worldRecord: 2449
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 7465,
              worldRecord: 7345
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2427,
              worldRecord: 2366
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 7523,
              goal: 7523,
              worldRecord: 7523
            },
            [Category.Lap]: {
              personalBest: 2427,
              goal: 2389,
              worldRecord: 2389
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 7611,
              goal: 7611,
              worldRecord: 7611
            },
            [Category.Lap]: {
              personalBest: 2385,
              goal: 2356,
              worldRecord: 2356
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 7759,
              worldRecord: 7759
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2433,
              worldRecord: 2433
            }
          },
          grinds: []
        }
      },
    },
    [Track.PolarPass]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 11571,
              goal: 11571,
              worldRecord: 11388
            },
            [Category.Lap]: {
              personalBest: 3744,
              goal: 3744,
              worldRecord: 3659
            },
            [Category.SL]: {
              personalBest: 3863,
              goal: 3863,
              worldRecord: 3802
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 11808,
              worldRecord: 11618
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 3868,
              worldRecord: 3798
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 11951,
              goal: 11951,
              worldRecord: 11844
            },
            [Category.Lap]: {
              personalBest: 3890,
              goal: 3890,
              worldRecord: 3847
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 12249,
              goal: 12249,
              worldRecord: 12098
            },
            [Category.Lap]: {
              personalBest: 4008,
              goal: 4008,
              worldRecord: 3921
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 12478,
              worldRecord: 12247
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 4097,
              worldRecord: 3966
            }
          },
          grinds: []
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 14436,
              goal: 14436,
              worldRecord: 14436
            },
            [Category.Lap]: {
              personalBest: 4748,
              goal: 4748,
              worldRecord: 4748
            }
          },
          grinds: []
        },
      }
    },
    [Track.CortexCastle]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 12136,
              goal: 12136,
              worldRecord: 11989
            },
            [Category.Lap]: {
              personalBest: 3910,
              goal: 3910,
              worldRecord: 3853
            },
            [Category.SL]: {
              personalBest: 4154,
              goal: 4154,
              worldRecord: 4097
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 12455,
              worldRecord: 12335
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 4042,
              worldRecord: 4024
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 12576,
              goal: 12576,
              worldRecord: 12484
            },
            [Category.Lap]: {
              personalBest: 4068,
              goal: 4068,
              worldRecord: 3999
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 12738,
              goal: 12733,
              worldRecord: 12733
            },
            [Category.Lap]: {
              personalBest: 4078,
              goal: 4078,
              worldRecord: 4078
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 12722,
              worldRecord: 12671
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 4081,
              worldRecord: 4050
            }
          },
          grinds: []
        }
      },
    },
    [Track.TinyArena]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 16848,
              goal: 16848,
              worldRecord: 9477
            },
            [Category.Lap]: {
              personalBest: 1612,
              goal: 1612,
              worldRecord: 1451
            },
            [Category.SL]: {
              personalBest: 5045,
              goal: 5045,
              worldRecord: 4500
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 18476,
              worldRecord: 18331
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 6086,
              worldRecord: 6056
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 18478,
              goal: 18478,
              worldRecord: 18478
            },
            [Category.Lap]: {
              personalBest: 6073,
              goal: 6066,
              worldRecord: 6066
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 18489,
              goal: 18489,
              worldRecord: 18366
            },
            [Category.Lap]: {
              personalBest: 6098,
              goal: 6098,
              worldRecord: 6066
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 18631,
              worldRecord: 18450
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 6137,
              worldRecord: 6076
            }
          },
          grinds: []
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 17496,
              goal: 17496,
              worldRecord: 17379
            },
            [Category.Lap]: {
              personalBest: 5766,
              goal: 5766,
              worldRecord: 5713
            }
          },
          grinds: []
        },
      }
    },
    [Track.HotAirSkyway]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 10855,
              goal: 10855,
              worldRecord: 10284
            },
            [Category.Lap]: {
              personalBest: 2387,
              goal: 2310,
              worldRecord: 2266
            },
            [Category.SL]: {
              personalBest: 3787,
              goal: 3787,
              worldRecord: 3357
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 11500,
              worldRecord: 11140
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 3800,
              worldRecord: 3521
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 11745,
              goal: 11600,
              worldRecord: 11492
            },
            [Category.Lap]: {
              personalBest: 3514,
              goal: 3494,
              worldRecord: 3494
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 11436,
              worldRecord: 11436
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 3388,
              worldRecord: 3388
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 11423,
              worldRecord: 11423
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2310,
              worldRecord: 2276
            }
          },
          grinds: []
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 14975,
              goal: 14975,
              worldRecord: 14975
            },
            [Category.Lap]: {
              personalBest: 4867,
              goal: 4715,
              worldRecord: 4715
            }
          },
          grinds: []
        }
      },
      [Restriction.Classic]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: null,
              worldRecord: 10700
            },
            [Category.Lap]: {
              personalBest: null,
              goal: null,
              worldRecord: 2970
            }
          },
          grinds: []
        }
      }
    },
    [Track.NGinLabs]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 12675,
              goal: 12675,
              worldRecord: 12545
            },
            [Category.Lap]: {
              personalBest: 4079,
              goal: 4079,
              worldRecord: 3998
            },
            [Category.SL]: {
              personalBest: 4387,
              goal: 4387,
              worldRecord: 4354
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 12899,
              worldRecord: 12844
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 4182,
              worldRecord: 4153
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 12917,
              goal: 12917,
              worldRecord: 12917
            },
            [Category.Lap]: {
              personalBest: 4154,
              goal: 4154,
              worldRecord: 4116
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 13073,
              goal: 13073,
              worldRecord: 13073
            },
            [Category.Lap]: {
              personalBest: 4180,
              goal: 4180,
              worldRecord: 4093
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 13074,
              worldRecord: 13074
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 4166,
              worldRecord: 4093
            }
          },
          grinds: []
        }
      },
    },
    [Track.OxideStation]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 11604,
              goal: 11629,
              worldRecord: 9729
            },
            [Category.Lap]: {
              personalBest: 3608,
              goal: 3817,
              worldRecord: 1362
            },
            [Category.SL]: {
              personalBest: 3608,
              goal: 3831,
              worldRecord: 3169
            }
          },
          grinds: [
            {
              bestCourse: 11604,
              bestLap: 3608,
              bestLapInCourse: 3608,
              bestSL: 3608,
              bestPace: [3921, 3778]
            }
          ]
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: 11834,
              goal: 11850,
              worldRecord: 10216
            },
            [Category.Lap]: {
              personalBest: 3916,
              goal: 3925,
              worldRecord: 3278
            }
          },
          grinds: [
            {
              bestCourse: 11834,
              bestLap: 3916,
              bestLapInCourse: 3916,
              bestSL: 3979,
              bestPace: [3979, 3939]
            }
          ]
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 11869,
              goal: 11900,
              worldRecord: 11758
            },
            [Category.Lap]: {
              personalBest: 3892,
              goal: 3900,
              worldRecord: 1362
            }
          },
          grinds: [
            {
              bestCourse: 11869,
              bestLap: 3892,
              bestLapInCourse: 3892,
              bestSL: 3964,
              bestPace: [3964, 3892]
            }
          ]
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 12021,
              goal: 12100,
              worldRecord: 12021
            },
            [Category.Lap]: {
              personalBest: 3954,
              goal: 4000,
              worldRecord: 3619
            }
          },
          grinds: [
            {
              bestCourse: 12021,
              bestLap: 3954,
              bestLapInCourse: 3954,
              bestSL: 4067,
              bestPace: [4067, 3954]
            }
          ]
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: 12213,
              goal: 12300,
              worldRecord: 11922
            },
            [Category.Lap]: {
              personalBest: 4027,
              goal: 4050,
              worldRecord: 1477
            }
          },
          grinds: [
            {
              bestCourse: 12213,
              bestLap: 4027,
              bestLapInCourse: 4027,
              bestSL: 4133,
              bestPace: [4133, 4027]
            }
          ]
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 17728,
              goal: 17762,
              worldRecord: 17762
            },
            [Category.Lap]: {
              personalBest: 5827,
              goal: 5888,
              worldRecord: 5888
            }
          },
          grinds: [
            {
              bestCourse: 17728,
              bestLap: 5827,
              bestLapInCourse: 5827,
              bestSL: 6022,
              bestPace: [6022, 5827]
            }
          ]
        }
      },
      [Restriction.Classic]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 11604,
              goal: 11629,
              worldRecord: 11279
            },
            [Category.Lap]: {
              personalBest: 3778,
              goal: 3817,
              worldRecord: 3671
            }
          },
          grinds: [
            {
              bestCourse: 11604,
              bestLap: 3778,
              bestLapInCourse: 3778,
              bestSL: 3810,
              bestPace: [3921, 3778]
            }
          ]
        }
      }
    },
    [Track.SlideColiseum]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7555,
              goal: 7555,
              worldRecord: 7483
            },
            [Category.Lap]: {
              personalBest: 2422,
              goal: 2422,
              worldRecord: 2371
            },
            [Category.SL]: {
              personalBest: 2512,
              goal: 2512,
              worldRecord: 2510
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 7916,
              worldRecord: 7916
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2533,
              worldRecord: 2533
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 8400,
              goal: 8400,
              worldRecord: 8400
            },
            [Category.Lap]: {
              personalBest: 2559,
              goal: 2559,
              worldRecord: 2559
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 8522,
              goal: 8522,
              worldRecord: 8522
            },
            [Category.Lap]: {
              personalBest: 2599,
              goal: 2599,
              worldRecord: 2599
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 8711,
              worldRecord: 8711
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2645,
              worldRecord: 2645
            }
          },
          grinds: []
        }
      },
      [Restriction.Skipless]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 9670,
              goal: 9670,
              worldRecord: 9670
            },
            [Category.Lap]: {
              personalBest: 3189,
              goal: 3189,
              worldRecord: 3189
            }
          },
          grinds: []
        }
      },
      [Restriction.Classic]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 8950,
              goal: 8950,
              worldRecord: 8878
            },
            [Category.Lap]: {
              personalBest: 2909,
              goal: 2909,
              worldRecord: 2844
            }
          },
          grinds: []
        }
      }
    },
    [Track.TurboTrack]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 8481,
              goal: 8481,
              worldRecord: 8395
            },
            [Category.Lap]: {
              personalBest: 2721,
              goal: 2721,
              worldRecord: 2696
            },
            [Category.SL]: {
              personalBest: 2872,
              goal: 2872,
              worldRecord: 2849
            }
          },
          grinds: []
        },
        [Engine.Speed]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 8779,
              worldRecord: 8779
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2858,
              worldRecord: 2858
            }
          },
          grinds: []
        },
        [Engine.Acceleration]: {
          categories: {
            [Category.Course]: {
              personalBest: 8706,
              goal: 8640,
              worldRecord: 8640
            },
            [Category.Lap]: {
              personalBest: 2782,
              goal: 2773,
              worldRecord: 2773
            }
          },
          grinds: []
        },
        [Engine.Balanced]: {
          categories: {
            [Category.Course]: {
              personalBest: 8582,
              goal: 8553,
              worldRecord: 8553
            },
            [Category.Lap]: {
              personalBest: 2757,
              goal: 2742,
              worldRecord: 2742
            }
          },
          grinds: []
        },
        [Engine.Turn]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 8516,
              worldRecord: 8465
            },
            [Category.Lap]: {
              personalBest: null,
              goal: 2721,
              worldRecord: 2713
            }
          },
          grinds: []
        }
      },
    },
  },
  [Mode.RelicRace]: {
    [Track.CrashCove]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 1901,
              goal: 1903,
              worldRecord: 1901
            }
          },
          grinds: [
            {
              bestCourse: 1901
            }
          ]
        }
      }
    },
    [Track.RoosTubes]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 1973,
              goal: 2008,
              worldRecord: 1973
            }
          },
          grinds: [
            {
              bestCourse: 1973
            }
          ]
        }
      }
    },
    [Track.TigerTemple]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 552,
              worldRecord: 552
            }
          },
          grinds: []
        }
      }
    },
    [Track.CocoPark]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 1776,
              worldRecord: 1776
            }
          },
          grinds: []
        }
      }
    },
    [Track.MysteryCaves]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 4989,
              worldRecord: 4989
            }
          },
          grinds: []
        }
      }
    },
    [Track.BlizzardBluff]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 1071,
              goal: 1298,
              worldRecord: 1071
            }
          },
          grinds: [
            {
              bestCourse: 1071
            }
          ]
        }
      }
    },
    [Track.SewerSpeedway]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: -655,
              worldRecord: -689
            }
          },
          grinds: []
        }
      }
    },
    [Track.DingoCanyon]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 1981,
              worldRecord: 1981
            }
          },
          grinds: []
        }
      }
    },
    [Track.PapusPyramid]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 364,
              worldRecord: -658
            }
          },
          grinds: []
        }
      }
    },
    [Track.DragonMines]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 1691,
              worldRecord: 1691
            }
          },
          grinds: []
        }
      }
    },
    [Track.PolarPass]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 6785,
              worldRecord: 6785
            }
          },
          grinds: []
        }
      }
    },
    [Track.CortexCastle]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 4036,
              worldRecord: 4036
            }
          },
          grinds: []
        }
      }
    },
    [Track.TinyArena]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 9973,
              worldRecord: 9973
            }
          },
          grinds: []
        }
      }
    },
    [Track.HotAirSkyway]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 4640,
              worldRecord: 4640
            }
          },
          grinds: []
        }
      }
    },
    [Track.NGinLabs]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 1095,
              worldRecord: 1095
            }
          },
          grinds: []
        }
      }
    },
    [Track.OxideStation]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: 7799,
              goal: 7821,
              worldRecord: 7799
            }
          },
          grinds: [
            {
              bestCourse: 7799
            }
          ]
        }
      }
    },
    [Track.SlideColiseum]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: 3353,
              worldRecord: 3353
            }
          },
          grinds: []
        }
      }
    },
    [Track.TurboTrack]: {
      [Restriction.NoRestriction]: {
        [Engine.GrindBest]: {
          categories: {
            [Category.Course]: {
              personalBest: null,
              goal: -21,
              worldRecord: -21
            }
          },
          grinds: []
        }
      }
    },
  }
};