const dev = {
    end_point_uri: 'http://localhost:3020',
    api: 'api',
    vertion: 'v1',
    subcat_end_point: 'http://localhost:3020/api/v1/sub-categories',
};
  
const prod = {
    end_point_uri: 'http://142.93.115.215:3020',
    api: 'api',
    vertion: 'v1',
    subcat_end_point: 'http://142.93.115.215:3020/api/v1/sub-categories',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {...config};
