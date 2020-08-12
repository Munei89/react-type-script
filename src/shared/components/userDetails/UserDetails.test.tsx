import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from '.';
import IUserDetails from 'src/interfaces/IUserDetails';

const testUser: IUserDetails = {
  id: 1,
  name: 'testName',
  email: 'testEmail@gmail.com',
  username: 'testUsername',
  phone: '546446545646',
  website: 'www.test.com',
  company: {
    bs: 'test-bs',
    catchPhrase: 'test cache phrase',
    name: 'test company name'
  },
  address: {
    city: 'test city',
    geo: {
      lat: '36.56',
      lng: '71.56'
    },
    street: 'test street',
    suite: 'test suite',
    zipcode: 'test zipcode'
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDetails user={testUser} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
