/**
 * 首页
 */

import { Text, View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { api, get_all_images } from '../../../api/index.js';
import ButtonsBox from '../../comps/ButtonsBox.jsx';
import AlbumsCard from '../AlbumsCard.jsx';
import NavBar from '../NavBar.jsx';
import TopBanner from '../TopBanner.jsx';
import WaterfallList from '../WaterfallList.jsx';

export default () => {
  let [allImages, setAllImages] = useState({ albums: {}, tags_image: {} });
  let [banners, setBanners] = useState([]);
  const getAllImages = async () => {
    let res = await get_all_images();
    if (res?.data) {
      setAllImages(res.data);
    }
  };
  const getBanners = async () => {
    let res = await api.getBanners();
    setBanners(res.data);
  };
  useEffect(() => {
    getBanners();
    getAllImages();
  }, []);
  return (
    <>
      {/* <NavBar></NavBar> */}

      <View
        style={{
          marginTop: '180rpx',
        }}
      >
        <TopBanner banners={banners} />
        <ButtonsBox
          buttons={[
            {
              imageUrl: require('../../../static/image/my/icons8-joker-dc-200.png'),
              pagePath: '/pages/activity/Activity',
              text: '#反派挑战',
              params: {
                title: '#反派挑战',
                description:
                  '分享你当反派能活到第几集\n参与活动，获取丰富奖励~',
              },
            },
            {
              imageUrl: require('../../../static/image/my/icons8-神奇女侠-100.png'),
              pagePath: '/pages/activity/Activity',
              text: '#繁花专场',
              params: {
                title: '#繁花专场',
                description: '繁花专场\n参与活动，获取丰富奖励~',
              },
            },
            {
              imageUrl: require('../../../static/image/my/icons8-编辑图像-100.png'),
              pagePath: '/pages/refine/index',
              text: 'AI修图',
              params: {
                title: '#AI修图',
                description:
                  '分享你当反派能活到第几集\n参与活动，获取丰富奖励~',
              },
            },
            {
              imageUrl: require('../../../static/image/my/icons8-获得现金-100.png'),
              pagePath: '/pages/activity/Activity',
              text: '晒一晒加积分',
              params: {
                title: '#晒一晒加积分',
                description: '晒一晒你的作品，获取积分',
              },
            },
          ]}
        />

        <View
          style={{
            fontSize: '36rpx',
            margin: '40rpx 18rpx 18rpx 18rpx ',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{}}>写真集</Text>
          {/* <View
          style={{
            display: 'flex',
            color: 'grey',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>更多</View>
          <View
            className="at-icon at-icon-chevron-right"
            style={{
              fontSize: '50rpx',
            }}></View>
        </View> */}
        </View>
        <AlbumsCard albums={allImages?.albums} />

        <View
          style={{
            fontSize: '36rpx',
            margin: '40rpx 18rpx 18rpx 18rpx ',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* <Text style={{}}>最近热门</Text> */}
        </View>
        <WaterfallList
          imageListLeft={allImages?.activityTagsImage?.['chunyu'] || []}
          imageListRight={allImages?.activityTagsImage?.['fenweigan'] || []}
        />
      </View>
    </>
  );
};