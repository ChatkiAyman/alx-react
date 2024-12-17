import React from 'react'
import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite';

import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = (props) => {
return (
 <div className={`bodySectionWithMargin ${css(styles.mBottom)}`}>
       <BodySection {...props} />
 </div>
 )
}
const styles = StyleSheet.create({
     mBottom: {
          marginBottom: '40px'
     }
})

BodySectionWithMarginBottom.propTypes = {
     title: PropTypes.string.isRequired,
     children: PropTypes.node
};

export default BodySectionWithMarginBottom;