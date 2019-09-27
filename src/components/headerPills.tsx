import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

import SignIn from './userAccountButton';
import {CONTACT_PATH, SIGN_UP_PATH, STUDENT_PORTAL_HOME_PATH} from '../constants/paths.constant';
import {IReduxState} from '../reducers';

interface IStateProps {
  isAuthenticated: boolean
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps  {
  mode: 'vertical' | 'horizontal',
}

const {Item} = Menu;

const HeaderPills: FC<IProps> = ({mode='horizontal', isAuthenticated}: IProps) => (
  <div>
    <div className='header-pill center-hv' style={{height: '100%'}}>
      <SignIn />
    </div>

    <div className='header-pill'>
      <Menu mode={mode} style={{border: 0}}>
        <Item key='contact'>
          <Link to={CONTACT_PATH}>
            <Icon type='phone' />
            Contact Us
          </Link>
        </Item>
        {
          isAuthenticated? (
            <Item key='appstore'>
              <Link to={STUDENT_PORTAL_HOME_PATH}>
                <Icon type='appstore' />
                Placement Portal
              </Link>
            </Item>
          ) : (
            <Item key='sign-up'>
              <Link to={SIGN_UP_PATH}>
                <Icon type='user-add' />
                Create New Account
              </Link>
            </Item>
          )
        }
      </Menu>
    </div>
  </div>
);


const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderPills);