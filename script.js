TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2300,
       "width": 6434,
       "url": "media/panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1430,
       "width": 4002,
       "url": "media/panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to stage",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C4DAB07F_C9D2_9087_4193_620EA471DFD6",
      "maps": [
       {
        "hfov": 5.69,
        "yaw": -7.98,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 16,
           "url": "media/panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.73
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -7.98,
        "hfov": 5.69,
        "image": {
         "levels": [
          {
           "height": 169,
           "width": 101,
           "url": "media/panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.73
       }
      ]
     }
    ]
   }
  ],
  "vfov": 128.69,
  "partial": false,
  "id": "panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82",
  "mapLocations": [
   {
    "x": 387.84,
    "map": {
     "thumbnailUrl": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_t.png",
     "fieldOfViewOverlayInsideOpacity": 0.3,
     "width": 677,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "height": 1595,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 1,
     "image": {
      "levels": [
       {
        "height": 1595,
        "width": 677,
        "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 797,
        "grayscale": true,
        "width": 338,
        "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_lq.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "id": "map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
     "label": "MapsScreenShot3",
     "maximumZoomFactor": 1,
     "overlays": [
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DE172E05_D32B_8844_41E8_9341C93A13DB",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 285.34,
        "width": 45,
        "y": 1191.88,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 285.34,
        "y": 1191.88,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DCC4FD0B_D33A_884D_41DB_2729DF7E374B",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 365.34,
        "width": 45,
        "y": 1320.88,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 365.34,
        "y": 1320.88,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C3FA76D8_D326_B9CC_41DB_572C13B5CAE8",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 244.29,
        "width": 45,
        "y": 1068.81,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 244.29,
        "y": 1068.81,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C3B48912_D35B_885C_41E0_F829A516D5E9",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 370.2,
        "width": 45,
        "y": 961.68,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_3_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 370.2,
        "y": 961.68,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_3.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C3F76F2B_D35A_884C_41DE_4F798E16E8FC",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 484.83,
        "width": 45,
        "y": 907.59,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 484.83,
        "y": 907.59,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C24CE350_D36A_764C_41C9_3ED31D99E521",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 453.47,
        "width": 45,
        "y": 720.28,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 453.47,
        "y": 720.28,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C1424475_D37D_B235_41EA_0531DA4768CE",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 586.56,
        "width": 45,
        "y": 624.94,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_6_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 586.56,
        "y": 624.94,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_6.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C08BC26F_D35A_7654_41BD_36EBC3AAF443",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 595.43,
        "width": 45,
        "y": 435.82,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_7_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 595.43,
        "y": 435.82,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_7.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C0CABE30_D35D_91CB_41E0_19CAE97E8996",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 430.28,
        "width": 45,
        "y": 391.22,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_8_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 430.28,
        "y": 391.22,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_8.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C70A468D_D325_9ED5_41E8_05FA09D8D0F0",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 232.39,
        "width": 45,
        "y": 318.04,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_9_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 232.39,
        "y": 318.04,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_9.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DF80F1AD_D38D_4B3C_41C0_2603C18677DB",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 185.8,
        "width": 45,
        "y": 383.3,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_10_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 185.8,
        "y": 383.3,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 44,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_10.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DDBCAA06_D38D_D8EF_41E0_353C48151154",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 125.17,
        "width": 45,
        "y": 507.78,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_11_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 125.17,
        "y": 507.78,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_11.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DCF01A84_D394_D9EC_41D4_0DD88ADC8AA8",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 21.14,
        "width": 45,
        "y": 601.56,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_12_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 21.14,
        "y": 601.56,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_12.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_DCF44B57_D395_FF6D_41E0_ABDDE3FEE722",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 33.98,
        "width": 45,
        "y": 731.9,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_13_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 33.98,
        "y": 731.9,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_13.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 15)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C3CE75E0_D39D_4B24_41D8_D0D38666F538",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 154.4,
        "width": 45,
        "y": 792.24,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_14_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 154.4,
        "y": 792.24,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_14.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 16)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C28EF762_D39D_5727_41E5_23BB5AFB31F3",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 42.9,
        "width": 45,
        "y": 951.79,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_15_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 42.9,
        "y": 951.79,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_15.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C2814D66_D395_5B2C_41A4_34F2434F52C0",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 289.91,
        "width": 45,
        "y": 578.86,
        "height": 45,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 22,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_16_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 289.91,
        "y": 578.86,
        "width": 45,
        "height": 45,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_C11F4B71_CD33_A66F_41E4_6B01D9B95258_HS_16.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.05,
     "class": "Map"
    },
    "y": 1343.38,
    "angle": -26.48,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -25.09,
  "hfovMax": 80,
  "hfov": 360,
  "hfovMin": 25,
  "label": "Park",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "buttonRestart": {
   "verticalAlign": "middle",
   "borderSize": 0,
   "toolTipOpacity": 0.7,
   "paddingRight": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "mode": "push",
   "width": 30,
   "toolTipPaddingTop": 4,
   "toolTipShadowColor": "#333333",
   "height": 30,
   "toolTipTextShadowOpacity": 0,
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#000000",
   "rollOverIconURL": "skin/IconButton_DE67A7D5_CD7D_AE56_41E3_6CB22DCC452E_rollover.png",
   "toolTip": "Replay show",
   "borderRadius": 0,
   "toolTipDisplayTime": 600,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "pressedIconURL": "skin/IconButton_DE67A7D5_CD7D_AE56_41E3_6CB22DCC452E_pressed.png",
   "toolTipShadowSpread": 0,
   "horizontalAlign": "center",
   "toolTipTextShadowColor": "#000000",
   "minHeight": 0,
   "minWidth": 0,
   "toolTipShadowOpacity": 1,
   "class": "IconButton",
   "toolTipBorderRadius": 3,
   "cursor": "hand",
   "toolTipPaddingBottom": 4,
   "shadow": false,
   "toolTipFontFamily": "Century Gothic",
   "backgroundOpacity": 0,
   "toolTipBorderColor": "#767676",
   "id": "IconButton_DE67A7D5_CD7D_AE56_41E3_6CB22DCC452E",
   "data": {
    "name": "Button37500"
   },
   "bottom": "2%",
   "toolTipFontStyle": "normal",
   "iconURL": "skin/IconButton_DE67A7D5_CD7D_AE56_41E3_6CB22DCC452E.png",
   "paddingBottom": 0,
   "toolTipFontWeight": "bold",
   "toolTipFontSize": 14,
   "left": "30%",
   "toolTipShadowVerticalLength": 0,
   "transparencyActive": true,
   "toolTipPaddingRight": 6,
   "toolTipBorderSize": 1,
   "toolTipPaddingLeft": 6
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "viewerArea": {
   "progressHeight": 10,
   "toolTipOpacity": 0.7,
   "progressBottom": 2,
   "paddingRight": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "playbackBarProgressBorderRadius": 0,
   "transitionMode": "blending",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipTextShadowOpacity": 0,
   "toolTipDisplayTime": 600,
   "toolTipFontColor": "#000000",
   "borderRadius": 0,
   "progressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 1,
   "shadow": false,
   "class": "ViewerArea",
   "playbackBarProgressOpacity": 1,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBottom": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "paddingBottom": 0,
   "toolTipFontSize": 14,
   "playbackBarHeadBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadBorderSize": 0,
   "progressBarOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBarBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "height": "97.721%",
   "playbackBarHeadShadow": true,
   "toolTipTextShadowColor": "#000000",
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarLeft": 0,
   "width": "86.708%",
   "progressBackgroundColorRatios": [
    0
   ],
   "paddingLeft": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadHeight": 15,
   "progressRight": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarBorderColor": "#000000",
   "minHeight": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipBorderRadius": 3,
   "progressBackgroundOpacity": 1,
   "top": "1.11%",
   "playbackBarHeight": 10,
   "progressBorderRadius": 0,
   "toolTipPaddingBottom": 4,
   "progressOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipFontFamily": "Century Gothic",
   "progressLeft": 0,
   "toolTipBorderColor": "#767676",
   "id": "MapViewer",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontStyle": "normal",
   "playbackBarBorderRadius": 0,
   "progressBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "bold",
   "progressBarBorderSize": 0,
   "transitionDuration": 500,
   "playbackBarBackgroundColorDirection": "vertical",
   "left": "1.63%",
   "playbackBarRight": 0,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "borderSize": 0,
   "toolTipPaddingRight": 6
  }
 },
 {
  "id": "panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 14.1,
     "path": "shortest",
     "pitchSpeed": 27.68,
     "yawSpeed": 76.25,
     "easing": "cubic_in_out",
     "targetPitch": 7.41,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 8.89,
     "path": "longest",
     "pitchSpeed": 77.21,
     "yawSpeed": 216,
     "easing": "cubic_in_out",
     "targetPitch": -6.04,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_D48A7C2B_CD55_A1F1_41D9_36AFEF5309A1",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 60,
   "yaw": -23.54,
   "class": "PanoramaCameraPosition",
   "pitch": -67.68
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2306,
       "width": 6434,
       "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1434,
       "width": 4002,
       "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to lake",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DB845A5E_C9D3_7089_41E5_0DFE90EF0216",
      "maps": [
       {
        "hfov": 7.11,
        "yaw": -27.02,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.59
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -27.02,
        "hfov": 7.11,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.59
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to park",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DE8EE49A_CA71_9189_41AB_8F8932ABD63A",
      "maps": [
       {
        "hfov": 6.83,
        "yaw": 137.95,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -26.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 137.95,
        "hfov": 6.83,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -26.03
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_D9B07587_CF73_E2B2_41E2_88E9CCA1CCA2, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D95D1AEE_CF74_E672_41CD_D6A6AFF9CE72",
      "maps": [
       {
        "hfov": 10.01,
        "yaw": -39.31,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.22
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -39.31,
        "hfov": 10.01,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 196,
           "url": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -24.22
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.02,
  "partial": false,
  "id": "panorama_C2333676_C9CF_9099_41CE_297D811CBA2D",
  "mapLocations": [
   {
    "x": 307.84,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 1214.38,
    "angle": 10.11,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.97,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 25,
  "label": "Stage",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_t.jpg"
 },
 {
  "id": "panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 70,
   "yaw": -21.21,
   "class": "PanoramaCameraPosition",
   "pitch": -10.47
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2311,
       "width": 6434,
       "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1437,
       "width": 4002,
       "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to bus station",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D9E3EF9E_CA73_8F89_41E4_D7DE15C20AAB",
      "maps": [
       {
        "hfov": 7.65,
        "yaw": 19.2,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 16,
           "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 19.2,
        "hfov": 7.65,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 136,
           "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.86
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to stage",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DEE892D2_CA7E_B19E_41E7_822C48D61467",
      "maps": [
       {
        "hfov": 9.39,
        "yaw": 110.41,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 16,
           "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.58
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 110.41,
        "hfov": 9.39,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 169,
           "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.58
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_C08870DD_D39F_C91D_4199_49C6C93B962E, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C7AB377A_D39F_F727_41E0_67DB11F1C048",
      "maps": [
       {
        "hfov": 10.65,
        "yaw": 57.13,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.41
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 57.13,
        "hfov": 10.65,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 195,
           "url": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.41
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.3,
  "partial": false,
  "id": "panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7",
  "mapLocations": [
   {
    "x": 266.79,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 1091.31,
    "angle": 43.95,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.79,
  "hfovMax": 110,
  "hfov": 360,
  "hfovMin": 40,
  "label": "Lake",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_t.jpg"
 },
 {
  "id": "panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 100,
   "yaw": -64.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0.94
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2312,
       "width": 6434,
       "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1438,
       "width": 4002,
       "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to lake",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DC91807C_CA56_908A_41BF_32C32B987FFC",
      "maps": [
       {
        "hfov": 9.42,
        "yaw": -147.21,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 16,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -34.04
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -147.21,
        "hfov": 9.42,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 203,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -34.04
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to campus",
        "click": "this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D2A30438_CA52_9089_41D3_9C5543FDB9E9",
      "maps": [
       {
        "hfov": 7.34,
        "yaw": -85.35,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.54
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -85.35,
        "hfov": 7.34,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.54
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to main car park",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DD84D0A8_CA53_7189_41E4_AA6F40E18CF3",
      "maps": [
       {
        "hfov": 5.79,
        "yaw": 56.98,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -40.18
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 56.98,
        "hfov": 5.79,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -40.18
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_C71C5947_D395_3B6C_41E6_6954618EE173, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C600C5F4_D395_4B2C_41E9_6C180B5F3B58",
      "maps": [
       {
        "hfov": 4.88,
        "yaw": -2.02,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -63.52
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -2.02,
        "hfov": 4.88,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 195,
           "url": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -63.52
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.31,
  "partial": false,
  "id": "panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E",
  "mapLocations": [
   {
    "x": 392.7,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 984.18,
    "angle": 14.43,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.84,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 35,
  "label": "Bus station",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_t.jpg"
 },
 {
  "id": "panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 80,
   "yaw": 66.25,
   "class": "PanoramaCameraPosition",
   "pitch": -59.88
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2312,
       "width": 6434,
       "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1438,
       "width": 4002,
       "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go ot bus station",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DD2D0BA2_CAD6_97BE_41DC_82DE642A7548",
      "maps": [
       {
        "hfov": 5.48,
        "yaw": 108.73,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -43.8
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 108.73,
        "hfov": 5.48,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -43.8
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to building C parking lot",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D23302F5_CAD6_919A_41B3_FE51FC61B2DB",
      "maps": [
       {
        "hfov": 6.61,
        "yaw": -142.91,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.59
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -142.91,
        "hfov": 6.61,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.59
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_C19AC1BA_D474_CB24_41C9_C83E54F34A6B, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C0F0CDA7_D475_DB2D_41E8_3AF5AEB66DAF",
      "maps": [
       {
        "hfov": 8.48,
        "yaw": 120.95,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -39.45
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 120.95,
        "hfov": 8.48,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 196,
           "url": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -39.45
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.32,
  "partial": false,
  "id": "panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005",
  "mapLocations": [
   {
    "x": 507.33,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 930.09,
    "angle": 125.78,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.82,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Main car park",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_t.jpg"
 },
 {
  "id": "panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1300,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 80,
   "yaw": -179.1,
   "class": "PanoramaCameraPosition",
   "pitch": -19.77
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2317,
       "width": 6434,
       "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1441,
       "width": 4002,
       "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to main car park",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D3766507_CAF2_9086_41D4_B5EFAA161610",
      "maps": [
       {
        "hfov": 6.62,
        "yaw": 76.68,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.34
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 76.68,
        "hfov": 6.62,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.34
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to chapel",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D370A6F9_CAF2_B18A_41C3_0EF277F55740",
      "maps": [
       {
        "hfov": 6.67,
        "yaw": -35.96,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.46
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -35.96,
        "hfov": 6.67,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -28.46
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to upper parking lot",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D39D9644_CAF2_90F9_41E4_A69139095BCF",
      "maps": [
       {
        "hfov": 10.18,
        "yaw": -140.6,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.73
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -140.6,
        "hfov": 10.18,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 194,
           "url": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.73
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.61,
  "partial": false,
  "id": "panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C",
  "mapLocations": [
   {
    "x": 475.97,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 742.78,
    "angle": 91.07,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.71,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Building C park. lot",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_t.jpg"
 },
 {
  "id": "panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 80,
   "yaw": 151.59,
   "class": "PanoramaCameraPosition",
   "pitch": -19.5
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2312,
       "width": 6434,
       "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1438,
       "width": 4002,
       "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to building C parking lot",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D35B3CEA_CAF2_B189_41C0_675B305C3D74",
      "maps": [
       {
        "hfov": 6.76,
        "yaw": 151,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.07
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 151,
        "hfov": 6.76,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -27.07
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to building C",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D38FCADE_CAFE_B186_41C6_47B5F3A7BD1B",
      "maps": [
       {
        "hfov": 6.78,
        "yaw": -87.67,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -26.61
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -87.67,
        "hfov": 6.78,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -26.61
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_C1863EE1_D497_F925_41D3_16C5946C9DCE, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C162EEA2_D494_D924_41E5_95DC889EA6BC",
      "maps": [
       {
        "hfov": 8.37,
        "yaw": -149.6,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 97,
           "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -40.21
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -149.6,
        "hfov": 8.37,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 195,
           "url": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -40.21
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.31,
  "partial": false,
  "id": "panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6",
  "mapLocations": [
   {
    "x": 609.06,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 647.44,
    "angle": 80.93,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.79,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Chapel",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_t.jpg"
 },
 {
  "id": "panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 70,
   "yaw": 168.32,
   "class": "PanoramaCameraPosition",
   "pitch": -7.92
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2312,
       "width": 6434,
       "url": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1438,
       "width": 4002,
       "url": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to Chapel",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D00290B3_CAF3_719F_41E3_79C16B34C93B",
      "maps": [
       {
        "hfov": 6.27,
        "yaw": 129.89,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -34.25
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 129.89,
        "hfov": 6.27,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -34.25
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to student residence",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D09E2D47_CAF2_B086_41E6_7A00AA4A5473",
      "maps": [
       {
        "hfov": 10.12,
        "yaw": -134.1,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.49
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -134.1,
        "hfov": 10.12,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 194,
           "url": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.49
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.31,
  "partial": false,
  "id": "panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F",
  "mapLocations": [
   {
    "x": 617.93,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 458.32,
    "angle": 53.35,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.84,
  "hfovMax": 90,
  "hfov": 360,
  "hfovMin": 25,
  "label": "Building C",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_t.jpg"
 },
 {
  "id": "panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 70,
   "yaw": 178.7,
   "class": "PanoramaCameraPosition",
   "pitch": -18.26
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2311,
       "width": 6434,
       "url": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1437,
       "width": 4002,
       "url": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to building C",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D141285E_CAF2_9089_41DC_96E969BC49FE",
      "maps": [
       {
        "hfov": 7.17,
        "yaw": 132.87,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.02
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 132.87,
        "hfov": 7.17,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.02
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to training ground",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D1616FD0_CAF2_8F9A_41C6_1B0E288C2165",
      "maps": [
       {
        "hfov": 7.27,
        "yaw": -51.16,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.41
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -51.16,
        "hfov": 7.27,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.41
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.3,
  "partial": false,
  "id": "panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74",
  "mapLocations": [
   {
    "x": 452.78,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 413.72,
    "angle": 356.07,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.87,
  "hfovMax": 105,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Student residence",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_t.jpg"
 },
 {
  "id": "panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 80,
   "yaw": -154.3,
   "class": "PanoramaCameraPosition",
   "pitch": -11
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2317,
       "width": 6434,
       "url": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1441,
       "width": 4002,
       "url": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to student residence",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D12F9455_CACF_909B_41C7_FFDDFDFF91F6",
      "maps": [
       {
        "hfov": 7.49,
        "yaw": 154.66,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.6
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 154.66,
        "hfov": 7.49,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.6
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to sports base",
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D1F749F1_CACF_739B_41E6_545D3D8417BE",
      "maps": [
       {
        "hfov": 7.04,
        "yaw": -108.66,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -108.66,
        "hfov": 7.04,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.03
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.59,
  "partial": false,
  "id": "panorama_C3049368_C916_128A_41CD_98BAAC122F59",
  "mapLocations": [
   {
    "x": 254.89,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 340.54,
    "angle": -46.79,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.72,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Training ground",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C3049368_C916_128A_41CD_98BAAC122F59_t.jpg"
 },
 {
  "id": "panorama_C3049368_C916_128A_41CD_98BAAC122F59_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1200,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 75,
   "yaw": -159.86,
   "class": "PanoramaCameraPosition",
   "pitch": -5.16
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2311,
       "width": 6434,
       "url": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1437,
       "width": 4002,
       "url": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to training ground",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D1914BEF_CAD3_9787_41C1_12E4D230FB8D",
      "maps": [
       {
        "hfov": 6.77,
        "yaw": 3.46,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -26.69
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 3.46,
        "hfov": 6.77,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -26.69
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to RC car track",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D65F2F30_CAD2_9099_41E9_187439B9CCC8",
      "maps": [
       {
        "hfov": 7.12,
        "yaw": -176.86,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -176.86,
        "hfov": 7.12,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.03
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.3,
  "partial": false,
  "id": "panorama_C3CCFDF2_C916_1199_41DB_228472995A65",
  "mapLocations": [
   {
    "x": 208.3,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 405.8,
    "angle": 384.85,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.79,
  "hfovMax": 95,
  "hfov": 360,
  "hfovMin": 25,
  "label": "Sports base",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C3CCFDF2_C916_1199_41DB_228472995A65_t.jpg"
 },
 {
  "id": "panorama_C3CCFDF2_C916_1199_41DB_228472995A65_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 71,
   "yaw": 124.9,
   "class": "PanoramaCameraPosition",
   "pitch": -10.75
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2311,
       "width": 6434,
       "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1437,
       "width": 4002,
       "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to sports base",
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D628A361_CAD7_90BB_41E4_54687CDB81B4",
      "maps": [
       {
        "hfov": 7.13,
        "yaw": 91.5,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.74
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 91.5,
        "hfov": 7.13,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.74
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to upper parking lot",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D6CE42B6_CAD1_7199_41C5_AE0266D36449",
      "maps": [
       {
        "hfov": 7.34,
        "yaw": 175.79,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.41
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 175.79,
        "hfov": 7.34,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.41
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to experimental farm",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D6EA31E1_CAD3_F3BA_41DE_D3D2E08D2A4B",
      "maps": [
       {
        "hfov": 7.19,
        "yaw": -70.87,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.35
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -70.87,
        "hfov": 7.19,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -18.35
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.3,
  "partial": false,
  "id": "panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2",
  "mapLocations": [
   {
    "x": 147.67,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 530.28,
    "angle": -65.6,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.83,
  "hfovMax": 95,
  "hfov": 360,
  "hfovMin": 30,
  "label": "RC car track",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_t.jpg"
 },
 {
  "id": "panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 70,
   "yaw": -136.71,
   "class": "PanoramaCameraPosition",
   "pitch": -3.2
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2317,
       "width": 6434,
       "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1441,
       "width": 4002,
       "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to builing C parking lot",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D69003D3_CAD2_979F_41AD_549DBD741F37",
      "maps": [
       {
        "hfov": 7.17,
        "yaw": -165.82,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.09
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -165.82,
        "hfov": 7.17,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.09
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to rc car track",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D4147F38_CAD3_B089_41E1_A1414AB5E740",
      "maps": [
       {
        "hfov": 7.15,
        "yaw": 1.7,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.69
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 1.7,
        "hfov": 7.15,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.69
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to experimental farm",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D7CFCEB8_CAD2_F189_41DC_F5F0591BB51B",
      "maps": [
       {
        "hfov": 7.37,
        "yaw": -27.88,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.87
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -27.88,
        "hfov": 7.37,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.87
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.59,
  "partial": false,
  "id": "panorama_C2985363_C916_12BE_41DF_B671BA499C7C",
  "mapLocations": [
   {
    "x": 312.41,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 601.36,
    "angle": 293.24,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.72,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Upper parking lot",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C2985363_C916_12BE_41DF_B671BA499C7C_t.jpg"
 },
 {
  "id": "panorama_C2985363_C916_12BE_41DF_B671BA499C7C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 30,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 100,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 80,
   "yaw": -102.38,
   "class": "PanoramaCameraPosition",
   "pitch": -17.76
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2306,
       "width": 6434,
       "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1434,
       "width": 4002,
       "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to rc car track",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D68CDAB7_CAD7_F187_41E4_B4B7722CFE8C",
      "maps": [
       {
        "hfov": 6.6,
        "yaw": 88.42,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.5
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 88.42,
        "hfov": 6.6,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.5
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to plantation",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D6BDCA6E_CAD1_B089_41D9_A457F8BE0E39",
      "maps": [
       {
        "hfov": 6.74,
        "yaw": -139.1,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.34
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -139.1,
        "hfov": 6.74,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -27.34
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to upper parking lot",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D786F260_CAD2_90B9_41DA_3733C9F73DB1",
      "maps": [
       {
        "hfov": 7.31,
        "yaw": 133.68,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.4
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 133.68,
        "hfov": 7.31,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.4
       }
      ]
     }
    ]
   }
  ],
  "vfov": 128.99,
  "partial": false,
  "id": "panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C",
  "mapLocations": [
   {
    "x": 43.64,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 624.06,
    "angle": -50.27,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.96,
  "hfovMax": 95,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Experimental farm",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_t.jpg"
 },
 {
  "id": "panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 25,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 120,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 70,
   "yaw": -173.27,
   "class": "PanoramaCameraPosition",
   "pitch": -13.41
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2317,
       "width": 6434,
       "url": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1441,
       "width": 4002,
       "url": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to experimental farm",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D7DEB1D9_CAD2_B38D_4184_8B0A73431717",
      "maps": [
       {
        "hfov": 5.64,
        "yaw": 96.46,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -42.02
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 96.46,
        "hfov": 5.64,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -42.02
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to \"Placc\"",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D478151C_CACE_9089_41E7_20CDDCA42DDF",
      "maps": [
       {
        "hfov": 7.37,
        "yaw": -142.35,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -47.46
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -142.35,
        "hfov": 7.37,
        "image": {
         "levels": [
          {
           "height": 195,
           "width": 194,
           "url": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -47.46
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.59,
  "partial": false,
  "id": "panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB",
  "mapLocations": [
   {
    "x": 56.48,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 754.4,
    "angle": -93.3,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.72,
  "hfovMax": 100,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Plantation",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_t.jpg"
 },
 {
  "id": "panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 25,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 120,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 80,
   "yaw": -176.35,
   "class": "PanoramaCameraPosition",
   "pitch": -26.79
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2317,
       "width": 6434,
       "url": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1441,
       "width": 4002,
       "url": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to Sapientia campus",
        "click": "this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D738F241_CA36_90FB_41CE_69F33ABD9612",
      "maps": [
       {
        "hfov": 7.04,
        "yaw": -30.61,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -30.61,
        "hfov": 7.04,
        "image": {
         "levels": [
          {
           "height": 238,
           "width": 136,
           "url": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.47
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to plantation",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D72DE50D_CA36_908A_41E0_1080BE5B7871",
      "maps": [
       {
        "hfov": 7.09,
        "yaw": 37.69,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.48
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 37.69,
        "hfov": 7.09,
        "image": {
         "levels": [
          {
           "height": 238,
           "width": 136,
           "url": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.48
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.6,
  "partial": false,
  "id": "panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504",
  "mapLocations": [
   {
    "x": 176.9,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 814.74,
    "angle": -117.76,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.73,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 30,
  "label": "\"Placc\"",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_t.jpg"
 },
 {
  "id": "panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 25,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 120,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 105,
   "yaw": 168.61,
   "class": "PanoramaCameraPosition",
   "pitch": -13.82
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2311,
       "width": 6434,
       "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1437,
       "width": 4002,
       "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to bus station",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DF11DF3F_CA5E_9087_41E8_E442E9F72657",
      "maps": [
       {
        "hfov": 7.17,
        "yaw": -124.53,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.98
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -124.53,
        "hfov": 7.17,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -18.98
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to lake",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D220B7C9_CA51_9F8A_41E8_F0F6FE914BAE",
      "maps": [
       {
        "hfov": 6.83,
        "yaw": -91.87,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.77
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -91.87,
        "hfov": 6.83,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -25.77
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Go to \"Placc\"",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_D48FC65A_CA33_B089_41C4_6C1780FCB4F7",
      "maps": [
       {
        "hfov": 5.73,
        "yaw": 167.13,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -40.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 167.13,
        "hfov": 5.73,
        "image": {
         "levels": [
          {
           "height": 237,
           "width": 135,
           "url": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -40.89
       }
      ]
     }
    ]
   }
  ],
  "vfov": 129.29,
  "partial": false,
  "id": "panorama_C5529683_C9CE_907F_41BF_B012D377DC68",
  "mapLocations": [
   {
    "x": 65.4,
    "map": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "y": 974.29,
    "angle": -137.16,
    "class": "PanoramaMapLocation"
   }
  ],
  "pitch": -24.85,
  "hfovMax": 95,
  "hfov": 360,
  "hfovMin": 30,
  "label": "Sapientia campus",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C5529683_C9CE_907F_41BF_B012D377DC68_t.jpg"
 },
 {
  "id": "panorama_C5529683_C9CE_907F_41BF_B012D377DC68_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    },
    {
     "yawSpeed": 15.91,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 312.5
    },
    {
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 23.75
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 25,
  "manualRotationSpeed": 1000,
  "automaticRotationSpeed": 120,
  "manualZoomSpeed": 4,
  "initialPosition": {
   "hfov": 70,
   "yaw": -174.83,
   "class": "PanoramaCameraPosition",
   "pitch": -22.92
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_camera",
    "media": "this.panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22F057F_D48F_4B1D_41C0_245498EF4964, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_C22F057F_D48F_4B1D_41C0_245498EF4964",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_camera",
    "media": "this.panorama_C2333676_C9CF_9099_41CE_297D811CBA2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22FF580_D48F_4BE3_41E5_3AC7CB651E5B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_C22FF580_D48F_4BE3_41E5_3AC7CB651E5B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_camera",
    "media": "this.panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22E5581_D48F_4BE5_41A2_E31C814F4565, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_C22E5581_D48F_4BE5_41A2_E31C814F4565",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_camera",
    "media": "this.panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22E2581_D48F_4BE5_41E3_A3743E07AD7E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_C22E2581_D48F_4BE5_41E3_A3743E07AD7E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_camera",
    "media": "this.panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22EF582_D48F_4BE7_41E2_DE024B11FA07, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_C22EF582_D48F_4BE7_41E2_DE024B11FA07",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_camera",
    "media": "this.panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2294582_D48F_4BE7_41E5_0A2C48A17F67, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_C2294582_D48F_4BE7_41E5_0A2C48A17F67",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_camera",
    "media": "this.panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2291583_D48F_4BE5_41D3_ABE7503D0DE3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_C2291583_D48F_4BE5_41D3_ABE7503D0DE3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_camera",
    "media": "this.panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2298583_D48F_4BE5_41DE_30D9C216575D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_C2298583_D48F_4BE5_41DE_30D9C216575D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_camera",
    "media": "this.panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2286584_D48F_4BE3_41E9_E386C7BA4F0D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_C2286584_D48F_4BE3_41E9_E386C7BA4F0D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C3049368_C916_128A_41CD_98BAAC122F59_camera",
    "media": "this.panorama_C3049368_C916_128A_41CD_98BAAC122F59",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2282584_D48F_4BE3_41E9_5941EDA0069A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_C2282584_D48F_4BE3_41E9_5941EDA0069A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C3CCFDF2_C916_1199_41DB_228472995A65_camera",
    "media": "this.panorama_C3CCFDF2_C916_1199_41DB_228472995A65",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C228F585_D48F_4BED_41DD_67B83E75EC0D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_C228F585_D48F_4BED_41DD_67B83E75EC0D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_camera",
    "media": "this.panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22B4586_D48F_4BEF_4199_121BDBB66C7B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_C22B4586_D48F_4BEF_4199_121BDBB66C7B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C2985363_C916_12BE_41DF_B671BA499C7C_camera",
    "media": "this.panorama_C2985363_C916_12BE_41DF_B671BA499C7C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22B2586_D48F_4BEF_41C2_E3C29DFAB39D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_C22B2586_D48F_4BEF_41C2_E3C29DFAB39D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_camera",
    "media": "this.panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22BF587_D48F_4BED_41DB_F816FE4831A3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_C22BF587_D48F_4BED_41DB_F816FE4831A3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_camera",
    "media": "this.panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22A4587_D48F_4BED_41E7_576B55CFA002, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_C22A4587_D48F_4BED_41E7_576B55CFA002",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_camera",
    "media": "this.panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22A2588_D48F_4BE3_41CA_EA4AE30D26CE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_C22A2588_D48F_4BE3_41CA_EA4AE30D26CE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_C5529683_C9CE_907F_41BF_B012D377DC68_camera",
    "media": "this.panorama_C5529683_C9CE_907F_41BF_B012D377DC68",
    "end": "this.trigger('tourEnded')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C22B7589_D48F_4BE5_41E6_FB700AD0521D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "id": "PanoramaPlayListItem_C22B7589_D48F_4BE5_41E6_FB700AD0521D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "id": "ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C23E1E67_C9CF_9087_41DE_5F4023796F82",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C2333676_C9CF_9099_41CE_297D811CBA2D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C2333676_C9CF_9099_41CE_297D811CBA2D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C2341EB0_C9CF_B199_41E4_5EC0AE6367B7",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C27F76E9_C9CF_B18B_41C1_89C7AF4FB48E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5CAEF3B_C9CF_908F_41E4_BA5446647005",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C236E6D1_C9CF_919B_41CC_8CD216210E3C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5DFCEC5_C9CF_71FB_41C7_415D1B774AF6",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5CE56CF_C9CF_7187_41DC_8269B3ED8A4F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C23AAE6C_C9CE_9089_41DE_21A2A248BC74",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C3049368_C916_128A_41CD_98BAAC122F59_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C3049368_C916_128A_41CD_98BAAC122F59",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 9, 10)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C3CCFDF2_C916_1199_41DB_228472995A65_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C3CCFDF2_C916_1199_41DB_228472995A65",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 10, 11)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C2B6E8E4_C916_7FB9_41D8_FDA7BF2505D2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 11, 12)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C2985363_C916_12BE_41DF_B671BA499C7C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C2985363_C916_12BE_41DF_B671BA499C7C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 12, 13)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C2674764_C916_32BA_41D3_03D4C88F5C2C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 13, 14)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C2868FE0_C916_31B9_41D2_CC47CEF62EAB",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 14, 15)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C3620E66_C9CE_B086_41E5_3C8935DEC504",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 15, 16)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C5529683_C9CE_907F_41BF_B012D377DC68_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5529683_C9CE_907F_41BF_B012D377DC68",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist, 16, 0)",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
 {
  "id": "playList_C22C357E_D48F_4B1F_41E0_261B58B2AB56",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "class": "MapPlayListItem"
   }
  ]
 },
 {
  "id": "playList_C22CC57F_D48F_4B1D_41E9_4734B2A358EB",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_C11F4B71_CD33_A66F_41E4_6B01D9B95258",
    "class": "MapPlayListItem"
   }
  ]
 },
 {
  "from": "left",
  "id": "effect_D9E84FB1_CD75_BEEE_41DD_99FC4454D9EF",
  "duration": 1200,
  "class": "SlideInEffect",
  "easing": "quart_in_out"
 },
 {
  "to": "left",
  "id": "effect_DB8F019B_CD4D_A2D3_41E7_C6A1585BBDF2",
  "duration": 400,
  "class": "SlideOutEffect",
  "easing": "cubic_out"
 },
 {
  "from": "left",
  "id": "effect_DE36640A_CD5C_A1BD_41DF_FC22957DF3DB",
  "duration": 500,
  "class": "SlideInEffect",
  "easing": "cubic_in"
 },
 {
  "from": "right",
  "id": "effect_D8130DD3_CD7C_E252_41E3_61774A1AC860",
  "duration": 1200,
  "class": "SlideInEffect",
  "easing": "quart_in_out"
 },
 {
  "to": "right",
  "id": "effect_D89554EE_CD7C_A272_41DA_FBC9E285403E",
  "duration": 500,
  "class": "SlideOutEffect",
  "easing": "cubic_out"
 },
 {
  "from": "right",
  "id": "effect_D8FC968D_CD77_AEB7_41DF_01318BBA0D49",
  "duration": 500,
  "class": "SlideInEffect",
  "easing": "cubic_in"
 },
 {
  "verticalAlign": "middle",
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyPaddingRight": 5,
  "closeButtonBackgroundColor": [],
  "paddingRight": 0,
  "modal": true,
  "titleFontColor": "#000000",
  "shadowSpread": 1,
  "headerPaddingRight": 10,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "headerBackgroundOpacity": 0.6,
  "gap": 10,
  "closeButtonIconWidth": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundOpacity": 0.72,
  "bodyPaddingLeft": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilColorDirection": "horizontal",
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "minWidth": 20,
  "class": "Window",
  "backgroundColorRatios": [],
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "shadow": true,
  "closeButtonPressedIconLineWidth": 1,
  "backgroundOpacity": 1,
  "title": "Sapientia Dendrological Park",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Century Gothic",
  "creationPolicy": "delayed",
  "layout": "vertical",
  "closeButtonPressedBackgroundOpacity": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "37%",
    "paddingTop": 0,
    "url": "media/photo_D67B32A4_CF4D_A6F6_41B6_C68C428523F6.png",
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "width": "100%",
    "minHeight": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "image_uidC21BA562_D48F_4B27_418B_DDE8305F4BE6_0",
    "data": {
     "name": "Image55854"
    },
    "paddingBottom": 0
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 10,
    "scrollBarColor": "#000000",
    "height": "23%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "width": "100%",
    "minHeight": 0,
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Century Gothic';\">One of the attractions of the Sapientia EMTE campus in T\u00e2rgu-Mure\u015f is the botanical garden, which has been created and maintained by the University's Department of Landscape Architecture and is freely accessible. In addition to the outdoor plant collection, woody trees and a small picturesque lake are also at your disposal. </SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uidC21BA562_D48F_4B27_418B_DDE8305F4BE6",
    "data": {
     "name": "HTMLText55855"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "38%",
    "paddingTop": 0,
    "url": "media/photo_D6B5352A_CF4C_A3F2_41CD_DEC2CFA80229.png",
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "width": "100%",
    "minHeight": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "image_uidC21BA562_D48F_4B27_418B_DDE8305F4BE6_2",
    "data": {
     "name": "Image55856"
    },
    "paddingBottom": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "bodyPaddingTop": 5,
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "width": 410,
  "titleFontStyle": "normal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 650,
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "headerPaddingLeft": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.06,
   0.15,
   0.29,
   0.45
  ],
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0.85,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "id": "window_D9B07587_CF73_E2B2_41E2_88E9CCA1CCA2",
  "data": {
   "name": "Window32277"
  },
  "closeButtonPaddingRight": 0,
  "footerBackgroundOpacity": 0.51,
  "bodyPaddingBottom": 5,
  "closeButtonPaddingTop": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "closeButtonRollOverBackgroundColor": [
   "#666666",
   "#000000",
   "#000000",
   "#000000",
   "#000000"
  ],
  "footerBorderSize": 0,
  "titleFontWeight": "bold",
  "titleFontSize": 14,
  "bodyBorderSize": 0,
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "titleTextDecoration": "none",
  "headerBorderSize": 0,
  "titlePaddingTop": 5,
  "headerBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonIconColor": "#000000"
 },
 {
  "verticalAlign": "middle",
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyPaddingRight": 5,
  "closeButtonBackgroundColor": [],
  "paddingRight": 0,
  "modal": true,
  "titleFontColor": "#000000",
  "shadowSpread": 1,
  "headerPaddingRight": 10,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "headerBackgroundOpacity": 0.5,
  "gap": 10,
  "closeButtonIconWidth": 12,
  "closeButtonRollOverBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilColorDirection": "horizontal",
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "minWidth": 20,
  "class": "Window",
  "backgroundColorRatios": [],
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadowHorizontalLength": 3,
  "shadow": true,
  "backgroundOpacity": 1,
  "title": "Statue of Semmelweis Ign\u00e1c",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Century Gothic",
  "creationPolicy": "delayed",
  "layout": "horizontal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 10,
    "scrollBarColor": "#000000",
    "height": "100%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "width": "30%",
    "minHeight": 0,
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Century Gothic';\">Semmelweis Ign\u00e1c was a Hungarian physician, now known as an early pioneer of antiseptic procedures. Described as the \"saviour of mothers\", Semmelweis discovered that the incidence of childbed fever could be drastically cut by the use of hand disinfection in obstetrical clinics.</SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uidC216C566_D48F_4B2F_41E8_794498568082",
    "data": {
     "name": "HTMLText55857"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "100%",
    "paddingTop": 0,
    "url": "media/photo_C7FADEC7_D395_F96C_41EA_3E92211526B2.jpg",
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "width": "69%",
    "minHeight": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "image_uidC216C566_D48F_4B2F_41E8_794498568082_1",
    "data": {
     "name": "Image55858"
    },
    "paddingBottom": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "bodyPaddingTop": 5,
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "width": 600,
  "titleFontStyle": "normal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 600,
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "headerPaddingLeft": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.04,
   0.21,
   0.61
  ],
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0.8,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "id": "window_C08870DD_D39F_C91D_4199_49C6C93B962E",
  "data": {
   "name": "Window17515"
  },
  "footerBorderSize": 0,
  "footerBackgroundOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "headerBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535",
   "#000000",
   "#000000",
   "#000000"
  ],
  "closeButtonPaddingRight": 0,
  "titleFontWeight": "bold",
  "titleFontSize": 14,
  "bodyBorderSize": 0,
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "titleTextDecoration": "none",
  "closeButtonPaddingTop": 0,
  "titlePaddingTop": 5,
  "headerBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonIconColor": "#000000"
 },
 {
  "verticalAlign": "middle",
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyPaddingRight": 5,
  "closeButtonBackgroundColor": [],
  "paddingRight": 0,
  "modal": true,
  "titleFontColor": "#000000",
  "shadowSpread": 1,
  "headerPaddingRight": 10,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "headerBackgroundOpacity": 0.6,
  "gap": 10,
  "closeButtonIconWidth": 12,
  "closeButtonRollOverBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilColorDirection": "horizontal",
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "minWidth": 20,
  "class": "Window",
  "backgroundColorRatios": [],
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadowHorizontalLength": 3,
  "shadow": true,
  "backgroundOpacity": 1,
  "title": "Sapientia Bus Station",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Century Gothic",
  "creationPolicy": "delayed",
  "layout": "horizontal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 10,
    "scrollBarColor": "#000000",
    "height": "100%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "width": "26%",
    "minHeight": 0,
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Century Gothic';\">The terminals of public transport lines 26, 27 and 44 are the bus stop next to the main building of Sapientia EMTE. People with bicycles and cars can also easily reach. Parking spaces have been developed for the latter.</SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uidC211656A_D48F_4B27_41E9_02C667AE8974",
    "data": {
     "name": "HTMLText55859"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "100%",
    "paddingTop": 0,
    "url": "media/photo_C17E8A46_D47B_D96C_41E7_0DCFEB18AC9D.jpg",
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "width": "73%",
    "minHeight": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "image_uidC211656A_D48F_4B27_41E9_02C667AE8974_1",
    "data": {
     "name": "Image55860"
    },
    "paddingBottom": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "bodyPaddingTop": 5,
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "width": 650,
  "titleFontStyle": "normal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 600,
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "headerPaddingLeft": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.05,
   0.19
  ],
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0.85,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "id": "window_C71C5947_D395_3B6C_41E6_6954618EE173",
  "data": {
   "name": "Window29335"
  },
  "footerBorderSize": 0,
  "footerBackgroundOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "headerBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535",
   "#000000",
   "#000000"
  ],
  "closeButtonPaddingRight": 0,
  "titleFontWeight": "bold",
  "titleFontSize": 14,
  "bodyBorderSize": 0,
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "titleTextDecoration": "none",
  "closeButtonPaddingTop": 0,
  "titlePaddingTop": 5,
  "headerBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonIconColor": "#000000"
 },
 {
  "verticalAlign": "middle",
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyPaddingRight": 5,
  "closeButtonBackgroundColor": [],
  "paddingRight": 0,
  "modal": true,
  "titleFontColor": "#000000",
  "shadowSpread": 1,
  "headerPaddingRight": 10,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "headerBackgroundOpacity": 0.6,
  "gap": 10,
  "closeButtonIconWidth": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundOpacity": 1,
  "bodyPaddingLeft": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilColorDirection": "horizontal",
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "minWidth": 20,
  "class": "Window",
  "backgroundColorRatios": [],
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "shadow": true,
  "closeButtonPressedIconLineWidth": 1,
  "backgroundOpacity": 1,
  "title": "Statue of J\u00e1nos Bolyai",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Century Gothic",
  "creationPolicy": "delayed",
  "layout": "vertical",
  "closeButtonPressedBackgroundOpacity": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 10,
    "scrollBarColor": "#000000",
    "height": "38%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "width": "100%",
    "minHeight": 0,
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Century Gothic';\">The creator of the J\u00e1nos Bolyai bust, the former dean of the J\u00e1nos Bolyai Military Technical College of Zr\u00ednyi Mikl\u00f3s National Defense University, Lajos Berek, who is also a visual artist, donated the statue to Marosv\u00e1s\u00e1rhely as a sign of his appreciation and respect for the people of Bolyai and the university.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;font-family:'Century Gothic';\">The headstones of the female ancestors, in the semicircle, from right to left, as is customary in mathematics: Krisztina Vajna P\u00e1vai, J\u00e1nos' grandmother, Kl\u00e1ra Kakutsi from Velsek\u00e1kopalna, J\u00e1nos' great-grandmother Erzs\u00e9bet F\u00f6ldv\u00e1r from Melegf\u00f6ldv\u00e1r, J\u00e1nos' great-grandmother, Erzs\u00e9bet Apafi from Apanagyfalus, J\u00e1nos's great-grandmother and Sarolta, Szent Istv\u00e1n's sister , John's great-grandmoth</SPAN><SPAN STYLE=\"font-family:'Century Gothic';\">er.</SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uidC211D56D_D48F_4B3D_41BE_5DE8A28DAE50",
    "data": {
     "name": "HTMLText55861"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "61%",
    "paddingTop": 0,
    "url": "media/photo_C276385C_D49F_591C_41CE_F7C34291F3CC.png",
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "width": "100%",
    "minHeight": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "image_uidC211D56D_D48F_4B3D_41BE_5DE8A28DAE50_1",
    "data": {
     "name": "Image55862"
    },
    "paddingBottom": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "bodyPaddingTop": 5,
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "width": 600,
  "titleFontStyle": "normal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 650,
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "headerPaddingLeft": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.04,
   0.11
  ],
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0.85,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "id": "window_C19AC1BA_D474_CB24_41C9_C83E54F34A6B",
  "data": {
   "name": "Window32885"
  },
  "footerBorderSize": 0,
  "footerBackgroundOpacity": 0.51,
  "bodyPaddingBottom": 5,
  "headerBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535",
   "#000000",
   "#000000"
  ],
  "closeButtonPaddingRight": 0,
  "titleFontWeight": "bold",
  "titleFontSize": 14,
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBorderSize": 0,
  "closeButtonPaddingTop": 0,
  "titlePaddingTop": 5,
  "headerBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonIconColor": "#000000"
 },
 {
  "verticalAlign": "middle",
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyPaddingRight": 5,
  "closeButtonBackgroundColor": [],
  "paddingRight": 0,
  "modal": true,
  "titleFontColor": "#000000",
  "shadowSpread": 1,
  "headerPaddingRight": 10,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "headerBackgroundOpacity": 0.6,
  "gap": 10,
  "closeButtonIconWidth": 12,
  "closeButtonRollOverBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyPaddingLeft": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilColorDirection": "horizontal",
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 12,
  "minWidth": 20,
  "class": "Window",
  "backgroundColorRatios": [],
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadowHorizontalLength": 3,
  "shadow": true,
  "backgroundOpacity": 1,
  "title": "Sapientia University Chapel",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Century Gothic",
  "creationPolicy": "delayed",
  "layout": "horizontal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 10,
    "scrollBarColor": "#000000",
    "height": "100%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "width": "26%",
    "minHeight": 0,
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Century Gothic';\">The chapel is located in the building of the Marosv\u00e1s\u00e1rhely faculty of the Hungarian University of Transylvania.</SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uidC2107573_D48F_4B25_41EA_1C05F64FAFE5",
    "data": {
     "name": "HTMLText55863"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "paddingRight": 0,
    "height": "100%",
    "paddingTop": 0,
    "url": "media/photo_C160B072_D4B7_4924_41C9_AB157DEC9F31.png",
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "width": "73%",
    "minHeight": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "image_uidC2107573_D48F_4B25_41EA_1C05F64FAFE5_1",
    "data": {
     "name": "Image55864"
    },
    "paddingBottom": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "bodyPaddingTop": 5,
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "width": 400,
  "titleFontStyle": "normal",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "height": 600,
  "paddingTop": 0,
  "closeButtonBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "headerPaddingLeft": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.05,
   0.06
  ],
  "closeButtonBackgroundColorRatios": [],
  "bodyBorderColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0.85,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "id": "window_C1863EE1_D497_F925_41D3_16C5946C9DCE",
  "data": {
   "name": "Window38104"
  },
  "footerBorderSize": 0,
  "footerBackgroundOpacity": 0.49,
  "bodyPaddingBottom": 5,
  "headerBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535",
   "#000000",
   "#000000"
  ],
  "closeButtonPaddingRight": 0,
  "titleFontWeight": "bold",
  "titleFontSize": 14,
  "bodyBorderSize": 0,
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "titleTextDecoration": "none",
  "closeButtonPaddingTop": 0,
  "titlePaddingTop": 5,
  "headerBorderColor": "#000000",
  "borderSize": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonIconColor": "#000000"
 },
 {
  "duration": 5000,
  "label": "Screenshot 2022-12-01 174907",
  "thumbnailUrl": "media/photo_D67B32A4_CF4D_A6F6_41B6_C68C428523F6_t.png",
  "width": 1125,
  "id": "photo_D67B32A4_CF4D_A6F6_41B6_C68C428523F6",
  "height": 687,
  "image": {
   "levels": [
    {
     "url": "media/photo_D67B32A4_CF4D_A6F6_41B6_C68C428523F6.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "Lake",
  "thumbnailUrl": "media/photo_D6B5352A_CF4C_A3F2_41CD_DEC2CFA80229_t.png",
  "width": 1127,
  "id": "photo_D6B5352A_CF4C_A3F2_41CD_DEC2CFA80229",
  "height": 685,
  "image": {
   "levels": [
    {
     "url": "media/photo_D6B5352A_CF4C_A3F2_41CD_DEC2CFA80229.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "800px-Semmelweis-szobor_a_Sapienti\u00e1n",
  "thumbnailUrl": "media/photo_C7FADEC7_D395_F96C_41EA_3E92211526B2_t.jpg",
  "width": 800,
  "id": "photo_C7FADEC7_D395_F96C_41EA_3E92211526B2",
  "height": 1170,
  "image": {
   "levels": [
    {
     "url": "media/photo_C7FADEC7_D395_F96C_41EA_3E92211526B2.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "buszmegallo",
  "thumbnailUrl": "media/photo_C17E8A46_D47B_D96C_41E7_0DCFEB18AC9D_t.jpg",
  "width": 1978,
  "id": "photo_C17E8A46_D47B_D96C_41E7_0DCFEB18AC9D",
  "height": 2413,
  "image": {
   "levels": [
    {
     "url": "media/photo_C17E8A46_D47B_D96C_41E7_0DCFEB18AC9D.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "BolyaiEmlekmu",
  "thumbnailUrl": "media/photo_C276385C_D49F_591C_41CE_F7C34291F3CC_t.png",
  "width": 1152,
  "id": "photo_C276385C_D49F_591C_41CE_F7C34291F3CC",
  "height": 726,
  "image": {
   "levels": [
    {
     "url": "media/photo_C276385C_D49F_591C_41CE_F7C34291F3CC.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "Kapolna",
  "thumbnailUrl": "media/photo_C160B072_D4B7_4924_41C9_AB157DEC9F31_t.png",
  "width": 362,
  "id": "photo_C160B072_D4B7_4924_41C9_AB157DEC9F31",
  "height": 732,
  "image": {
   "levels": [
    {
     "url": "media/photo_C160B072_D4B7_4924_41C9_AB157DEC9F31.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 0.7,
  "progressBottom": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#000000",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "shadow": false,
  "class": "ViewerArea",
  "playbackBarProgressOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBottom": 5,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 14,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "minHeight": 50,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "top": 0,
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Century Gothic",
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "bold",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "verticalAlign": "top",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "mode": "push",
    "width": 25,
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "height": 25,
    "toolTipTextShadowOpacity": 0,
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipFontColor": "#000000",
    "rollOverIconURL": "skin/IconButton_DC0DED4B_CD53_A3B2_41E5_2AFFF032D142_rollover.png",
    "toolTip": "Close navigator tab",
    "borderRadius": 0,
    "toolTipDisplayTime": 600,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "pressedIconURL": "skin/IconButton_DC0DED4B_CD53_A3B2_41E5_2AFFF032D142_pressed.png",
    "toolTipShadowSpread": 0,
    "click": "this.setComponentVisibility(this.Container_C205E745_CD35_6FB6_41E5_B1E7487F725D, false, 0, this.effect_DB8F019B_CD4D_A2D3_41E7_C6A1585BBDF2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_C2718448_CD37_A1BE_41D4_43F7FE30C0D9, true, 0, this.effect_D9E84FB1_CD75_BEEE_41DD_99FC4454D9EF, 'showEffect', false)",
    "horizontalAlign": "center",
    "toolTipTextShadowColor": "#000000",
    "minHeight": 0,
    "minWidth": 0,
    "toolTipShadowOpacity": 1,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "cursor": "hand",
    "toolTipPaddingBottom": 4,
    "shadow": false,
    "toolTipFontFamily": "Century Gothic",
    "backgroundOpacity": 0,
    "toolTipBorderColor": "#767676",
    "id": "IconButton_DC0DED4B_CD53_A3B2_41E5_2AFFF032D142",
    "data": {
     "name": "Button37502"
    },
    "bottom": "47%",
    "toolTipFontStyle": "normal",
    "iconURL": "skin/IconButton_DC0DED4B_CD53_A3B2_41E5_2AFFF032D142.png",
    "paddingBottom": 0,
    "toolTipFontWeight": "bold",
    "toolTipFontSize": 14,
    "transparencyActive": true,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingRight": 6,
    "toolTipBorderSize": 1,
    "toolTipPaddingLeft": 6,
    "right": "3%"
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "creationPolicy": "delayed",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "98.326%",
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "left",
  "width": "25.29%",
  "minHeight": 1,
  "minWidth": 1,
  "shadow": false,
  "class": "Container",
  "scrollBarMargin": 2,
  "visible": false,
  "backgroundOpacity": 0,
  "id": "Container_C205E745_CD35_6FB6_41E5_B1E7487F725D",
  "data": {
   "name": "Container3211"
  },
  "bottom": "0.7%",
  "paddingBottom": 0,
  "left": "0%",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "verticalAlign": "middle",
  "borderSize": 0,
  "toolTipOpacity": 0.7,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "mode": "push",
  "width": 25,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "height": 25,
  "toolTipTextShadowOpacity": 0,
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#000000",
  "rollOverIconURL": "skin/IconButton_C2718448_CD37_A1BE_41D4_43F7FE30C0D9_rollover.png",
  "toolTip": "Open navigator tab",
  "borderRadius": 0,
  "toolTipDisplayTime": 600,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "pressedIconURL": "skin/IconButton_C2718448_CD37_A1BE_41D4_43F7FE30C0D9_pressed.png",
  "toolTipShadowSpread": 0,
  "click": "this.setComponentVisibility(this.Container_C205E745_CD35_6FB6_41E5_B1E7487F725D, true, 0, this.effect_DE36640A_CD5C_A1BD_41DF_FC22957DF3DB, 'showEffect', false); this.setComponentVisibility(this.IconButton_C2718448_CD37_A1BE_41D4_43F7FE30C0D9, false, 0, null, null, false)",
  "horizontalAlign": "center",
  "toolTipTextShadowColor": "#000000",
  "minHeight": 0,
  "minWidth": 0,
  "toolTipShadowOpacity": 1,
  "class": "IconButton",
  "toolTipBorderRadius": 3,
  "cursor": "hand",
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "toolTipFontFamily": "Century Gothic",
  "backgroundOpacity": 0,
  "toolTipBorderColor": "#767676",
  "id": "IconButton_C2718448_CD37_A1BE_41D4_43F7FE30C0D9",
  "data": {
   "name": "Button37507"
  },
  "bottom": "47%",
  "toolTipFontStyle": "normal",
  "iconURL": "skin/IconButton_C2718448_CD37_A1BE_41D4_43F7FE30C0D9.png",
  "paddingBottom": 0,
  "toolTipFontWeight": "bold",
  "toolTipFontSize": 14,
  "left": "1%",
  "toolTipShadowVerticalLength": 0,
  "transparencyActive": true,
  "toolTipPaddingRight": 6,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6
 },
 {
  "verticalAlign": "top",
  "children": [
   {
    "verticalAlign": "top",
    "borderSize": 0,
    "itemThumbnailShadowBlurRadius": 8,
    "itemThumbnailShadowHorizontalLength": 3,
    "paddingRight": 20,
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemPaddingBottom": 3,
    "itemLabelGap": 8,
    "width": 201.44,
    "height": "90.476%",
    "selectedItemLabelFontWeight": "bold",
    "paddingTop": 10,
    "gap": 13,
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "playList": "this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist",
    "paddingLeft": 20,
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.54,
    "minWidth": 20,
    "selectedItemLabelFontColor": "#FFCC00",
    "horizontalAlign": "left",
    "itemThumbnailShadowColor": "#000000",
    "minHeight": 20,
    "rollOverItemBackgroundOpacity": 0,
    "class": "ThumbnailList",
    "itemThumbnailBorderRadius": 5,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "top": "0%",
    "scrollBarMargin": 2,
    "itemOpacity": 1,
    "itemMode": "normal",
    "shadow": false,
    "itemThumbnailShadowVerticalLength": 3,
    "backgroundOpacity": 0,
    "itemThumbnailShadow": true,
    "id": "ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093",
    "itemLabelTextDecoration": "none",
    "itemVerticalAlign": "middle",
    "itemThumbnailOpacity": 1,
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailWidth": 75,
    "itemBorderRadius": 0,
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "itemPaddingLeft": 3,
    "paddingBottom": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "data": {
     "name": "ThumbnailList35762"
    },
    "layout": "vertical",
    "right": "0.22%",
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom",
    "scrollBarOpacity": 0.5,
    "itemBackgroundColorRatios": []
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "mode": "push",
    "width": 25,
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "height": 25,
    "toolTipTextShadowOpacity": 0,
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipFontColor": "#000000",
    "rollOverIconURL": "skin/IconButton_DE89058E_CD4F_62B2_41E5_51FD296BF430_rollover.png",
    "toolTip": "Close",
    "borderRadius": 0,
    "toolTipDisplayTime": 600,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "pressedIconURL": "skin/IconButton_DE89058E_CD4F_62B2_41E5_51FD296BF430_pressed.png",
    "toolTipShadowSpread": 0,
    "click": "this.setComponentVisibility(this.Container_DFDDCE8E_CD4C_FEB2_41BB_E1CF58703A73, false, 0, this.effect_D89554EE_CD7C_A272_41DA_FBC9E285403E, 'hideEffect', false); this.setComponentVisibility(this.IconButton_DFFF2E9D_CD4F_DED6_41AF_F102B2FE682A, true, 0, this.effect_D8130DD3_CD7C_E252_41E3_61774A1AC860, 'showEffect', false)",
    "horizontalAlign": "center",
    "toolTipTextShadowColor": "#000000",
    "minHeight": 0,
    "minWidth": 0,
    "toolTipShadowOpacity": 1,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "cursor": "hand",
    "toolTipPaddingBottom": 4,
    "shadow": false,
    "toolTipFontFamily": "Century Gothic",
    "backgroundOpacity": 0,
    "toolTipBorderColor": "#767676",
    "id": "IconButton_DE89058E_CD4F_62B2_41E5_51FD296BF430",
    "data": {
     "name": "Button37507"
    },
    "bottom": "47%",
    "toolTipFontStyle": "normal",
    "iconURL": "skin/IconButton_DE89058E_CD4F_62B2_41E5_51FD296BF430.png",
    "paddingBottom": 0,
    "toolTipFontWeight": "bold",
    "toolTipFontSize": 14,
    "left": "0%",
    "toolTipShadowVerticalLength": 0,
    "transparencyActive": true,
    "toolTipPaddingRight": 6,
    "toolTipBorderSize": 1,
    "toolTipPaddingLeft": 6
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "mode": "push",
    "width": 23,
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "height": 35,
    "maxHeight": 35,
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipFontColor": "#000000",
    "toolTip": "Facebook",
    "toolTipTextShadowOpacity": 0,
    "toolTipTextShadowColor": "#000000",
    "toolTipDisplayTime": 600,
    "paddingLeft": 0,
    "borderRadius": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowSpread": 0,
    "click": "this.shareFacebook(location.href)",
    "horizontalAlign": "center",
    "minHeight": 1,
    "maxWidth": 23,
    "minWidth": 1,
    "toolTipShadowOpacity": 1,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "shadow": false,
    "cursor": "hand",
    "toolTipPaddingBottom": 4,
    "toolTipFontFamily": "Century Gothic",
    "backgroundOpacity": 0,
    "toolTipBorderColor": "#767676",
    "id": "IconButton_D9621EE5_CD7F_7E76_41C8_B64C2F1375D7",
    "data": {
     "name": "IconButton9908"
    },
    "bottom": "2%",
    "toolTipFontStyle": "normal",
    "iconURL": "skin/IconButton_D9621EE5_CD7F_7E76_41C8_B64C2F1375D7.png",
    "paddingBottom": 0,
    "toolTipFontWeight": "bold",
    "toolTipFontSize": 14,
    "left": "80%",
    "toolTipShadowVerticalLength": 0,
    "transparencyActive": true,
    "toolTipPaddingRight": 6,
    "toolTipBorderSize": 1,
    "toolTipPaddingLeft": 6
   },
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "mode": "toggle",
    "width": 30,
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "height": 30,
    "toolTipTextShadowOpacity": 0,
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipFontColor": "#000000",
    "toolTip": "Sound",
    "borderRadius": 0,
    "toolTipDisplayTime": 600,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "pressedIconURL": "skin/IconButton_DE6757D5_CD7D_AE56_41E5_851CC72F06AF_pressed.png",
    "toolTipShadowSpread": 0,
    "horizontalAlign": "center",
    "toolTipTextShadowColor": "#000000",
    "minHeight": 0,
    "minWidth": 0,
    "toolTipShadowOpacity": 1,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "cursor": "hand",
    "toolTipPaddingBottom": 4,
    "shadow": false,
    "toolTipFontFamily": "Century Gothic",
    "backgroundOpacity": 0,
    "toolTipBorderColor": "#767676",
    "id": "IconButton_DE6757D5_CD7D_AE56_41E5_851CC72F06AF",
    "data": {
     "name": "Button37509"
    },
    "bottom": "2%",
    "toolTipFontStyle": "normal",
    "iconURL": "skin/IconButton_DE6757D5_CD7D_AE56_41E5_851CC72F06AF.png",
    "paddingBottom": 0,
    "toolTipFontWeight": "bold",
    "toolTipFontSize": 14,
    "left": "55%",
    "toolTipShadowVerticalLength": 0,
    "transparencyActive": true,
    "toolTipPaddingRight": 6,
    "toolTipBorderSize": 1,
    "toolTipPaddingLeft": 6
   },
   "this.IconButton_DE67A7D5_CD7D_AE56_41E3_6CB22DCC452E",
   {
    "verticalAlign": "middle",
    "borderSize": 0,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "mode": "toggle",
    "width": 30,
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "height": 30,
    "maxHeight": 128,
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipFontColor": "#000000",
    "toolTip": "Full screen",
    "toolTipTextShadowOpacity": 0,
    "toolTipTextShadowColor": "#000000",
    "toolTipDisplayTime": 600,
    "paddingLeft": 0,
    "borderRadius": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowSpread": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "maxWidth": 128,
    "minWidth": 1,
    "toolTipShadowOpacity": 1,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "shadow": false,
    "cursor": "hand",
    "toolTipPaddingBottom": 4,
    "toolTipFontFamily": "Century Gothic",
    "backgroundOpacity": 0,
    "toolTipBorderColor": "#767676",
    "id": "IconButton_D9467D0A_CD73_A3BD_41C7_FE87FE44EA07",
    "data": {
     "name": "IconButton1493"
    },
    "bottom": "2%",
    "toolTipFontStyle": "normal",
    "iconURL": "skin/IconButton_D9467D0A_CD73_A3BD_41C7_FE87FE44EA07.png",
    "paddingBottom": 0,
    "toolTipFontWeight": "bold",
    "toolTipFontSize": 14,
    "left": "5%",
    "toolTipShadowVerticalLength": 0,
    "transparencyActive": true,
    "toolTipPaddingRight": 6,
    "toolTipBorderSize": 1,
    "toolTipPaddingLeft": 6
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "creationPolicy": "delayed",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "left",
  "width": "17.896%",
  "minHeight": 1,
  "minWidth": 1,
  "class": "Container",
  "top": "0%",
  "scrollBarMargin": 2,
  "visible": false,
  "shadow": false,
  "backgroundOpacity": 0,
  "id": "Container_DFDDCE8E_CD4C_FEB2_41BB_E1CF58703A73",
  "data": {
   "name": "Container12704"
  },
  "bottom": "0%",
  "paddingBottom": 0,
  "scrollBarOpacity": 0.25,
  "layout": "absolute",
  "right": "0.25%",
  "overflow": "scroll"
 },
 {
  "verticalAlign": "middle",
  "borderSize": 0,
  "toolTipOpacity": 0.7,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "mode": "push",
  "width": 25,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "height": 25,
  "toolTipTextShadowOpacity": 0,
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#000000",
  "rollOverIconURL": "skin/IconButton_DFFF2E9D_CD4F_DED6_41AF_F102B2FE682A_rollover.png",
  "toolTip": "Settings",
  "borderRadius": 0,
  "toolTipDisplayTime": 600,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "pressedIconURL": "skin/IconButton_DFFF2E9D_CD4F_DED6_41AF_F102B2FE682A_pressed.png",
  "toolTipShadowSpread": 0,
  "click": "this.setComponentVisibility(this.Container_DFDDCE8E_CD4C_FEB2_41BB_E1CF58703A73, true, 0, this.effect_D8FC968D_CD77_AEB7_41DF_01318BBA0D49, 'showEffect', false); this.setComponentVisibility(this.IconButton_DFFF2E9D_CD4F_DED6_41AF_F102B2FE682A, false, 0, null, null, false)",
  "horizontalAlign": "center",
  "toolTipTextShadowColor": "#000000",
  "minHeight": 0,
  "minWidth": 0,
  "toolTipShadowOpacity": 1,
  "class": "IconButton",
  "toolTipBorderRadius": 3,
  "cursor": "hand",
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "toolTipFontFamily": "Century Gothic",
  "backgroundOpacity": 0,
  "toolTipBorderColor": "#767676",
  "id": "IconButton_DFFF2E9D_CD4F_DED6_41AF_F102B2FE682A",
  "data": {
   "name": "Button37502"
  },
  "bottom": "47%",
  "toolTipFontStyle": "normal",
  "iconURL": "skin/IconButton_DFFF2E9D_CD4F_DED6_41AF_F102B2FE682A.png",
  "paddingBottom": 0,
  "toolTipFontWeight": "bold",
  "toolTipFontSize": 14,
  "transparencyActive": true,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "right": "1%"
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_C2F8F88E_CCC5_6ABE_41E4_6E8B3E78D093_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_C22CC57F_D48F_4B1D_41E9_4734B2A358EB.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_D9467D0A_CD73_A3BD_41C7_FE87FE44EA07].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "creationPolicy": "delayed",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "buttonToggleMute": "this.IconButton_DE6757D5_CD7D_AE56_41E5_851CC72F06AF",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } }
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "class": "Player",
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player457"
 },
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "buttonToggleFullscreen": "this.IconButton_D9467D0A_CD73_A3BD_41C7_FE87FE44EA07",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})