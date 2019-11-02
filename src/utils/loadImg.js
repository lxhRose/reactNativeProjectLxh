/*
 * @description 图片预加载
 * @author 吕兴海
 * @update 2019/11/02
 */
import React from 'react';
import { Image } from 'react-native';
/**
 * 图片预加载函数
 * @img 图片对象或者存放图片的数组
 */
export default LoadImg = (img) => {
  if (Array.isArray(img)) {
    return img.map((item, i) => <Image key={i} source={item} style={{ display: 'none' }} />);
  } else {
    return <Image source={img} style={{ display: 'none' }} />
  }
}
