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
    viewBox: '0 0 191.667 191.667',
    fill: '#bbb',
    style: {},
};

function SVG(props) {
    return (
        <Svg height={props.width} viewBox={props.viewBox} width={props.height} style={props.style}>
            <Path
                d="M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646l-60.207 60.207a13.463 13.463 0 01-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 01-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 019.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 019.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z"
                fill={props.fill}
                data-original="#000000"
            />
        </Svg>
    );
}

export default SVG;
