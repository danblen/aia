import { Image, Text, View } from '@tarojs/components';

export default ({ title, rightText, imageUrl, onRightClick }) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 40,
        width: '100%',
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '96%',
        }}
      >
        <View
          style={{
            display: 'flex',
          }}
        >
          {imageUrl && (
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
              }}
              src={imageUrl}
            ></Image>
          )}
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            color: 'grey',
            fontSize: 12,
          }}
          onClick={onRightClick}
        >
          {rightText === undefined ? '查看全部' : rightText}
        </View>
      </View>
    </View>
  );
};