import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';

import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});


it('can fetch a list of comments and display them', done => {
  //Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  //find the fetchComments button and click it
  wrapped.find('.fetch-comments').simulate('click');
  //introduce a tiny little pause
  moxios.wait(() => {
    //force update of component
    wrapped.update();
    //expect to find a list of comments! 500 Li's
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});

afterEach(() => {
  moxios.uninstall();
});