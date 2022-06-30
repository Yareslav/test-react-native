import {loadPhotos, loadError, startLoading} from '../reducers/mainReducer';

const offerPhotos = () => {
  return async dispatch => {
    const requests = [];
    const id =
      '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
    const url = `https://api.unsplash.com/photos/?client_id=${id}&per_page=30&page=`;

    const makeShorter = string => {
      if (!string) return null;
      if (string.length <= 60) return string;
      const spaceIndex = string.indexOf(' ', 59);
      return string.slice(0, spaceIndex != -1 ? spaceIndex : string.length);
    };

    for (let i = 1; i < 4; i++) {
      requests.push(fetch(url + i));
    }

    dispatch(startLoading());

    let jsonDataArray;
    try {
      const responses = await Promise.all(requests);
      jsonDataArray = await Promise.all(
        responses.map(response => response.json()),
      );
    } catch {
      return dispatch(loadError());
    }

    const formatted = jsonDataArray.flat().map(elem => ({
      url: elem.urls.regular,
      author: elem.user.name,
      key: elem.id,
      description:
        makeShorter(elem.description) || makeShorter(elem.alt_description),
    }));

    dispatch(loadPhotos(formatted));
  };
};

export default offerPhotos;
