import {Share} from 'react-native';

export default handleShare = () => {
  // Logika berbagi konten
  Share.share({
    message: 'Ini adalah konten yang akan dibagikan.',
  })
    .then(result => {
      if (result.action === Share.sharedAction) {
        console.log('Konten dibagikan.');
      } else if (result.action === Share.dismissedAction) {
        console.log('Berbagi dibatalkan.');
      }
    })
    .catch(error => console.log('Error', error));
};
