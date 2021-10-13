import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

SVG.propTypes = {
    width: PropTypes.any, // Chiều ngang của Icon
    height: PropTypes.any, // Chiều cao của Icon
    viewBox: PropTypes.string, // ViewBox của Icon
    fill: PropTypes.string, // Màu fill của Icon
    style: PropTypes.object, // Màu của thẻ SVG
};

SVG.defaultProps = {
    width: 512,
    height: 512,
    viewBox: '0 0 384 384',
    fill: '#454545',
    style: {},
};

function SVG(props) {
    return (
        <Svg height={props.width} viewBox={props.viewBox} width={props.height} style={props.style}>
            <Path
                d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
                fill={props.fill}
                data-original="#000000"
            />
        </Svg>
    );
}

export default SVG;
