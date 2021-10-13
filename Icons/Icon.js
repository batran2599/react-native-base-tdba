import React from 'react';
import PropTypes from 'prop-types';
import ListIcon from './ListIcon';

Icon.propTypes = {
    name: PropTypes.string, // Tên Icon
    width: PropTypes.any, // Chiều ngang của Icon
    height: PropTypes.any, // Chiều cao của Icon
    viewBox: PropTypes.string, // ViewBox của Icon
    fill: PropTypes.string, // Màu fill của Icon
    style: PropTypes.object, // Màu của thẻ SVG
};

/**
 * Component Icon
 * @param {*} props
 * @author TDBA (13/06/2021)
 */
export default function Icon(props) {
    return <ListIcon {...props} />;
}
