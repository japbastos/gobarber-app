import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 0}px;
`;

export const ContainerButtons = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-top: 64px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 64px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;
