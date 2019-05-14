import React from 'react';
import classes from './RightSidebar.scss';
import { Checkbox } from 'components';

export default () => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Settings
        </h6>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-black'>Notifications</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-black'>Activity</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-black'>Statisticts</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className={ `${classes.flexSpaceBetween} m-b-1` }>
                <span className='text-black'>Responsive Settings</span>
                <Checkbox className='m-b-0' />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
    </div>
);
