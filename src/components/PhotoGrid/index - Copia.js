/**
 * Created by Sivaraj Nagaraj
 */
import React, { Component } from 'react';
import { View, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
import * as _ from 'lodash';
import { Container, PhotoView, FlexCol, AlignCenter, ExpandedView, ExpandedImage } from './styles';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      photoUrl: '',
    };
  }

  photoPopupToggle(photoUrl) {
    this.setState({ modalVisible: !this.state.modalVisible, photoUrl });
  }

  renderChunk() {
    const chunk = _.chunk(this.props.PhotosList, 9);

    return chunk.map((chunkItem, index) => {
      const row = _.chunk(chunkItem, 3);

      return row.map((rowItem, rowIndex) => {
        return this.renderPhotoRow(rowItem, rowIndex);
      });
    });
  }

  renderPhotoRow(rowItem, rowIndex) {
    if (rowIndex == 0) {
      return this.renderPhotoRow1(rowItem);
    } if (rowIndex == 1) {
      return this.renderPhotoRow2(rowItem);
    } if (rowIndex == 2) {
	  return this.renderPhotoRow3(rowItem);
    }
  }

  renderPhotoRow1(row) {
    console.log('row', row);
    return (
      <AlignCenter key={1}>
        {row.map((item, index) => {
          return (
            <PhotoView
              key={index}
              style={
                { borderRadius: this.props.borderRadius }
              }
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(item.url);
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
          );
        })}
      </AlignCenter>
    );
  }

  renderPhotoRow2(row) {
    if (row.length == 1) {
      return (
        <AlignCenter key={row[0].url}>
          <ExpandedView
            key={row[0].url}
            style={{borderRadius: this.props.borderRadius}}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[0].url);
              }}
            >
              <ExpandedImage
                source={{ uri: row[0].url }}
                style={[
                  styles.ImageStyle,
                  { borderRadius: this.props.borderRadius },
                ]}
              />
            </TouchableOpacity>
          </ExpandedView>
        </AlignCenter>
      );
    } if (row.length == 2) {
      return (
        <AlignCenter key={row[0].url}>
          <ExpandedView
            key={row[0].url}
            style={{borderRadius: this.props.borderRadius}}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[0].url);
              }}
            >
              <ExpandedImage
                source={{ uri: row[0].url }}
                style={[
                  styles.ImageStyle,
                  { borderRadius: this.props.borderRadius },
                ]}
              />
            </TouchableOpacity>
          </ExpandedView>
          <FlexCol key={row[1].url}>
            <PhotoView
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Image
                  source={{ uri: row[1].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
          </FlexCol>
        </AlignCenter>
      );
    } if (row.length == 3) {
      return (
        <AlignCenter key={row[0].url}>
          <ExpandedView
            key={row[0].url}
            style={{borderRadius: this.props.borderRadius}}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[0].url);
              }}
            >
              <ExpandedImage
                source={{ uri: row[0].url }}
                style={[
                  styles.ImageStyle,
                  { borderRadius: this.props.borderRadius },
                ]}
              />
            </TouchableOpacity>
          </ExpandedView>
          <FlexCol key={row[1].url}>
            <PhotoView
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Image
                  source={{ uri: row[1].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
            <PhotoView
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[2].url);
                }}
              >
                <Image
                  source={{ uri: row[2].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
          </FlexCol>
        </AlignCenter>
      );
    }
  }

  renderPhotoRow3(row) {
    if (row.length == 1) {
      return (
        <AlignCenter key={row[0].url}>
          <FlexCol key={row[0].url}>
            <PhotoView
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[0].url);
                }}
              >
                <Image
                  source={{ uri: row[0].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
          </FlexCol>
        </AlignCenter>
      );
    } if (row.length == 2) {
      return (
        <AlignCenter key={row[0].url}>
          <FlexCol key={row[0].url}>
            <PhotoView
              style={{borderRadius: this.props.borderRadius }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[0].url);
                }}
              >
                <Image
                  source={{ uri: row[0].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
            <PhotoView
              key={row[1].url}
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Image
                  source={{ uri: row[1].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
          </FlexCol>
        </AlignCenter>
      );
    } if (row.length == 3) {
      return (
        <AlignCenter key={row[0].url}>
          <FlexCol>
            <PhotoView
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[0].url);
                }}
              >
                <Image
                  source={{ uri: row[0].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
            <PhotoView
              style={{borderRadius: this.props.borderRadius}}
            >
              <TouchableOpacity
                onPress={() => {
                  this.photoPopupToggle(row[1].url);
                }}
              >
                <Image
                  source={{ uri: row[1].url }}
                  style={[
                    styles.ImageStyle,
                    { borderRadius: this.props.borderRadius },
                  ]}
                />
              </TouchableOpacity>
            </PhotoView>
          </FlexCol>
          <ExpandedView
            style={{borderRadius: this.props.borderRadius}}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle(row[2].url);
              }}
            >
              <ExpandedImage
                source={{ uri: row[2].url }}
                style={[
                  styles.ImageStyle,
                  { borderRadius: this.props.borderRadius },
                ]}
              />
            </TouchableOpacity>
          </ExpandedView>
        </AlignCenter>
      );
    }
  }

  renderGrid() {
    return <View>{this.renderChunk()}</View>;
  }

  render() {
    return (
      <Container>
        {this.renderGrid()}

        <View>
          <Modal
            animationType="fade"
            transparent={false}
            onRequestClose={() => {}}
            visible={this.state.modalVisible}
          >
            <TouchableOpacity
              onPress={() => {
                this.photoPopupToggle();
              }}
            >
              <Image
                source={{ uri: this.state.photoUrl }}
                onPress={() => {
                  this.photoPopupToggle();
                }}
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </Modal>
        </View>
      </Container>
    );
  }
}


/*Styles*/

const styles = {
	ImageStyle: {
        width: View.width,
        height: 120,
        resizeMode: 'cover'
    }
}



export { PhotoGrid };
