import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer vDJGRG2qR6gJi_h6FfbM0Kl7U0NYO8nSlV-PAabE84hhgWXt0IIffUAxswhOthQkKMdo9vltVdWDG4Dyr-zDqCH4zGYO7qeukbZ8V6OMY8UURGiXumtKSKVlff9aX3Yx'
  }
});
