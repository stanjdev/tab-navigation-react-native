import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function AboutScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}>About Us</Text>
      <Text style={styles.subText}>I'm baby small batch chartreuse pour-over post-ironic organic, jianbing wolf hashtag fam Brooklyn marxism. Cliche shaman XOXO drinking vinegar, affogato trust fund prism post-ironic direct trade echo park. Truffaut raclette gastropub, everyday carry gentrify vaporware big mood polaroid. Chia DSA neutral milk hotel meggings whatever freegan coloring book snackwave stumptown waistcoat. Quinoa la croix heirloom, vape fit chia pitchfork taiyaki mlkshk air plant literally humblebrag lo-fi. Waistcoat ascot semiotics VHS try-hard chartreuse schlitz drinking vinegar jean shorts cornhole lomo meditation. Williamsburg stumptown tumeric normcore, polaroid heirloom single-origin coffee biodiesel.</Text>
    </View>
  );
}
